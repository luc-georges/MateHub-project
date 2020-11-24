export const AUTH_CHANGE_FIELD = 'AUTH_CHANGE_FIELD';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const MODIFY_PERSONNAL_DATA_CHANGE_FIELD = 'MODIFY_PERSONNAL_DATA_CHANGE_FIELD';
export const EDIT_PROFIL_BANNER = 'EDIT_PROFIL_BANNER';
export const EDIT_PROFIL_AVATAR = 'EDIT_PROFIL_AVATAR';

export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_SUBMIT_SUCCESS = 'LOGIN_SUBMIT_SUCCESS';
export const LOGIN_SUBMIT_ERROR = 'LOGIN_SUBMIT_ERROR';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const CHECK_AUTH = 'CHECK_AUTH';

export const GET_PERSONNAL_DATA_SUBMIT = 'GET_PERSONNAL_DATA_SUBMIT'
export const GET_PERSONNAL_DATA = 'GET_PERSONNAL_DATA';
export const GET_PERSONNAL_DATA_SUCCESS = 'GET_PERSONNAL_DATA_SUCCESS';
export const GET_PERSONNAL_DATA_ERROR = 'GET_PERSONNAL_DATA_ERROR';

export const getPersonnalDataSubmit = (payload) => ({
  type: GET_PERSONNAL_DATA_SUBMIT,
  payload
})

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

export const authChangeField = (payload) => ({
  type: AUTH_CHANGE_FIELD,
  payload,
});
export const modifyPersonnalDataChangeField = (payload) => ({
  type: MODIFY_PERSONNAL_DATA_CHANGE_FIELD,
  payload,
});

export const editProfilBanner = (payload) => ({
  type: EDIT_PROFIL_BANNER,
  payload
});
export const editProfilAvatar = (payload) => ({
  type: EDIT_PROFIL_AVATAR,
  payload
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
