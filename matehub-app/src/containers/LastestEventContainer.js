import { connect } from 'react-redux'
import LastestEvent from '../components/LastestEvent/LastestEvent';
import { getSelectedEvent, getEventById } from '../store/actions/eventsActions';

const  mapStateToProps = (state) => ({
  list: state.events.list,
})

const mapDispatchToProps = (dispatch) => ({
  getSelectedEvent: (changedData) => {
    dispatch(getSelectedEvent(changedData));
  },
  getEventById: () => {
    dispatch(getEventById());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(LastestEvent);
