import axios from 'axios';
import { GET_EVENTS, getEventsSuccess, getEventsError } from '../actions/eventsActions'

const eventsRequestMW = (store) => (next) => (action) => {
  console.log("Passage dans le eventsRequestMW");
  next(action);
  switch (action.type) {
    case GET_EVENTS:
      axios({
        method: 'get',
        url: 'http://localhost:3001/events',
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(getEventsSuccess(res.data.data));
        })
        .catch((err) => {
          console.log(err); 
          store.dispatch(getEventsError("Impossible de récupérer les events..."))
        })
      break;
    default:
      return;
  }
};

export default eventsRequestMW;
