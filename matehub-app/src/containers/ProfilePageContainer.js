import { connect } from 'react-redux';
import ProfilePage from '../components/ProfilePage/ProfilePage';
import { getUser } from '../store/actions/usersActions';

// import { getUserById } from '../store/reducers/usersReducer';

const mapStateToProps = (state) => ({
  userData: state.users.userData,
  userById: state.users.userById,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: () => {
    dispatch(getUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
