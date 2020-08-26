import { connect } from 'react-redux';
import NavBar from '../components/NavBar/NavBar';
import { getSelectedUser } from '../store/actions/usersActions';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  connectedUserData: state.auth.connectedUserData,
});

const mapDispatchToProps = (dispatch) => ({
  getSelectedUser: (id) => {
    dispatch(getSelectedUser(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
