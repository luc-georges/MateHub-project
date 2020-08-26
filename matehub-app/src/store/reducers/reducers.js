import { combineReducers } from 'redux';
import eventReducer from './eventsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import newsReducer from './newsReducer';
import registerReducer from './registerReducer';

const appReducer = combineReducers({
  events: eventReducer,
  users: usersReducer,
  auth: authReducer,
  news: newsReducer,
  register: registerReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    state.auth = undefined;
    state.register = undefined;
  }
  // if (action.type === 'REGISTER_SUBMIT_SUCCESS') {
  //   state.auth = undefined;
  // }
  // if (action.type === 'LOGIN_SUBMIT_SUCCESS') {
  //   state.auth = undefined;
  // }
  // if (action.type === 'GET_USER')
  // {
  //   state.users.userData = undefined;
  // }
  // if (action.type === 'CHECK_AUTH') {
  //   state.register = undefined;
  // }

  return appReducer(state, action);
};


export default rootReducer; 
