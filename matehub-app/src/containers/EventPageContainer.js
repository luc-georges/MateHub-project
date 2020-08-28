import { connect } from 'react-redux';
import EventPage from '../components/EventPage/EventPage';
import { getEventById } from '../store/actions/eventsActions';

const mapStateToProps = (state) => {
  return { eventData: state.events.eventData };
};

const mapDispatchToProps = (dispatch) => ({
  getEventById: () => {
    dispatch(getEventById());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
