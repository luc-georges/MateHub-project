import { connect } from 'react-redux';
import ProfilePage from '../components/ProfilePage/ProfilePage';
import { getUser } from '../store/actions/usersActions';

// import { getUserById } from '../store/reducers/usersReducer';

const mapStateToProps = (state, ownProps) => {
  // const id = ownProps.match.params.id;
  return { userData: state.users.userData, };
  // return { userData: getUserById(state, id), };
};

const mapDispatchToProps = (dispatch) => ({
  getUser: () => {
    dispatch(getUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
