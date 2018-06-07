import React from 'react';

class PostsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newPost: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleNewPost = this.handleNewPost.bind(this);
    }

    handleChange(e) {
        this.setState({newPost: e.target.value});
    }

    handleNewPost() {
        this.props.onCreateNewPost(this.state.newPost);
        this.setState({newPost: ''})
    }

    render() {
        return (
            <div>
                <h1>Posts</h1>
                <input 
                    type="text" 
                    value={this.state.newPost} 
                    onChange={this.handleChange} />
                <button onClick={this.handleNewPost}>Post</button>
                {Object.values(this.props.posts).map(post => (
                    <p key={post.postId}>{this.props.users[post.userId].userName}: {post.post}</p>
                ))}
            </div>
        )
    }
}

export default PostsComponent;