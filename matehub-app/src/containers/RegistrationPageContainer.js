import { connect } from 'react-redux';
import RegistrationPage from '../components/RegistrationPage/RegistrationPage';
import { changeField, registerSubmit } from '../store/actions/registerActions';
// import { push } from 'react-router-redux'

const mapStateToProps = (state) => ({
  registerData: {
    email: state.register.registerData.email,
    password: state.register.registerData.password,
    passwordConfirm: state.register.registerData.passwordConfirm,
    nickname: state.register.registerData.nickname,
    dateofbirth: state.register.registerData.dateofbirth,
  },
  registered: state.register.registered,
  registerErrorMessage: state.register.registerErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeField: (changedData) => {

    dispatch(changeField(changedData));
  },
  onFormSubmit: () => {
    dispatch(registerSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
