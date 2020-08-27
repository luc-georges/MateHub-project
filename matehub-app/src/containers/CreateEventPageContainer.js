import { connect } from 'react-redux';
import CreateEventPage from '../components/CreateEventPage/CreateEventPage';
import { changeField } from '../store/actions/eventsActions';

const mapStateToProps = (state) => {
  console.log(state.events.eventCreationData);
  return {
    eventCreationData: {
      user_id: state.events.eventCreationData.user_id,
      game_id: state.events.eventCreationData.game_id,
      player_count: state.events.eventCreationData.player_count, // Tout le temps 1
      player_max: state.events.eventCreationData.player_max,
      duration: state.events.eventCreationData.duration,
      event_time: state.events.eventCreationData.event_time,
      status: state.events.eventCreationData.status, // Tout le temps 0
      description: state.events.eventCreationData.description,
    },
  };
  // return {eventCreationData: state.events.eventCreationData,}
};

const mapDispatchToProps = (dispatch) => ({
  onChangeField: (changedData) => {
    // console.log(changedData);
    dispatch(changeField(changedData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventPage);
