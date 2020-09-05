import axios from 'axios';

import {} from '../actions/lolActions';

export default (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    default:
      return;
  }
}
