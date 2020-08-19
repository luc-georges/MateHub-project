import { connect } from 'react-redux'
import { getEvents } from '../store/actions/eventActions'
import App from '../components/App/App';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  getEvents: () => {
    dispatch(getEvents());
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
