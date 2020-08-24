import {
  CHANGE_FIELD,
  LOGIN_SUBMIT,
  LOGIN_SUBMIT_SUCCESS,
  LOGIN_SUBMIT_ERROR,
  LOGOUT_SUCCESS
} from '../actions/authActions';

export const initialState = {
  loginData: {
    email: 'f@fred.fr',
    password: 'Fred1234',
    // email: '',
    // password: '',
  },
  isLogged: false,
  nickname: '',
  loginErrorMessage: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        loginData: {
          ...state.loginData,
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
          ...action.payload,
        },
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
