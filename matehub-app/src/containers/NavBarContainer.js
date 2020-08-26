import { connect } from 'react-redux';
import NavBar from '../components/NavBar/NavBar';
import { getSelectedUser } from '../store/actions/usersActions';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  connectedUserId: state.auth.connectedUserId,
});

const mapDispatchToProps = (dispatch) => ({
  getSelectedUser: (id) => {
    dispatch(getSelectedUser(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
