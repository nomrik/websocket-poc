const WebSocket = require('ws');

const wss = new WebSocket.Server({port:8090});

console.log('STARTED SERVER');

let DB = {
    users: {},
    posts: {}
}

let postId = 1;

wss.broadcast = (message) => {
    wss.clients.forEach(client => {
        client.send(JSON.stringify(message))
    })
}

const updateUsers = () => {
    wss.broadcast({type: 'UPDATE_USERS', users: DB.users})
}

const updatePosts = () => {
    wss.broadcast({type: 'UPDATE_POSTS', posts: DB.posts})
}

wss.on('connection', function (ws, req) {
    let {headers: {origin}} = req;

    console.log(`recieved connection from ${origin}`);
    wss.broadcast({type: 'NEW_CONNECTION', user: origin})
    ws.on('message', function (body) {
        console.log(body)
        message = JSON.parse(body);
        console.log(message);
        switch (message.type) {
            case 'NEW_USER':
                DB.users[origin] = {userId: origin, userName: message.userName}
                updateUsers()
                break;
            case 'NEW_POST':
                DB.posts[postId] = {postId, userId: origin, post: message.post};
                updatePosts();
                postId++;
                break;
            default:
                console.log('unknown message');
                break;
        }
    })
});