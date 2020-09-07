import axios from 'axios';
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
      // console.log(store.getState().register.registerData);
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
          // console.log("la réponse reçu: " + res);
          store.dispatch(registerSubmitSuccess(res.data))
          // store.dispatch(push('/login'));
        })
        .catch((err) => {
          console.log('On passe dans le catch de la requête register :', err);
          console.log(err.response.data.error);
          store.dispatch(registerSubmitError(err.response.data.error));
        })
      break;
    default:
      return;
  }
};
