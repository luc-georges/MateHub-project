import axios from 'axios';
import { GET_TOP_USERS, getTopUsersSuccess, getTopUsersError } from '../actions/usersActions'

const usersRequestMW = (store) => (next) => (action) => {
  // console.log("Passage dans le usersRequestMW");
  next(action);
  switch (action.type) {
    case GET_TOP_USERS:
      axios({
        method: 'get',
        url: 'http://localhost:3001/user/top',
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(getTopUsersSuccess(res.data.data));
        })
        .catch((err) => {
          console.log(err); 
          store.dispatch(getTopUsersError("Impossible de récupérer les user..."))
        })
      break;
    default:
      return;
  }
};

export default usersRequestMW;
