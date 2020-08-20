import axios from 'axios';
import { GET_USERS, getUsersSuccess, getUsersError } from '../actions/usersActions'

const eventsRequestMW = (store) => (next) => (action) => {
  console.log("Passage dans le usersRequestMW");
  next(action);
  switch (action.type) {
    case GET_USERS:
      axios({
        method: 'get',
        url: 'http://localhost:3001/users/top',
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(getUsersSuccess(res.data.data));
        })
        .catch((err) => {
          console.log(err); 
          store.dispatch(getUsersError("Impossible de récupérer les user..."))
        })
      break;
    default:
      return;
  }
};

export default usersRequestMW;
