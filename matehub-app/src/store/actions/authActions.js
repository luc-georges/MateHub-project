export const CHANGE_FIELD = 'CHANGE_FIELD';

export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_SUBMIT_SUCCESS = 'LOGIN_SUBMIT_SUCCESS';
export const LOGIN_SUBMIT_ERROR = 'LOGIN_SUBMIT_ERROR';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const CHECK_AUTH = 'CHECK_AUTH';

export const GET_PERSONNAL_DATA = 'GET_PERSONNAL_DATA';
export const GET_PERSONNAL_DATA_SUCCESS = 'GET_PERSONNAL_DATA_SUCCESS';
export const GET_PERSONNAL_DATA_ERROR = 'GET_PERSONNAL_DATA_ERROR';

export const getPersonnalData = () => ({
  type: GET_PERSONNAL_DATA,
});

export const getPersonnalDataSuccess = (payload) => ({
  type: GET_PERSONNAL_DATA_SUCCESS,
  payload,
});

export const getPersonnalDataError = (payload) => ({
  type: GET_PERSONNAL_DATA_ERROR,
  payload,
});

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
