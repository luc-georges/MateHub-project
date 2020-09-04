import {
  AUTH_CHANGE_FIELD,
  MODIFY_PERSONNAL_DATA_CHANGE_FIELD,
  LOGIN_SUBMIT,
  LOGIN_SUBMIT_SUCCESS,
  LOGIN_SUBMIT_ERROR,
  LOGOUT_SUCCESS,
  GET_PERSONNAL_DATA_SUBMIT,
  GET_PERSONNAL_DATA,
  GET_PERSONNAL_DATA_SUCCESS,
  GET_PERSONNAL_DATA_ERROR,
} from '../actions/authActions';

export const initialState = {
  loginData: {
    email: '',
    password: '',
  },
  isLogged: false,
  nickname: '',
  loginErrorMessage: '',
  connectedUserId: '',
  personnalData: {
    _user_id: '',
    _nickname: '',
    _age: '',
    _description: '',
    _avatar: '',
    _banner: '',
    _games: [
      {
        game_id: '',
        game_name: '',
        ign: {
          id: '',
          accountId: '',
          puuid: '',
          name: '',
          profileIconId: '',
          revisionDate: '',
          summonerLevel: '',
        },
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
          veteran: false,
          inactive: false,
          freshBlood: false,
          hotStreak: false,
        },
      },
    ],
    _event_created: [
      {
        event_id: '',
        game_name: '',
        game_id: '',
        event_time: '',
        duration: '',
        end: '',
        player_count: '',
        player_max: '',
        description: '',
        status: '',
        rank: '',
        lang: [
          {
            id: '',
            label: '',
            icon: '',
          },
        ],
        vocal: '',
      },
    ],
    has_events: [
      {
        event_id: '',
        game_name: '',
        game_id: '',
        message: '',
        event_time: '',
        duration: '',
        end: '',
        player_count: '',
        player_max: '',
        description: '',
        status: '',
        rank: '',
        Lang: [
          {
            id: '',
            label: '',
            icon: '',
          },
        ],
        vocal: '',
      },
    ],
  },
  modifyPersonnalData: {},
  error: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PERSONNAL_DATA:
      return {
        ...state,
      };
    case GET_PERSONNAL_DATA_SUBMIT:
      return {
        ...state,
      };
    case GET_PERSONNAL_DATA_SUCCESS:
      return {
        ...state,
        personnalData: {
          ...state.personnalData,
          ...action.payload,
        },
        modifyPersonnalData: {
          ...(state.modifyPersonnalData = initialState.modifyPersonnalData),
        },
        error: '',
      };
    case GET_PERSONNAL_DATA_ERROR:
      return {
        ...state,
        personnalData: {
          ...state.personnalData,
        },
        error: action.payload,
      };
    case AUTH_CHANGE_FIELD:
      return {
        ...state,
        loginData: {
          ...state.loginData,
          ...action.payload,
        },
      };
    case MODIFY_PERSONNAL_DATA_CHANGE_FIELD:
      return {
        ...state,
        modifyPersonnalData: {
          ...state.modifyPersonnalData,
          ...action.payload,
        },
      };
    case LOGIN_SUBMIT:
      return {
        ...state,
      };
    case LOGIN_SUBMIT_SUCCESS:
      return {
        ...state,
        nickname: action.payload._nickname,
        loginErrorMessage: '',
        isLogged: true,
        loginData: {
          ...state.loginData,
        },
        connectedUserId: action.payload,
      };
    case LOGIN_SUBMIT_ERROR:
      return {
        ...state,
        nickname: '',
        isLogged: false,
        loginErrorMessage: action.payload,
        loginData: {
          ...state.loginData,
          password: '',
        },
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
};
