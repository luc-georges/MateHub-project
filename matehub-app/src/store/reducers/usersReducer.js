import {
  GET_TOP_USERS,
  GET_TOP_USERS_SUCCESS,
  GET_TOP_USERS_ERROR,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from '../actions/usersActions';

export const initialState = {
  userData: [],
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
      case GET_USER:
        return {
          ...state,
        };
      case GET_USER_SUCCESS:
        return {
          ...state,
          userData: [...action.payload],
          error: '',
        };
      case GET_USER_ERROR:
        return {
          ...state,
          error: action.payload,
          userData: [],
        };
    default:
      return state;
  }
};




