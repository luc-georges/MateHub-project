import { connect } from 'react-redux';
import {getSelectedEvent, searchEventChangeField} from '../store/actions/eventsActions';
import SearchEventPage from '../components/SearchEventPage/SearchEventPage';

const mapStateToProps = (state) => ({
  list: state.events.list,
  searchEventData: state.events.searchEventData,
});

const mapDispatchToProps = (dispatch) => ({
  getSelectedEvent: (changedData) => {
    dispatch(getSelectedEvent(changedData));
  },
  onChangeField: (changedData) => {
    // console.log(changedData);
    dispatch(searchEventChangeField(changedData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchEventPage);
