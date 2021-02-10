import axios from 'axios';
import Toastify from 'toastify-js'
// import { push } from 'react-router-redux';
import {
  REGISTER_SUBMIT,
  registerSubmitSuccess,
  registerSubmitError,
} from '../actions/registerActions';

const host = `${process.env.REACT_APP_URL}`

export default (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case REGISTER_SUBMIT:

      axios({
        method: 'post',
        url: `${host}registration`,
        data: {
          email: store.getState().register.registerData.email,
          password: store.getState().register.registerData.password,
          passwordConfirm: store.getState().register.registerData.passwordConfirm,
          nickname: store.getState().register.registerData.nickname,
          dateofbirth: store.getState().register.registerData.dateofbirth
        },
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          withCredentials: true,
          mode: 'no-cors',
        },
      })
        .then((res) => {
          store.dispatch(registerSubmitSuccess(res.data))
          Toastify({
            text: `Registration Successfull`,
            duration: 3000, 
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            gravity: "top", // `top` or `bottom`
            position: 'center', // `left`, `center` or `right`
            className:"info",
            stopOnFocus: true, // Prevents dismissing of toast on hover
            onClick: function(){} // Callback after click
          }).showToast();
          // store.dispatch(push('/login'));
        })
        .catch((err) => {
          store.dispatch(registerSubmitError(err.response.data.error));
        })
      break;
    default:
      return;
  }
};
