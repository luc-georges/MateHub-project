import { combineReducers } from 'redux';
import eventReducer from './eventsReducer';

export default combineReducers({
  events: eventReducer,
});
