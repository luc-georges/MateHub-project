export const GET_USERS = 'GET_EVENTS';
export const GET_USERS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_USERS_ERROR = 'GET_EVENTS_ERROR';

export const getusers = () => ({
  type: GET_USERS,
})

export const getUsersSuccess = (payload) => ({
  type: GET_USERS_SUCCESS,
  payload
})

export const getUsersError = (payload) => ({
  type: GET_USERS_ERROR,
  payload
})
