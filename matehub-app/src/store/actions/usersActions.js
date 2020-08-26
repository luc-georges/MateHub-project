// TopPlayers actions
export const GET_TOP_USERS = 'GET_TOP_USERS';
export const GET_TOP_USERS_SUCCESS = 'GET_TOP_USERS_SUCCESS';
export const GET_TOP_USERS_ERROR = 'GET_TOP_USERS_ERROR';

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_TOP_USERS_ERROR';

export const GET_SELECTED_USER = 'GET_SELECTED_USER';

export const getSelectedUser = (payload) => ({
  type: GET_SELECTED_USER,
  payload,
});

export const getTopUsers = () => ({
  type: GET_TOP_USERS,
});

export const getTopUsersSuccess = (payload) => ({
  type: GET_TOP_USERS_SUCCESS,
  payload,
});

export const getTopUsersError = (payload) => ({
  type: GET_TOP_USERS_ERROR,
  payload,
});

export const getUser = () => ({
  type: GET_USER,
});

export const getUserSuccess = (payload) => ({
  type: GET_USER_SUCCESS,
  payload,
});

export const getUserError = (payload) => ({
  type: GET_USER_ERROR,
  payload,
});
