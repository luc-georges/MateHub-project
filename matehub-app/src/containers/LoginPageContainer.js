import {connect} from 'react-redux';
import LoginPage from '../components/LoginPage/LoginPage';
import { changeField, loginSubmit } from '../store/actions/usersActions';

const mapStateToProps = (state) => ({
  loginData: {
    email: state.users.loginData.email,
    password: state.users.loginData.password,
  },
  loginErrorMessage: state.users.loginErrorMessage,
  nickname: state.users.nickname,
});

const mapDispatchToProps = (dispatch) =>  ({
  onChangeField: (changedData) => {
    // console.log(changedData);
    dispatch(changeField(changedData));
  },
  onFormLogin: () => {
    console.log('Il y a eu un submit !');
    dispatch(loginSubmit());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
