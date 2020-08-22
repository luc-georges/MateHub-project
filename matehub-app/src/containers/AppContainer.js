import { connect } from 'react-redux';
import { getEvents } from '../store/actions/eventsActions';
import { getTopUsers, checkAuth } from '../store/actions/usersActions';
import App from '../components/App/App';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  getEvents: () => {
    dispatch(getEvents());
  },
  getTopUsers: () => {
    dispatch(getTopUsers());
  },
  checkAuth: () => {
    dispatch(checkAuth());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
