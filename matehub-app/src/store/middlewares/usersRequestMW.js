import axios from 'axios';
import {
  GET_TOP_USERS,
  getTopUsersSuccess,
  getTopUsersError,
  GET_USER,
  getUserSuccess,
  getUserError,
} from '../actions/usersActions';

const host = `${process.env.REACT_APP_URL}`

export default (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case GET_TOP_USERS:
      axios({
        method: 'get',
        // url: 'http://ec2-3-86-206-225.compute-1.amazonaws.com:3001/user/top',
        url: `${host}users/top`,
      })
        .then((res) => {
          store.dispatch(getTopUsersSuccess(res.data.data));
        })
        .catch((err) => {
          store.dispatch(
            getTopUsersError('Impossible de récupérer les user...')
          );
        });
      break;
    case GET_USER:
      const { selectedUser } = store.getState().users;
      axios({
        method: 'get',
        url: `${host}user/profile/${selectedUser}`,
      })
        .then((res) => {
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
