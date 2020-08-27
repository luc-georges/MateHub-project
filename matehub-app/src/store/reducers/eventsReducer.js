import {
  GET_EVENTS,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_ERROR,
  EVENT_CHANGE_FIELD,
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
    player_count: '', // Tout le temps 1
    player_max: '',
    duration: '',
    event_time: '2020-08-22 09:00',
    status: '', // Tout le temps 0
    description: '',
    vocal: '',
    language: {
      fr1: false,
      uk2: false,
      it3: false,
      es4: false,
      ru5: false,
      de6: false,
    },
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case EVENT_CHANGE_FIELD:
      return {
        ...state,
        eventCreationData: {
          ...state.eventCreationData,
          ...action.payload,
          language: {
            ...state.eventCreationData.language,
            ...action.payload,
          },
        },
      };
    case CREATE_EVENT_SUBMIT:
      return {
        ...state,
      };
    case CREATE_EVENT_SUBMIT_SUCCESS:
      return {
        ...state,
        eventCreationData: {
          ...state.eventCreationData,
          ...action.payload,
        },
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
