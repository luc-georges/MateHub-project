import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import newsReducer from './newsReducer';
import registerReducer from './registerReducer';
import lolReducer from './lolReducer';

const appReducer = combineReducers({
  events: eventsReducer,
  users: usersReducer,
  auth: authReducer,
  news: newsReducer,
  register: registerReducer,
  lol: lolReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    state.auth = undefined;
    state.register = undefined;
    // state.events = undefined;
  }

  return appReducer(state, action);
};


export default rootReducer; 
