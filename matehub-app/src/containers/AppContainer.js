import { connect } from 'react-redux';
import { getAllEvents } from '../store/actions/eventsActions';
import { getTopUsers, getUser } from '../store/actions/usersActions';
import { checkAuth } from '../store/actions/authActions';
import { getNews } from '../store/actions/newsActions';
import App from '../components/App/App';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  registered: state.register.registered,
});

const mapDispatchToProps = (dispatch) => ({
  getAllEvents: () => {
    dispatch(getAllEvents());
  },
  getNews: () => {
    dispatch(getNews());
  },
  getTopUsers: () => {
    dispatch(getTopUsers());
  },
  checkAuth: () => {
    dispatch(checkAuth());
  },
  getUser: () => {
    dispatch(getUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
