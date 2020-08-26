import {
  GET_EVENTS,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_ERROR,
  CREATE_EVENT_SUBMIT,
  CREATE_EVENT_SUBMIT_SUCCESS,
  CREATE_EVENT_SUBMIT_ERROR,
} from '../actions/eventsActions';

export const initialState = {
  error: '',
  list: [],
  eventCreationErrorMessage: '',
  eventCreationData: {
    user_id: '',
    game_id: '',
    event_time: '',
    player_count: '',
    player_max: '',
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_EVENT_SUBMIT:
      return {
        ...state,
      };
    case CREATE_EVENT_SUBMIT_SUCCESS:
      return {
        ...state,
      };
    case CREATE_EVENT_SUBMIT_ERROR:
      return {
        ...state,
        eventCreationErrorMessage: action.payload,
      };
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
