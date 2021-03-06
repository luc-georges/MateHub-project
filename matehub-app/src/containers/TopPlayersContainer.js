import { connect } from 'react-redux';
import  TopPlayers  from '../components/TopPlayers/TopPlayers';
import { getSelectedUser, getUser } from '../store/actions/usersActions';

const  mapStateToProps = (state) => ({
  topUsersList: state.users.topUsersList
  
})

const mapDispatchToProps = (dispatch) => ({
  getSelectedUser: (id) => {
    dispatch(getSelectedUser(id));
  },
  
  getUser: () => {
    dispatch(getUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TopPlayers);
