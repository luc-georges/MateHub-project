import axios from 'axios';
import Toastify from 'toastify-js'
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
  applyToEventSuccess,
  applyToEventError,
  getEventById,
  APPLY_ACCEPT,
  APPLY_REFUSE,
  DELETE_EVENT,
  SEARCH_EVENT_SUBMIT,
  searchEventSubmitSuccess,
  getAllEvents,
} from '../actions/eventsActions';
import { getPersonnalData} from '../actions/authActions'
const host = process.env.REACT_APP_URL;

const eventsRequestMW = (store) => (next) => (action) => {

  const { connectedUserId } = store.getState().auth;

  const fullData = store.getState().events.searchEventData;
  let filteredData = {};

  Object.keys(fullData).forEach((key) => {
    if (fullData[key] !== '') {
      filteredData[key] = fullData[key];
    }
  });

  next(action);
  switch (action.type) {
    case DELETE_EVENT:
      axios({
        method: 'delete',
        url: `${host}deleteEvent/event/${
          store.getState().events.eventData._event_id
        }/user/${store.getState().events.eventData._user_id}`,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    case APPLY_ACCEPT:
      axios({
        method: 'put',
        url: `${host}updateEvent/event/${
          store.getState().events.eventData._event_id
        }/owner/${store.getState().events.eventData._user_id}/addUserOn/${
          store.getState().events.playerToAcceptOrRefuseInEvent
        }`,
      })
        .then((res) => {
          store.dispatch(getEventById());
          Toastify({
            text: `Apply accepted`,
            duration: 3000, 
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            gravity: "top", // `top` or `bottom`
            position: 'center', // `left`, `center` or `right`
            className:"info",
            backgroundColor: "66fcf200",
            stopOnFocus: true, // Prevents dismissing of toast on hover
            onClick: function(){} // Callback after click
          }).showToast();
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    case APPLY_REFUSE:
      axios({
        method: 'put',
        url: `${host}updateEvent/event/${
          store.getState().events.eventData._event_id
        }/owner/${store.getState().events.eventData._user_id}/kickUser/${
          store.getState().events.playerToAcceptOrRefuseInEvent
        }`,
      })
        .then((res) => {
          store.dispatch(getEventById());
          Toastify({
            text: `Apply rejected`,
            duration: 3000, 
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            gravity: "top", // `top` or `bottom`
            position: 'center', // `left`, `center` or `right`
            className:"info",
            backgroundColor: "linear-gradient(0deg, rgba(31,40,51,50) 0%, rgba(69,162,157,50) 75%, rgba(102,252,242,50) 100%)",
            stopOnFocus: true, // Prevents dismissing of toast on hover
            onClick: function(){} // Callback after click
          }).showToast();
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    case APPLY_TO_EVENT:
      axios({
        method: 'post',
        url: `${host}eventApply/event/${
          store.getState().events.applyToEventData.event_id
        }/user/${store.getState().auth.connectedUserId}`,
        data: {
          message: store.getState().events.applyToEventData.applyMessage,
        },
      })
        .then((res) => {
          store.dispatch(applyToEventSuccess(res.data.data));
          store.dispatch(getEventById());
          Toastify({
            text: `Successfully applied to event`,
            duration: 3000, 
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            gravity: "top", // `top` or `bottom`
            position: 'center', // `left`, `center` or `right`
            className:"info",
            backgroundColor: "linear-gradient(0deg, rgba(31,40,51,50) 0%, rgba(69,162,157,50) 75%, rgba(102,252,242,50) 100%)",
            stopOnFocus: true, // Prevents dismissing of toast on hover
            onClick: function(){} // Callback after click
          }).showToast();
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(applyToEventError("Can't apply to event"));
        });
      break;
    case SEARCH_EVENT_SUBMIT:
      axios({
        method: 'post',
        url: `${host}search/events/user/${connectedUserId}`,
        data: filteredData,
      })
        .then((res) => {
          store.dispatch(searchEventSubmitSuccess(res.data.data));
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    case CREATE_EVENT_SUBMIT:
      const eventTime = `${
        store.getState().events.eventCreationData.event_time_date
      } ${store.getState().events.eventCreationData.event_time_hour}:00`;
      axios({
        method: 'post',
        url: `${host}createEvent/user/${connectedUserId}`,
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
          rank: store.getState().events.eventCreationData.rank,
          language: {
            fr1: store.getState().events.eventCreationData.language.fr1,
            uk2: store.getState().events.eventCreationData.language.uk2,
            it3: store.getState().events.eventCreationData.language.it3,
            es4: store.getState().events.eventCreationData.language.es4,
            ru5: store.getState().events.eventCreationData.language.ru5,
            de6: store.getState().events.eventCreationData.language.de6,
          },
          is_ranked: store.getState().events.eventCreationData.is_ranked,
        },
      })
        .then((res) => {

          store.dispatch(CreateEventSubmitSuccess(res.data.data.event._id));
          Toastify({
            text: `Event Created !`,
            duration: 3000, 
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            gravity: "top", // `top` or `bottom`
            position: 'center', // `left`, `center` or `right`
            className:"info",
            stopOnFocus: true, // Prevents dismissing of toast on hover
            onClick: function(){} // Callback after click
          }).showToast();
        }).then((res)=>{
          store.dispatch(getPersonnalData())
          store.dispatch(getAllEvents())
        })
        .catch((err) => {
          store.dispatch(CreateEventSubmitError(err.response.data.details[0].message));
        });
      break;
    case GET_ALL_EVENTS:
      axios({
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
        // url: 'http://ec2-54-242-201-96.compute-1.amazonaws.com/events',
        url: `${host}events`,
      })
        .then((res) => {
          store.dispatch(getAllEventsSuccess(res.data.data));
        })
        .catch((err) => {
          store.dispatch(
            getAllEventsError('Impossible des récupérer les données')
          );
        });
      break;
    case GET_EVENT_BY_ID:
      const { selectedEvent } = store.getState().events;
      axios({
        method: 'get',
        url: `${host}event/${selectedEvent}`,
      })
        .then((res) => {
          store.dispatch(getEventByIdSuccess(res.data.data));
        })
        .catch((err) => {
          // store.dispatch(getEventByIdError());
        });
      break;
    default:
      return;
  }
};

export default eventsRequestMW;
