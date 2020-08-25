import { connect } from 'react-redux';
import RegistrationPage from '../components/RegistrationPage/RegistrationPage';
import { changeField, registerSubmit } from '../store/actions/registerActions';


const mapStateToProps = (state) => ({
  registerData: {
    email: state.register.registerData.email,
    password: state.register.registerData.password,
    passwordConfirm: state.register.registerData.passwordConfirm,
    nickname: state.register.registerData.nickname,
    dateofbirth: state.register.registerData.dateofbirth,
  },
});

const mapDispatchToProps = (dispatch) => ({
  onChangeField: (changedData) => {
    // console.log(changedData);
    dispatch(changeField(changedData));
  },
  onFormSubmit: () => {
    console.log('Submit dans register');
    dispatch(registerSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
