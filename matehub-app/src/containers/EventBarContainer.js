import { connect } from 'react-redux'
import EventBar from '../components/EventBar/EventBar';

const  mapStateToProps = (state) => ({
  list: state.eventReducer.list,
})

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(EventBar);
