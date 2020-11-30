import { connect } from 'react-redux';
import SideBar from '../components/SideBar/SideBar';
import { logout } from '../store/actions/authActions';
import { getSelectedEvent, getEventById } from '../store/actions/eventsActions';

const mapStateToProps = (state) => ({
  list: state.events.list,
  isLogged: state.auth.isLogged,
  personnalData: state.auth.personnalData,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logout());
  },
  getSelectedEvent: (changedData) => {
    dispatch(getSelectedEvent(changedData));
  },

  getEventById: () => {
    dispatch(getEventById());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
