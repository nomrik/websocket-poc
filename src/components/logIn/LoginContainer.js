import {connect} from 'react-redux';
import {createNewUser, login} from '../../core/actionCreators';
import LoginComponent from './LoginComponent';

const mapDispatchToProps = (dispatch) => ({
    onCreateNewUser: (userName) => {
        dispatch(createNewUser(userName))
        dispatch(login())
    }
});

export default connect(
    null,
    mapDispatchToProps
)(LoginComponent);

