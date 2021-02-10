import { connect } from 'react-redux';
import LoginPage from '../components/LoginPage/LoginPage';
import { authChangeField, loginSubmit } from '../store/actions/authActions';

const mapStateToProps = (state) => ({
  loginData: {
    email: state.auth.loginData.email,
    password: state.auth.loginData.password,
  },
  loginErrorMessage: state.auth.loginErrorMessage,
  nickname: state.auth.nickname,
  isLogged: state.auth.isLogged,
  connectedUserData: state.auth.connectedUserData,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeField: (changedData) => {
    dispatch(authChangeField(changedData));
  },
  onFormSubmit: () => {
    dispatch(loginSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
