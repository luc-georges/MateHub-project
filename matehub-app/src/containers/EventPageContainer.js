import { connect } from 'react-redux';
import EventPage from '../components/EventPage/EventPage';
import { getEventById, applyToEvent} from '../store/actions/eventsActions';

const mapStateToProps = (state) => ({
  eventData: state.events.eventData,
  connectedUserId: state.auth.connectedUserId,
});

const mapDispatchToProps = (dispatch) => ({
  getEventById: () => {
    dispatch(getEventById());
  },
  getApplyToEvent: (changedData) => {
    console.log(changedData)
    dispatch(applyToEvent(changedData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
