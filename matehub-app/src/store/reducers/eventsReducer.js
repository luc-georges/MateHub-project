import { GET_EVENTS, GET_EVENTS_SUCCESS, GET_EVENTS_ERROR } from '../actions/eventsActions';

export const initialState = {
  list: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
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
    default:
      return state;
  }
}

// export default eventsReducer;
