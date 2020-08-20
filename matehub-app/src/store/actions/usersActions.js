export const GET_TOP_USERS = 'GET_TOP_USERS';
export const GET_TOP_USERS_SUCCESS = 'GET_TOP_USERS_SUCCESS';
export const GET_TOP_USERS_ERROR = 'GET_TOP_USERS_ERROR';

export const getTopUsers = () => ({
  type: GET_TOP_USERS,
})

export const getTopUsersSuccess = (payload) => ({
  type: GET_TOP_USERS_SUCCESS,
  payload
})

export const getTopUsersError = (payload) => ({
  type: GET_TOP_USERS_ERROR,
  payload
})
