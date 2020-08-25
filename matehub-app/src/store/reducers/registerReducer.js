import {
  CHANGE_FIELD,
  REGISTER_SUBMIT,
  REGISTER_SUBMIT_SUCCESS,
  REGISTER_SUBMIT_ERROR,
} from '../actions/registerActions';


export const initialState = {
  registerData: {
    email: 'g@guid.fr',
    password: 'Gui12345',
    passwordConfirm: 'Gui12345',
    nickname: 'Gui',
    dateofbirth: "2019-01-01",
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
        registerData: {
          ...state.registerData,
          ...action.payload,
        },
        registerErrorMessage: '',
        // registered: true,
      };
    case REGISTER_SUBMIT_ERROR:
      return {
        ...state,
        registerErrorMessage: action.payload,
        // registered: false,
      };
    default:
      return state;
  }
};
