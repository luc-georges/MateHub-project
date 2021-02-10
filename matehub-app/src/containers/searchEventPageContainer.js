import { connect } from 'react-redux';
import {
  getSelectedEvent,
  searchEventChangeField,
  searchEventSubmit,
  isRankedCheckboxSearchEventChangeField,
  resetAllFilters,
} from '../store/actions/eventsActions';
import SearchEventPage from '../components/SearchEventPage/SearchEventPage';

const mapStateToProps = (state) => ({
  list: state.events.list,
  searchEventData: state.events.searchEventData,
  eventSearchResults: state.events.eventSearchResults,
  filterGotResults: state.events.filterGotResults,
});

const mapDispatchToProps = (dispatch) => ({
  getSelectedEvent: (changedData) => {
    dispatch(getSelectedEvent(changedData));
  },
  onChangeField: (changedData) => {
    dispatch(searchEventChangeField(changedData));
  },
  onIsRankedCheckboxSearchEventChangeField: (changedData) => {
    dispatch(isRankedCheckboxSearchEventChangeField(changedData));
  },
  onFormSubmit: () => {
    dispatch(searchEventSubmit());
  },
  onResetAllFilters: () => {
    dispatch(resetAllFilters());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchEventPage);
