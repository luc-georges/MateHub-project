import { connect } from 'react-redux';
import { getEvents } from '../store/actions/eventsActions';
import { getTopUsers } from '../store/actions/usersActions';
import App from '../components/App/App';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  getEvents: () => {
    dispatch(getEvents());
  },
  getTopUsers: () => {
    dispatch(getTopUsers());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
