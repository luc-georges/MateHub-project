import {
  CHANGE_FIELD,
  REGISTER_SUBMIT,
  REGISTER_SUBMIT_SUCCESS,
  REGISTER_SUBMIT_ERROR,
} from '../actions/registerActions';


export const initialState = {
  registerData: {
    email: 'g@gui.fr',
    password: 'Gui12345',
    passwordConfirm: 'Gui12345',
    nickname: 'Gui',
    dateOfBirth: "2019-01-01",
  },
  registerErrorMessage: '',
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
        registerData: {
          ...state.registerData,
          ...action.payload,
        },
        registerErrorMessage: '',
      };
    case REGISTER_SUBMIT_ERROR:
      return {
        ...state,
        registerErrorMessage: action.payload,
      };
    default:
      return state;
  }
};
