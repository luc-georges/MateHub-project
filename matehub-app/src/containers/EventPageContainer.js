import { connect } from 'react-redux';
import EventPage from '../components/EventPage/EventPage';
import { getSelectedUser } from '../store/actions/usersActions'; 
import {
  getEventById,
  applyToEvent,
  applyEventChangeField,
  applyAccept,
  applyRefuse,
  selectPlayerToAcceptOrRefuseInEvent,
  deleteEvent,
} from '../store/actions/eventsActions';

const mapStateToProps = (state) => ({
  eventData: state.events.eventData,
  connectedUserId: state.auth.connectedUserId,
  applyMessage: state.events.applyToEventData.applyMessage,
  applyToEventErrorMessage: state.events.applyToEventErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  getEventById: () => {
    dispatch(getEventById());
  },

  getApplyToEvent: (changedData) => {

    dispatch(applyToEvent(changedData));
  },

  onChangeField: (changedData) => {
    dispatch(applyEventChangeField(changedData));
  },

  onApplyAccept: () => {

    dispatch(applyAccept());
  },

  onApplyRefuse: () => {

    dispatch(applyRefuse());
  },

  selectPlayerToAcceptOrRefuseInEvent: (data) => {
    dispatch(selectPlayerToAcceptOrRefuseInEvent(data));
  },

  onDeleteEvent: () => {
    dispatch(deleteEvent());
  },

  getSelectedUser: (id) => {
    dispatch(getSelectedUser(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
