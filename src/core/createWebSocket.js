export default () => {
    const URI = 'ws://localhost:8090/';
    const ws = new WebSocket(URI);
    return ws;
}