import axios from 'axios';
import {
  GET_EVENTS,
  getEventsSuccess,
  getEventsError,
} from '../actions/eventActions';

const eventsRequestMW = (store) => (next) => (action) => {
  // console.log("Passage dans le eventsRequestMW");
  next(action);
  switch (action.type) {
    case GET_EVENTS:
      axios({
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
        url: 'http://localhost:3001/events',
      })
        .then((res) => {
          console.log("On passe dans le .then");
          console.log("res.data dans le MW: ", res.data);
          store.dispatch(getEventsSuccess(res.data.data));
        })
        .catch((err) => {
          console.log("On passe dans le .catch");
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
