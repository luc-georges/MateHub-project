import {
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
    _event_id: 1,
    _user_id: 1,
    _creator: 'Fred',
    _game_name: 'League of legend',
    _game_id: 1,
    _starting: '2020-09-22T07:00:00.000Z',
    _duration: {
      hours: 4,
    },
    _player_count: 1,
    _player_max: 5,
    _description: 'Compétitif full team',
    _status: 0,
    _langs: [
      {
        id: 1,
        label: 'Fr',
        icon: 'fr.png',
      },
      {
        id: 2,
        label: 'En',
        icon: 'en.png',
      },
      {
        id: 3,
        label: 'It',
        icon: 'it.png',
      },
    ],
    _end: '2020-09-22T11:00:00.000Z',
    _vocal: 'discord.gg/invitenumber',
  },
  selectedEvent: 5,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
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
