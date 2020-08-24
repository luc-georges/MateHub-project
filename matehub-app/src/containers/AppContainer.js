import { connect } from 'react-redux';
import { getEvents } from '../store/actions/eventsActions';
import { getTopUsers } from '../store/actions/usersActions';
import { checkAuth } from '../store/actions/authActions';
import { getNews } from '../store/actions/newsActions';
import App from '../components/App/App';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  getEvents: () => {
    dispatch(getEvents());
  },
  getNews: () => {
    dispatch(getNews());
  },
  getTopUsers: () => {
    dispatch(getTopUsers());
  },
  checkAuth: () => {
    dispatch(checkAuth());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
