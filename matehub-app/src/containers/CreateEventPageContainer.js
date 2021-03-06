import { connect } from 'react-redux';
import CreateEventPage from '../components/CreateEventPage/CreateEventPage';
import {
  eventChangeField,
  CreateEventSubmit,
  flagCheckboxChangeField,
  isRankedCheckboxCreateEventChangeField,
} from '../store/actions/eventsActions';
import { getPersonnalData } from '../store/actions/authActions';

// import moment from 'moment';

const mapStateToProps = (state) => {

  return {
    eventCreationData: {
      user_id: state.events.eventCreationData.user_id,
      game_id: state.events.eventCreationData.game_id,
      player_count: 1, // Tout le temps 1
      player_max: state.events.eventCreationData.player_max,
      duration: state.events.eventCreationData.duration,
      event_time: state.events.eventCreationData.event_time,
      event_time_date: state.events.eventCreationData.event_time_date,
      event_time_hour: state.events.eventCreationData.event_time_hour,
      status: 0, // Tout le temps 0
      description: state.events.eventCreationData.description,
      language: {
        fr1: state.events.eventCreationData.language.fr1,
        uk2: state.events.eventCreationData.language.uk2,
        it3: state.events.eventCreationData.language.it3,
        es4: state.events.eventCreationData.language.es4,
        ru5: state.events.eventCreationData.language.ru5,
        de6: state.events.eventCreationData.language.de6,
      },
      isRanked: state.events.eventCreationData.isRanked,
    },
    selectedEvent: state.events.selectedEvent,
    created: state.events.created,
    eventCreationErrorMessage: state.events.eventCreationErrorMessage,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onisRankedCheckboxCreateEventChangeField: (changedData) => {
    dispatch(isRankedCheckboxCreateEventChangeField(changedData));
  },
  onFlagCheckboxChangeField: (changedData) => {
    dispatch(flagCheckboxChangeField(changedData));
  },
  onChangeField: (changedData) => {

    dispatch(eventChangeField(changedData));
  },
  onFormSubmit: (evt) => {

    evt.preventDefault();
    dispatch(CreateEventSubmit());
  },
  getPersonnalData: () => {
    dispatch(getPersonnalData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventPage);
