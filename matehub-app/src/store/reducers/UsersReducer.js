import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR } from '../actions/usersActions';

export const initialState = {
  list: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
      }
    case GET_USERS_SUCCESS:
        return {
          ...state,
          list: [...action.payload]
        }
    case GET_USERS_ERROR:
      return {
        ...state,
        list: []
      }
    default:
      return state;
  }
}
