import React from 'react';
import Users from './components/users/UsersContainer';
import Posts from './components/posts/PostsContainer';
import Login from './components/logIn/LoginContainer';
import {getLoggedIn} from './core/selectors'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  isLoggedIn: getLoggedIn(state)
})

const AppComponent = (props) => (
      <div>
      {props.isLoggedIn ? 
        <div>
          <Users />
          <hr />
          <Posts />
        </div> : <Login /> }
      </div>
    );

export default connect(
  mapStateToProps
)(AppComponent)
