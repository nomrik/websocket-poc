import {connect} from 'react-redux';
import {getPosts, getUsers} from '../../core/selectors';
import {createNewPost} from '../../core/actionCreators';
import PostsComponent from './PostsComponent';

const mapStateToProps = (state) => ({
    posts: getPosts(state),
    users: getUsers(state)
})

const mapDispatchToProps = (dispatch) => ({
    onCreateNewPost: (post) => dispatch(createNewPost(post))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsComponent)