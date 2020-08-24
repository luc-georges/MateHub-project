import axios from 'axios';
import {
  GET_EVENTS,
  getEventsSuccess,
  getEventsError,
} from '../actions/eventsActions';

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
        url: 'http://ec2-3-86-206-225.compute-1.amazonaws.com:3001/events',
        //url: 'http://localhost:3001/events',
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
