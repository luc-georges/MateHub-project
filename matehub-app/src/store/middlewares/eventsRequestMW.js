import axios from 'axios';
import {
  GET_EVENT_BY_ID,
  getEventByIdSuccess,
  GET_ALL_EVENTS,
  getAllEventsSuccess,
  getAllEventsError,
  CREATE_EVENT_SUBMIT,
  CreateEventSubmitSuccess,
  CreateEventSubmitError,
  APPLY_TO_EVENT,
} from '../actions/eventsActions';

const eventsRequestMW = (store) => (next) => (action) => {
  // console.log("Passage dans le eventsRequestMW");
  const { connectedUserId } = store.getState().auth;
  const { event_id } = store.getState().events.applyToEventData;
  // console.log(connectedUserId);
  next(action);
  switch (action.type) {
    case APPLY_TO_EVENT:
    axios({
      method: 'post',
      url: `http://localhost:3001/eventApply/event/${event_id}/user/${connectedUserId}`,
      data: {
        user_id: connectedUserId,
        event_id: event_id,
      }
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    });  
    break;
    case CREATE_EVENT_SUBMIT:
      const eventTime = `${
        store.getState().events.eventCreationData.event_time_date
      } ${store.getState().events.eventCreationData.event_time_hour}:00`;
      axios({
        method: 'post',
        url: `http://localhost:3001/createEvent/user/${connectedUserId}`,
        data: {
          user_id: store.getState().auth.connectedUserId,
          game_id: store.getState().events.eventCreationData.game_id,
          player_count: 1,
          player_max: store.getState().events.eventCreationData.player_max,
          duration: store.getState().events.eventCreationData.duration,
          event_time: eventTime,
          status: 0,
          description: store.getState().events.eventCreationData.description,
          vocal: store.getState().events.eventCreationData.vocal,
          language: {
            fr1: store.getState().events.eventCreationData.language.fr1,
            uk2: store.getState().events.eventCreationData.language.uk2,
            it3: store.getState().events.eventCreationData.language.it3,
            es4: store.getState().events.eventCreationData.language.es4,
            ru5: store.getState().events.eventCreationData.language.ru5,
            de6: store.getState().events.eventCreationData.language.de6,
          },
        },
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(CreateEventSubmitSuccess(res.data.data));
        })
        .catch((err) => {
          console.log(
            "On passe dans le catch de la requete de création d'event >>>",
            err
          );
          store.dispatch(CreateEventSubmitError());
        });
      break;
    case GET_ALL_EVENTS:
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
          store.dispatch(getAllEventsSuccess(res.data.data));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(
            getAllEventsError('Impossible des récupérer les données')
          );
        });
      break;
    case GET_EVENT_BY_ID:
      // console.log(store.getState().events)
      const {selectedEvent} = store.getState().events;
      axios({
        method: 'get',
        url: `http://localhost:3001/event/${selectedEvent}`,
      })
        .then((res) => {
          // console.log(res.data);
          store.dispatch(getEventByIdSuccess(res.data.data));
        })
        .catch((err) => {
          console.log("Catch de la requete get event by id >>>", err);
          // store.dispatch(getEventByIdError());
        });
      break;
    default:
      return;
  }
};

export default eventsRequestMW;
