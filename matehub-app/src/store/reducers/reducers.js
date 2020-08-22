import { combineReducers } from 'redux';
import eventReducer from './eventsReducer';
import usersReducer from './usersReducer';

const appReducer = combineReducers({
  events: eventReducer,
  users: usersReducer,

});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state.users = undefined;
    window.location.reload(true);
  }

  return appReducer(state, action);
};


export default rootReducer; 
