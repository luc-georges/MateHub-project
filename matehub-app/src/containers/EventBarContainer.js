import { connect } from 'react-redux'
import { getEvents } from '../store/actions/eventActions'
import EventBar from '../components/EventBar/EventBar';

const  mapStateToProps = (state) => ({
  list: state.events.list,
})

const mapDispatchToProps = (dispatch) => ({
  getEvents: () => {
    dispatch(getEvents());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EventBar);
