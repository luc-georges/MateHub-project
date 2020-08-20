import { connect } from 'react-redux'
import { getEvents } from '../store/actions/eventsActions'
import App from '../components/App/App';
<<<<<<< HEAD

const mapStateToProps = null;

=======
const mapStateToProps = null;
>>>>>>> feature/data-from-reducer-to-homepage
const mapDispatchToProps = (dispatch) => ({
  getEvents: () => {
    dispatch(getEvents());
  },
})
<<<<<<< HEAD

=======
>>>>>>> feature/data-from-reducer-to-homepage
export default connect(mapStateToProps, mapDispatchToProps)(App);
