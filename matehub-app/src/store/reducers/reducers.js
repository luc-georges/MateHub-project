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
  if (action.type === 'LOGOUT') {
    state.auth = undefined;
    // window.location.reload(true);
  }

  return appReducer(state, action);
};


export default rootReducer; 
