import axios from 'axios';
import {
  GET_EVENTS,
  getEventsSuccess,
  getEventsError,
  CREATE_EVENT_SUBMIT,
  CreateEventSubmitSuccess,
  CreateEventSubmitError,
} from '../actions/eventsActions';

const eventsRequestMW = (store) => (next) => (action) => {
  // console.log("Passage dans le eventsRequestMW");
  const {connectedUserId} = store.getState().auth;
  // console.log(connectedUserId);
  next(action);
  switch (action.type) {
    case CREATE_EVENT_SUBMIT:
      axios({
        method: 'post',
        url: `http://localhost:3001/createEvent/user/${connectedUserId}`,
        data: {
          user_id: store.getState().auth.connectedUserId,
          game_id: store.getState().events.eventCreationData.game_id,
          player_count: 1,
          player_max: store.getState().events.eventCreationData.player_max,
          duration: store.getState().events.eventCreationData.duration,
          event_time: store.getState().events.eventCreationData.event_time,
          status: 0,
          description: store.getState().events.eventCreationData.description,
          vocal: store.getState().events.eventCreationData.vocal,
        }
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(
            "On passe dans le catch de la requete de création d'event >>>",
            err
          );
        });
      break;
    case GET_EVENTS:
      axios({
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
        // url: 'http://ec2-54-242-201-96.compute-1.amazonaws.com/events',
        url: 'http://localhost:3001/events',
      })
        .then((res) => {
          //console.log("res.data dans le MW: ", res.data);
          store.dispatch(getEventsSuccess(res.data.data));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(
            getEventsError('Impossible des récupérer les données')
          );
        });
      break;
    default:
      return;
  }
};

export default eventsRequestMW;
