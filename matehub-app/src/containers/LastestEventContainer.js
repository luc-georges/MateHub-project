import { connect } from 'react-redux'
import LastestEvent from '../components/LastestEvent/LastestEvent';

const  mapStateToProps = (state) => ({
  list: state.events.list,
})

const mapDispatchToProps = null;


export default connect(mapStateToProps, mapDispatchToProps)(LastestEvent);
