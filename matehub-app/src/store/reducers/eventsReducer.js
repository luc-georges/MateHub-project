import {
  APPLY_TO_EVENT,
  APPLY_TO_EVENT_SUCCESS,
  APPLY_TO_EVENT_ERROR,
  GET_SELECTED_EVENT,
  GET_EVENT_BY_ID,
  GET_EVENT_BY_ID_SUCCESS,
  GET_EVENT_BY_ID_ERROR,
  GET_ALL_EVENTS,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_EVENTS_ERROR,
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
  eventDataErrorMessage: '',
  eventData: {
    _event_id: '',
    _user_id: '',
    _creator: '',
    _game_name: '',
    _game_id: '',
    _starting: '',
    _duration: {
      hours: '',
    },
    _player_count: '',
    _player_max: '',
    _description: '',
    _status: '',
    _langs: [
      {
        id: '',
        label: '',
        icon: '',
      },
      {
        id: '',
        label: '',
        icon: '',
      },
      {
        id: '',
        label: '',
        icon: '',
      },
    ],
    _end: '',
    _vocal: '',
    _participant: [
      {
        user_id: '',
        event_id: '',
        status: '',
        message: '',
        nickname: '',
        stats: {
          leagueId: '',
          queueType: '',
          tier: '',
          rank: '',
          summonerId: '',
          summonerName: '',
          leaguePoints: '',
          wins: '',
          losses: '',
          veteran: '',
          inactive: '',
          freshBlood: '',
          hotStreak: '',
        },
      },
    ],
  },
  applyToEventData: {
    user_id: '',
    event_id: '',
  },
  selectedEvent: 5,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
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
          _participant: [{
            ...state.eventData._participant,
            ...action.payload,
          }]
        },
      };
    case APPLY_TO_EVENT_ERROR:
      return {
        ...state,
      };
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

// export default eventsReducer;
