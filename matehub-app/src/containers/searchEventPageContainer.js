import { connect } from 'react-redux';
import {getSelectedEvent} from '../store/actions/eventsActions';
import SearchEventPage from '../components/SearchEventPage/SearchEventPage';

const mapStateToProps = (state) => ({
  list: state.events.list,
});

const mapDispatchToProps = (dispatch) => ({
  getSelectedEvent: (changedData) => {
    dispatch(getSelectedEvent(changedData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchEventPage);
