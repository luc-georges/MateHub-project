import {
  DELETE_EVENT,
  SELECT_PLAYER_TO_ACCEPT_OR_REFUSE_IN_EVENT,
  APPLY_ACCEPT,
  APPLY_REFUSE,
  APPLY_EVENT_CHANGE_FIELD,
  // * SEARCH EVENTS
  SEARCH_EVENT_CHANGE_FIELD,
  ISRANKED_CHECKBOX_SEARCH_EVENT_CHANGE_FIELD,
  SEARCH_EVENT_SUBMIT,
  SEARCH_EVENT_SUBMIT_SUCCESS,
  RESET_ALL_FILTERS,

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
  FLAG_CHECKBOX_CHANGE_FIELD,
  ISRANKED_CHECKBOX_CREATE_EVENT_CHANGE_FIELD,
} from '../actions/eventsActions';

export const initialState = {
  // * SEARCH EVENT
  searchEventData: {
    _duration: '',
    _player_max: '',
    _rank: '',
    _starting: '',
    _is_ranked: false,
  },
  eventSearchResults: [],
  filterGotResults: false,

  // * APPLY TO EVENT
  applyToEventData: {
    user_id: '',
    event_id: '',
    applyMessage: '',
  },
  applyToEventErrorMessage: '',

  // * GET EVENT
  eventDataErrorMessage: '',
  eventData: {
    _creator_stats: [
      {
        freshBlood: false,
        hotStreak: false,
        inactive: false,
        leagueId: '',
        leaguePoints: '',
        losses: '',
        queueType: '',
        rank: '',
        summonerId: '',
        summonerName: '',
        tier: '',
        veteran: false,
        wins: '',
      },
    ],
  },
  selectedEvent: '',

  // * GET ALL EVENTS
  error: '',
  list: [],

  // * CREATE EVENT
  eventCreationErrorMessage: '',
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
    rank: '',
    language: {
      fr1: false,
      uk2: false,
      it3: false,
      es4: false,
      ru5: false,
      de6: false,
    },
    is_ranked: false,
  },
  playerToAcceptOrRefuseInEvent: '',
  createEventSubmitError: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    // * DELETE EVENT
    case DELETE_EVENT:
      return {
        ...state,
      };
    // * APPLY
    case SELECT_PLAYER_TO_ACCEPT_OR_REFUSE_IN_EVENT:
      return {
        ...state,
        playerToAcceptOrRefuseInEvent: action.payload,
      };
    case APPLY_ACCEPT:
      return {
        ...state,
      };
    case APPLY_REFUSE:
      return {
        ...state,
      };
    case APPLY_EVENT_CHANGE_FIELD:
      return {
        ...state,
        applyToEventData: {
          ...state.applyToEventData,
          ...action.payload,
        },
      };
    // * SEARCH EVENT
    case RESET_ALL_FILTERS:
      return {
        ...state,
        searchEventData: {
          _duration: '',
          _player_max: '',
          _rank: '',
          _starting: '',
          _is_ranked: false,
        },
        // filterGotResults: false,
      };
    case SEARCH_EVENT_SUBMIT:
      return {
        ...state,
        eventSearchResults: [],
        filterGotResults: false,
      };
    case SEARCH_EVENT_SUBMIT_SUCCESS:
      return {
        ...state,
        eventSearchResults: [...state.eventSearchResults, ...action.payload],
        filterGotResults: true,
      };
    case SEARCH_EVENT_CHANGE_FIELD:
      return {
        ...state,
        searchEventData: {
          ...state.searchEventData,
          ...action.payload,
        },
      };
    case ISRANKED_CHECKBOX_SEARCH_EVENT_CHANGE_FIELD:
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
        applyToEventData: {
          ...state.applyToEventData,
          applyMessage: '',
        },
      };
    case APPLY_TO_EVENT_ERROR:
      return {
        ...state,
        applyToEventErrorMessage: action.payload,
        applyToEventData: {
          ...state.applyToEventData,
          applyMessage: '',
        },
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
        applyToEventData: {
          ...state.applyToEventData,
          applyMessage: '',
        },
        applyToEventErrorMessage: '',
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
    case ISRANKED_CHECKBOX_CREATE_EVENT_CHANGE_FIELD:
      return {
        ...state,
        eventCreationData: {
          ...state.eventCreationData,
          ...action.payload,
        },
      };
    case FLAG_CHECKBOX_CHANGE_FIELD:
      return {
        ...state,
        eventCreationData: {
          ...state.eventCreationData,
          language: {
            ...state.eventCreationData.language,
            ...action.payload,
          },
        },
      };
    case EVENT_CHANGE_FIELD:
      return {
        ...state,
        eventCreationData: {
          ...state.eventCreationData,
          ...action.payload,
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
          isRanked: false,
        },
        selectedEvent: action.payload,
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
