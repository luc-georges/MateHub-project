import {
  // * SEARCH EVENTS
  FILTERED_EVENTS,
  SEARCH_EVENT_CHANGE_FIELD,

  // * APPLY TO EVENT
  APPLY_TO_EVENT,
  APPLY_TO_EVENT_SUCCESS,
  APPLY_TO_EVENT_ERROR,

  // * GET EVENT
  GET_SELECTED_EVENT,
  GET_EVENT_BY_ID,
  GET_EVENT_BY_ID_SUCCESS,
  GET_EVENT_BY_ID_ERROR,

  // * GET ALL EVENTS
  GET_ALL_EVENTS,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_EVENTS_ERROR,

  // * CREATE EVENT
  EVENT_CHANGE_FIELD,
  CREATE_EVENT_SUBMIT,
  CREATE_EVENT_SUBMIT_SUCCESS,
  CREATE_EVENT_SUBMIT_ERROR,
} from '../actions/eventsActions';

export const initialState = {
  // * SEARCH EVENT
  searchEventData: {},

  // * APPLY TO EVENT
  applyToEventData: {
    user_id: '',
    event_id: '',
  },

  // * GET EVENT
  eventDataErrorMessage: '',
  eventData: {},
  selectedEvent: '',

  // * GET ALL EVENTS
  error: '',
  list: [],

  // * CREATE EVENT
  eventCreationErrorMessage: '',
  eventCreationData: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    // * SEARCH EVENT
    case FILTERED_EVENTS:
      return {
        ...state,
      };
    case SEARCH_EVENT_CHANGE_FIELD:
      return {
        ...state,
        searchEventData: {
          ...state.searchEventData,
          ...action.payload,
        },
      };

    // * APPLY TO EVENT
    case APPLY_TO_EVENT:
      return {
        ...state,
        applyToEventData: {
          ...state.applyToEventData,
          ...action.payload,
        },
      };
    case APPLY_TO_EVENT_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        eventData: {
          ...state.eventData,
          _participant: [
            {
              ...state.eventData._participant,
              ...action.payload,
            },
          ],
        },
      };
    case APPLY_TO_EVENT_ERROR:
      return {
        ...state,
      };

    // * GET EVENT
    case GET_SELECTED_EVENT:
      return {
        ...state,
        selectedEvent: action.payload,
      };
    case GET_EVENT_BY_ID:
      return {
        ...state,
      };
    case GET_EVENT_BY_ID_SUCCESS:
      return {
        ...state,
        eventData: {
          ...state.eventData,
          ...action.payload,
        },
        eventDataErrorMessage: '',
      };
    case GET_EVENT_BY_ID_ERROR:
      return {
        ...state,
        eventData: {
          ...state.eventData,
        },
        eventDataErrorMessage: action.payload,
      };

    // * CREATE EVENT
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
          user_id: '',
          game_id: '',
          player_count: '', // Tout le temps 1
          player_max: '',
          duration: '',
          event_time: '',
          event_time_date: '',
          event_time_hour: '',
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
    case CREATE_EVENT_SUBMIT_ERROR:
      return {
        ...state,
        eventCreationErrorMessage: action.payload,
      };

    // * GET ALL EVENT
    case GET_ALL_EVENTS:
      return {
        ...state,
      };
    case GET_ALL_EVENTS_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
        error: '',
      };
    case GET_ALL_EVENTS_ERROR:
      return {
        ...state,
        error: action.payload,
        list: [],
      };
    default:
      return state;
  }
};

//
