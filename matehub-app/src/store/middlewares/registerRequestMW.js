import axios from 'axios';

import {
  REGISTER_SUBMIT,
  registerSubmitSuccess,
  registerSubmitError,
} from '../actions/registerActions';

export default (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case REGISTER_SUBMIT:
      console.log(store.getState().register.registerData);
      axios({
        method: 'post',
        url: 'http://localhost:3001/registration',
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
        })
        .catch((err) => {
          console.log('On passe dans le catch de la requête register :', err);
          store.dispatch(registerSubmitError("La requête n'a pas abouti"));
        });
      break;
    default:
      return;
  }
};
