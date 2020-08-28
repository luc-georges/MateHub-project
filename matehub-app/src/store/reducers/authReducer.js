import {
  AUTH_CHANGE_FIELD,
  CHANGE_FIELD,
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
    // email: '',
    // password: '',
  },
  isLogged: false,
  nickname: '',
  loginErrorMessage: '',
  connectedUserId: "",
  personnalData: {},
  modifyPersonnalData: {
    nickname: '',
  },
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
        ...state
      }
    case GET_PERSONNAL_DATA_SUCCESS:
      return {
        ...state,
        personnalData: {
          ...state.personnalData,
          ...action.payload,
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
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogged: false,
      }
    default:
      return state;
  }
};
