import React from 'react';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleNewUser = this.handleNewUser.bind(this);
    }

    handleChange(e) {
        this.setState({newUser: e.target.value});
    }

    handleNewUser() {
        this.props.onCreateNewUser(this.state.newUser);
        this.setState({newUser: ''})
    }

    render() {
        return (
            <div>
                <h1>Log In</h1>
                <input type="text" value={this.state.newUser} onChange={this.handleChange} />
                <button onClick={this.handleNewUser}>Login</button>
            </div>
        )
    }
}

export default LoginComponent;