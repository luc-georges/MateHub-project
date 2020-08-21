import {
  GET_TOP_USERS,
  GET_TOP_USERS_SUCCESS,
  GET_TOP_USERS_ERROR,
  CHANGE_FIELD,
  LOGIN_SUBMIT,
  LOGIN_SUBMIT_SUCCESS,
  LOGIN_SUBMIT_ERROR,
} from '../actions/usersActions';

export const initialState = {
  loginData: {
    // email: 'f@fred.fr',
    // password: 'Fred1234',
    email: '',
    password: '',
  },
  isLogged: false,
  nickname: '',
  loginErrorMessage: '',
  topUsersList: [],
  error: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_TOP_USERS:
      return {
        ...state,
      };
    case GET_TOP_USERS_SUCCESS:
      return {
        ...state,
        topUsersList: [...action.payload],
        error: '',
      };
    case GET_TOP_USERS_ERROR:
      return {
        ...state,
        error: action.payload,
        topUsersList: [],
      };
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
    default:
      return state;
  }
};
