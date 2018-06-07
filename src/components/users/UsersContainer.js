import {connect} from 'react-redux';
import {getUsers} from '../../core/selectors';
import UsersComponent from './UsersComponent';

const mapStateToProps = (state) => ({
    users: getUsers(state)
})

export default connect(
    mapStateToProps
)(UsersComponent)