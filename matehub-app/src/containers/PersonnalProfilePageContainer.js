import { connect } from 'react-redux';
import PersonnalProfilePage from '../components/PersonnalProfilePage/PersonnalProfilePage';
import { getPersonnalData, modifyPersonnalDataChangeField, getPersonnalDataSubmit,editProfilBanner } from '../store/actions/authActions';
import { getSelectedEvent } from '../store/actions/eventsActions';
import { sumInputChangeField } from '../store/actions/lolActions';
// import { getUserById } from '../store/reducers/usersReducer';

const mapStateToProps = (state) => ({
  personnalData: state.auth.personnalData,
  modifyPersonnalData: state.auth.modifyPersonnalData,
  sumInputData: state.lol.sumInputData,
});

const mapDispatchToProps = (dispatch) => ({
  getPersonnalData: () => {
    dispatch(getPersonnalData());
  },
  onChangeField: (changedData) => {
    // console.log(changedData);
    dispatch(modifyPersonnalDataChangeField(changedData));
  },
  onFormSubmit: () => {
    console.log('Il y a eu un submit !');
    dispatch(getPersonnalDataSubmit());
  },
  editProfilBanner: (bannerImg) => {
    dispatch(editProfilBanner(bannerImg))
  },
  getSelectedEvent: (changedData) => {
    dispatch(getSelectedEvent(changedData));
  },
  onSumInputChangeField: (changedData) => {
    dispatch(sumInputChangeField(changedData))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonnalProfilePage);
