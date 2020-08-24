import { connect } from 'react-redux';
import RegistrationPage from '../components/RegistrationPage/RegistrationPage';
import { changeField, registerSubmit } from '../store/actions/registerActions';
import moment from 'moment';


const mapStateToProps = (state) => ({
  registerData: {
    email: state.register.registerData.email,
    password: state.register.registerData.password,
    passwordConfirm: state.register.registerData.passwordConfirm,
    nickname: state.register.registerData.nickname,
    dateOfBirth: moment(state.register.registerData.dateOfBirth).format('YYYY-MM-DD'),
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
