import axios from 'axios';
import {
  GET_TOP_USERS,
  getTopUsersSuccess,
  getTopUsersError,
  LOGIN_SUBMIT,
  loginSubmitSuccess,
  loginSubmitError,
  CHECK_AUTH,
} from '../actions/usersActions';

export default (store) => (next) => (action) => {
  // console.log("Passage dans le usersRequestMW");
  next(action);
  switch (action.type) {
    case GET_TOP_USERS:
      axios({
        method: 'get',
        // url: 'http://ec2-54-242-201-96.compute-1.amazonaws.com/user/top',
        url: 'http://localhost:3001/user/top',
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(getTopUsersSuccess(res.data.data));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(
            getTopUsersError('Impossible de récupérer les user...')
          );
        });
      break;
    case LOGIN_SUBMIT:
      axios({
        method: 'post',
        url: 'http://localhost:3001/users/login',
        data: store.getState().users.loginData,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          withCredentials: true,
          mode: 'no-cors',
        },
      })
        .then((res) => {
          console.log(res.data.data);
          store.dispatch(loginSubmitSuccess(res.data.data.info));
        })
        .catch((err) => {
          console.log('On passe dans le catch de la requête de login');
          store.dispatch(
            loginSubmitError("Désolé, cet utilisateur n'existe pas")
          );
        });
      break;
      case CHECK_AUTH:
        axios({
          method:"post",
          url: 'http://localhost:3001/users/isLogged',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            withCredentials: true,
            mode: 'no-cors',
          },
        })
        .then((res) => {
          console.log(res.data)
          if (res.data.logged) {
            store.dispatch(loginSubmitSuccess(res.data.info));
          }
        })
        .catch((err) => {
          console.log('On rentre dans le catch de CHECK AUTH (isLogged) :', err)
        });
        break;
    default:
      return;
  }
};
