<<<<<<< HEAD
import {
  GET_EVENTS,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_ERROR,
} from '../actions/eventsActions';

export const initialState = {
  error: '',
=======
import { GET_EVENTS, GET_EVENTS_SUCCESS, GET_EVENTS_ERROR } from '../actions/eventsActions';

export const initialState = {
>>>>>>> feature/data-from-reducer-to-homepage
  list: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
<<<<<<< HEAD
      };
    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
        error: '',
      };
    case GET_EVENTS_ERROR:
      return {
        ...state,
        error: action.payload,
        list: [],
      };
=======
      }
    case GET_EVENTS_SUCCESS:
        return {
          ...state,
          list: [...action.payload]
        }
    case GET_EVENTS_ERROR:
      return {
        ...state,
        list: []
      }
>>>>>>> feature/data-from-reducer-to-homepage
    default:
      return state;
  }
};

// export default eventsReducer;
