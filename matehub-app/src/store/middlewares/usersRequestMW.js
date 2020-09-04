import axios from 'axios';
import {
  GET_TOP_USERS,
  getTopUsersSuccess,
  getTopUsersError,
  GET_USER,
  getUserSuccess,
  getUserError,
} from '../actions/usersActions';

export default (store) => (next) => (action) => {
  // console.log("Passage dans le usersRequestMW");
  next(action);
  switch (action.type) {
    case GET_TOP_USERS:
      axios({
        method: 'get',
        // url: 'http://ec2-3-86-206-225.compute-1.amazonaws.com:3001/user/top',
        url: 'http://localhost:3001/users/top',
      })
        .then((res) => {
          // console.log(res.data);
          store.dispatch(getTopUsersSuccess(res.data.data));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(
            getTopUsersError('Impossible de récupérer les user...')
          );
        });
      break;
    case GET_USER:
      const { selectedUser } = store.getState().users;
      axios({
        method: 'get',
        url: `http://localhost:3001/user/profile/${selectedUser}`,
      })
        .then((res) => {
          console.log("in my response",res.data.data)
          store.dispatch(getUserSuccess(res.data.data));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(getUserError("L'utilisateur n'a pas été trouvé"));
        });
      break;
    default:
      return;
  }
};
