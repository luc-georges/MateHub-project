import axios from 'axios';
import { GET_EVENTS } from '../actions/eventActions'

const eventsRequestMW = (store) => (next) => (action) => {
  console.log("Passage dans le eventsRequestMW");
  next(action);
  switch (action.type) {
    case GET_EVENTS:
      axios({
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        url: 'http://localhost:3001/events',
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          console.log("second catch du eventsRequestMW")
        })
      break;
    default:
      return;
  }
};

export default eventsRequestMW;