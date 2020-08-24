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
      axios({

      })
      .then(() => {
        
      })
      .catch(() => {
        
      })
  }
}
