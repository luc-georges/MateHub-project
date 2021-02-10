import axios from 'axios';
import Toastify from 'toastify-js'
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
  EDIT_PROFIL_BANNER,
  EDIT_PROFIL_AVATAR,
} from '../actions/authActions';

const host = `${process.env.REACT_APP_URL}`

export default (store) => (next) => (action) => {

  next(action);
  switch (action.type) {
    case GET_PERSONNAL_DATA:
      let { connectedUserId } = store.getState().auth;
      axios({
        method: 'get',
        url: `${host}user/${connectedUserId}/profile/private`,
      })
        .then((res) => {

          store.dispatch(getPersonnalDataSuccess(res.data.data));
        })
        .catch((err) => {
          store.dispatch(
            getPersonnalDataError("L'utilisateur n'a pas été trouvé")
          );
        });
      break;
    case LOGIN_SUBMIT:
      axios({
        method: 'post',
        // url: 'http://ec2-3-86-206-225.compute-1.amazonaws.com:3001/users/login',
        url: `${host}users/login`,
        data: store.getState().auth.loginData,
        headers: {
          'Access-Control-Allow-Origin': '*',
          withCredentials: true,
          mode: 'no-cors',
        },
      })
        .then((res) => {
          store.dispatch(loginSubmitSuccess(res.data.data.info._id));  
          Toastify({
            text: `Welcome! ${res.data.data.info._nickname}`,
            duration: 3000, 
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            gravity: "top", // `top` or `bottom`
            position: 'center', // `left`, `center` or `right`
            className:"info",
            stopOnFocus: true, // Prevents dismissing of toast on hover
            onClick: function(){} // Callback after click
          }).showToast();
        })
        .catch((err) => {
          store.dispatch(loginSubmitError(err.response.data.error));
        });
      break;
    case LOGOUT:

      axios({
        method: 'post',
        // url: 'http://ec2-3-86-206-225.compute-1.amazonaws.com:3001/users/logout',
        url: `${host}user/${
          store.getState().auth.connectedUserId
        }/logout`,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          withCredentials: true,
          mode: 'no-cors',
        },
      })
        .then((res) => {

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
        url: `${host}users/isLogged`,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          withCredentials: true,
          mode: 'no-cors',
        },
      })
        .then((res) => {
          if (res.data.logged) {
            store.dispatch(loginSubmitSuccess(res.data.info));
          }
        })
        .catch((err) => {
          console.log(
            'On rentre dans le catch de CHECK AUTH (isLogged) :',
            err
          );
        })
      break;
    case GET_PERSONNAL_DATA_SUBMIT:
      axios({
        method: 'put',
        // url: 'http://ec2-3-86-206-225.compute-1.amazonaws.com:3001/users/login',
        url: `${host}user/${
          store.getState().auth.connectedUserId
        }/update`,
        data: store.getState().auth.modifyPersonnalData,
        headers: {
          'Access-Control-Allow-Origin': '*',
          withCredentials: true,
          mode: 'no-cors',
        },
      })
        .then((res) => {
          
          store.dispatch(getPersonnalDataSuccess(res.data.data));
        })
        .catch((err) => {
          console.log(
            'On passe dans le catch de la requête update user :',
            err
          );
          store.dispatch(getPersonnalDataError(err));
        });
      break;
    case EDIT_PROFIL_BANNER:
      const formData = new FormData();
      formData.append('banner', action.payload);
      axios({
        method: 'put',
        // url: 'http://ec2-3-86-206-225.compute-1.amazonaws.com:3001/users/login',
        url: `${host}user/${
          store.getState().auth.connectedUserId
        }/update`,
        data: formData,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'multipart/form-data',
          withCredentials: true,
          mode: 'no-cors',
        },
      })
        .then((res) => {
          store.dispatch(getPersonnalDataSuccess(res.data.data));
        })
        .catch((err) => {
          console.log(
            'On passe dans le catch de la requête update user :',
            err
          );
          store.dispatch(getPersonnalDataError(err));
        });
        break;
        case EDIT_PROFIL_AVATAR:
          const formDataAvatar = new FormData();
          formDataAvatar.append('avatar', action.payload);
          axios({
            method: 'put',
            // url: 'http://ec2-3-86-206-225.compute-1.amazonaws.com:3001/users/login',
            url: `${host}user/${
              store.getState().auth.connectedUserId
            }/update`,
            data: formDataAvatar,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'multipart/form-data',
              withCredentials: true,
              mode: 'no-cors',
            },
          })
            .then((res) => {
              store.dispatch(getPersonnalDataSuccess(res.data.data));
            })
            .catch((err) => {
              console.log(
                'On passe dans le catch de la requête update user :',
                err
              );
              store.dispatch(getPersonnalDataError(err));
            });
      break;
    default:
      return;
  }
};
