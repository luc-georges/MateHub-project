import { connect } from 'react-redux'
import EventBar from '../components/EventBar/EventBar';
import { logout } from '../store/actions/authActions';
const  mapStateToProps = (state) => ({
  list: state.events.list,
  isLogged: state.auth.isLogged,
  personnalData: state.auth.personnalData,
})

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    console.log('logout');
    dispatch(logout());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(EventBar);
