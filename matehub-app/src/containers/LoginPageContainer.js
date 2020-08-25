import { connect } from 'react-redux';
import LoginPage from '../components/LoginPage/LoginPage';
import { changeField, loginSubmit } from '../store/actions/authActions';

const mapStateToProps = (state) => ({
  loginData: {
    email: state.auth.loginData.email,
    password: state.auth.loginData.password,
  },
  loginErrorMessage: state.auth.loginErrorMessage,
  nickname: state.auth.nickname,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeField: (changedData) => {
    console.log(changedData);
    dispatch(changeField(changedData));
  },
  onFormSubmit: () => {
    console.log('Il y a eu un submit !');
    dispatch(loginSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
