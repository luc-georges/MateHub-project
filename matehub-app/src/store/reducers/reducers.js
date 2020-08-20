import { combineReducers } from 'redux';
import eventReducer from './eventsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  events: eventReducer,
  users: usersReducer,

});
