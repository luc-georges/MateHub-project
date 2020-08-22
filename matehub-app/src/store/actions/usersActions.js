// TopPlayers actions
export const GET_TOP_USERS = 'GET_TOP_USERS';
export const GET_TOP_USERS_SUCCESS = 'GET_TOP_USERS_SUCCESS';
export const GET_TOP_USERS_ERROR = 'GET_TOP_USERS_ERROR';

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

// Form actions
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_SUBMIT_SUCCESS = 'LOGIN_SUBMIT_SUCCESS';
export const LOGIN_SUBMIT_ERROR = 'LOGIN_SUBMIT_ERROR';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const CHECK_AUTH = 'CHECK_AUTH';

export const changeField = (payload) => ({
  type: CHANGE_FIELD,
  payload,
});

export const loginSubmit = () => ({
  type: LOGIN_SUBMIT,
});

export const loginSubmitSuccess = (payload) => ({
  type: LOGIN_SUBMIT_SUCCESS,
  payload,
});

export const loginSubmitError = (payload) => ({
  type: LOGIN_SUBMIT_ERROR,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const checkAuth = () => ({
  type: CHECK_AUTH,
})
