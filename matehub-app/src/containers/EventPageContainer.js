import { connect } from 'react-redux';
import EventPage from '../components/EventPage/EventPage';
import { getEventById, applyToEvent, applyEventChangeField} from '../store/actions/eventsActions';

const mapStateToProps = (state) => ({
  eventData: state.events.eventData,
  connectedUserId: state.auth.connectedUserId,
  applyMessage: state.events.applyToEventData.applyMessage,
});

const mapDispatchToProps = (dispatch) => ({
  getEventById: () => {
    dispatch(getEventById());
  },
  getApplyToEvent: (changedData) => {
    // console.log(changedData)
    dispatch(applyToEvent(changedData));
  },
  onChangeField: (changedData) => {
    dispatch(applyEventChangeField(changedData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
