import {
  CHANGE_FIELD,
  REGISTER_SUBMIT,
  REGISTER_SUBMIT_SUCCESS,
  REGISTER_SUBMIT_ERROR,
} from '../actions/registerActions';

export const initialState = {
  registerData: {
    email: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
    dateofbirth: '',
  },
  registerErrorMessage: '',
  registered: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        registerData: {
          ...state.registerData,
          ...action.payload,
        },
      };
    case REGISTER_SUBMIT:
      return {
        ...state,
      };
    case REGISTER_SUBMIT_SUCCESS:
      return {
        ...state,
        registerErrorMessage: '',
        registerData: {
          email: '',
          password: '',
          passwordConfirm: '',
          nickname: '',
          dateofbirth: '',
        },
        registered: true,
      };
    case REGISTER_SUBMIT_ERROR:
      return {
        ...state,
        registerData: {
          ...state.registerData,
          password: '',
          passwordConfirm: '',
        },
        registerErrorMessage: action.payload,
        registered: false,
      };
    default:
      return state;
  }
};
