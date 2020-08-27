import { connect } from 'react-redux';
import CreateEventPage from '../components/CreateEventPage/CreateEventPage';
import { eventChangeField, CreateEventSubmit } from '../store/actions/eventsActions';
import moment from 'moment';

const mapStateToProps = (state) => {
  console.log(state.events);
  return {
    eventCreationData: {
      user_id: state.events.eventCreationData.user_id,
      game_id: state.events.eventCreationData.game_id,
      player_count: 1, // Tout le temps 1
      player_max: state.events.eventCreationData.player_max,
      duration: state.events.eventCreationData.duration,
      event_time: moment(state.events.eventCreationData.event_time).format("yyyy-MM-DDThh:mm:ss"),
      status: 0, // Tout le temps 0
      description: state.events.eventCreationData.description,
      flag: state.events.eventCreationData.flag,
    },
    // errors: {
    //   durationError: state.events.errors.durationError,
    //   game_idError: state.events.errors.game_idError,
    //   player_maxError: state.events.errors.player_maxError,
    // },
    errors: {
      durationError: true,
      game_idError: true,
      player_maxError: true,
    }
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChangeField: (changedData) => {
    // console.log(changedData);
    dispatch(eventChangeField(changedData));
  },
  onFormSubmit: () => {
    console.log('Submit dans le create event');
    dispatch(CreateEventSubmit());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventPage);
