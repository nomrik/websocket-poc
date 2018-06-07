import actionTypes from './actionTypes';

export const createNewUser = (userName) => ({
    type: actionTypes.NEW_USER,
    userName
});

export const createNewPost = (post) => ({
    type: actionTypes.NEW_POST,
    post
});

export const login = () => ({
    type: actionTypes.LOG_IN
})

export default {
    createNewUser,
    createNewPost,
    login
}