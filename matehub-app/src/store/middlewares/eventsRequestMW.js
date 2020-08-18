import axios from 'axios';
import { GET_EVENTS } from '../actions/eventActions'

const eventsRequestMW = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case GET_EVENTS:
      axios({
        method: 'get',
        url: 'http://localhost:3001/events',
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          console.log("on arrive jusqu'à la fin du MW")
        })
      break;
    default:
      return;
  }
};

export default eventsRequestMW;
