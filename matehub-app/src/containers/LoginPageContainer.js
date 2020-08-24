import {connect} from 'react-redux';
import LoginPage from '../components/LoginPage/LoginPage';
import { changeField, loginSubmit } from '../store/actions/authActions';

const mapStateToProps = (state) => ({
  loginData: {
    email: state.auth.loginData.email,
    password: state.auth.loginData.password,
  },
  loginErrorMessage: state.auth.loginErrorMessage,
  nickname: state.auth.nickname,
});

const mapDispatchToProps = (dispatch) =>  ({
  onChangeField: (changedData) => {
    console.log(changedData);
    dispatch(changeField(changedData));
  },
  onFormLogin: () => {
    console.log('Il y a eu un submit !');
    dispatch(loginSubmit());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
