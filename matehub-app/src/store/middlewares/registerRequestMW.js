import axios from 'axios';

import {
  REGISTER_SUBMIT,
  registerSubmitSuccess,
  registerSubmitError,
} from '../actions/registerActions';

export default (store) => (next) => (action) => {
  console.log(store.getState().register.registerData);
  next(action);
  switch (action.type) {
    case REGISTER_SUBMIT:
      axios({
        method: 'post',
        url: 'http://localhost:3001/registration',
        data: store.getState().register.registerData,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          withCredentials: true,
          mode: 'no-cors',
        },
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(registerSubmitSuccess(res.data.data))
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
