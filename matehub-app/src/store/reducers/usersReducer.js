import {
  GET_TOP_USERS,
  GET_TOP_USERS_SUCCESS,
  GET_TOP_USERS_ERROR,
} from '../actions/usersActions';

export const initialState = {
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
    default:
      return state;
  }
};
