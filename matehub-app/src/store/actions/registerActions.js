export const CHANGE_FIELD = 'CHANGE_FIELD';
export const REGISTER_SUBMIT = 'REGISTER_SUBMIT';
export const REGISTER_SUBMIT_SUCCESS = 'REGISTER_SUBMIT_SUCCESS';
export const REGISTER_SUBMIT_ERROR = 'REGISTER_SUBMIT_ERROR';

export const changeField = (payload) => ({
  type: CHANGE_FIELD,
  payload,
});

export const registerSubmit = () => ({
  type: REGISTER_SUBMIT,
});

export const registerSubmitSuccess = (payload) => ({
  type: REGISTER_SUBMIT_SUCCESS,
  payload,
});

export const registerSubmitError = (payload) => ({
  type: REGISTER_SUBMIT_ERROR,
  payload,
});
