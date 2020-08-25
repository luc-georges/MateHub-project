import axios from 'axios';

import {
  LOGIN_SUBMIT,
  loginSubmitSuccess,
  loginSubmitError,
  LOGOUT,
  logoutSuccess,
  CHECK_AUTH,
} from '../actions/authActions';

export default (store) => (next) => (action) => {
  console.log("Passage dans le authRequestMW");
  next(action);
  switch (action.type) {
    case LOGIN_SUBMIT:
      axios({
        method: 'post',
        // url: 'http://ec2-3-86-206-225.compute-1.amazonaws.com:3001/users/login',
        url: 'http://localhost:3001/users/login',
        data: store.getState().auth.loginData,
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
          console.log('On passe dans le catch de la requête de login :', err);
          store.dispatch(
            loginSubmitError("Désolé, cet utilisateur n'existe pas")
          );
        });
      break;
      case LOGOUT:
        axios({
          method: 'get',
          url: 'http://ec2-3-86-206-225.compute-1.amazonaws.com:3001/users/logout',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            withCredentials: true,
            mode: 'no-cors',
          },
        })
        .then((res) => {
          console.log(res);
          store.dispatch(logoutSuccess())
        })
        .catch((err) => {
          console.log(err)
        })
      break;
      case CHECK_AUTH:
        axios({
          method:"post",
          url: 'http://ec2-3-86-206-225.compute-1.amazonaws.com:3001/users/isLogged',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            withCredentials: true,
            mode: 'no-cors',
          },
        })
        .then((res) => {
          // console.log(res.data)
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
