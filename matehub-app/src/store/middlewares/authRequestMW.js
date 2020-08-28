import axios from 'axios';

import {
  LOGIN_SUBMIT,
  loginSubmitSuccess,
  loginSubmitError,
  LOGOUT,
  logoutSuccess,
  CHECK_AUTH,
  GET_PERSONNAL_DATA,
  getPersonnalDataSuccess,
  getPersonnalDataError,
  GET_PERSONNAL_DATA_SUBMIT,
  getPersonnalDataSubmit,
  
} from '../actions/authActions';

export default (store) => (next) => (action) => {
  // console.log("Passage dans le authRequestMW");
  next(action);
  switch (action.type) {
    case GET_PERSONNAL_DATA:
      let { connectedUserId } = store.getState().auth;
      axios({
        method: 'get',
        url: `http://localhost:3001/user/${connectedUserId}/profile/private`,
      })
        .then((res) => {
          // console.log(res.data.data);
          store.dispatch(getPersonnalDataSuccess(res.data.data));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(getPersonnalDataError("L'utilisateur n'a pas été trouvé"));
        });
      break;
    case LOGIN_SUBMIT:
      //console.log(store.getState().auth.loginData)
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
          console.log(res.data.data.info);
          store.dispatch(loginSubmitSuccess(res.data.data.info._id));
        })
        .catch((err) => {
          console.log('On passe dans le catch de la requête de login :', err);
          store.dispatch(loginSubmitError("Cet utilisateur n'existe pas"));
        });
      break;
    case LOGOUT:
      // const {  } = store.getState().auth.connectedUserId;
      console.log(store.getState().auth.connectedUserId);
      axios({
        method: 'post',
        // url: 'http://ec2-3-86-206-225.compute-1.amazonaws.com:3001/users/logout',
        url: `http://localhost:3001/user/${store.getState().auth.connectedUserId}/logout`,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          withCredentials: true,
          mode: 'no-cors',
        },
      })
        .then((res) => {
          console.log(res);
          store.dispatch(logoutSuccess());
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    case CHECK_AUTH:
      axios({
        method: 'post',
        // url: 'http://ec2-3-86-206-225.compute-1.amazonaws.com:3001/users/isLogged',
        url: 'http://localhost:3001/users/isLogged',
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
          console.log(
            'On rentre dans le catch de CHECK AUTH (isLogged) :',
            err
          );
        });
      break;
      case GET_PERSONNAL_DATA_SUBMIT:
        let test = store.getState().auth.personnalData._user_id;
    
        console.log(test)

        //console.log(store.getState().auth.loginData)
        axios({
          method: 'put',
          // url: 'http://ec2-3-86-206-225.compute-1.amazonaws.com:3001/users/login',
          url: `http://localhost:3001/user/${store.getState().auth.connectedUserId}/update`,
          data: store.getState().auth.personnalData,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            withCredentials: true,
            mode: 'no-cors',
          },
        })
          .then((res) => {
            console.log(res.data.data);
            store.dispatch(getPersonnalDataSuccess(res.data.data));
          })
          .catch((err) => {
            console.log('On passe dans le catch de la requête update user :', err);
            store.dispatch(getPersonnalDataError("Cet utilisateur n'existe pas"));
          });
    default:
      return;
  }
};
