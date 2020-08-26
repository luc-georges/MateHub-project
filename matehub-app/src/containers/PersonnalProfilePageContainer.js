import { connect } from 'react-redux';
import PersonnalProfilePage from '../components/PersonnalProfilePage/PersonnalProfilePage';
import { getPersonnalData } from '../store/actions/authActions';

// import { getUserById } from '../store/reducers/usersReducer';

const mapStateToProps = (state) => ({
  personnalData: state.auth.personnalData,
});

const mapDispatchToProps = (dispatch) => ({
  getPersonnalData: () => {
    dispatch(getPersonnalData());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonnalProfilePage);
