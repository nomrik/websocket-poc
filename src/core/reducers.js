import actionTypes from './actionTypes';
import {combineReducers} from 'redux';

const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_USERS:
            return action.users;
        default:
            return state;
    }
}

const postsReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_POSTS:
            return action.posts;
        default:
            return state;
    }
}

const loggedInReducer = (state = false, action) => {
    switch (action.type) {
        case actionTypes.LOG_IN:
            return true;
        case actionTypes.LOG_OUT:
            return false;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    loggedIn: loggedInReducer
});

export default rootReducer;