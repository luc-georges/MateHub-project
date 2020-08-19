import {
  GET_EVENTS,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_ERROR,
} from '../actions/eventActions';

export const initialState = {
  error: '',
  list: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
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
    default:
      return state;
  }
};

// export default eventsReducer;
