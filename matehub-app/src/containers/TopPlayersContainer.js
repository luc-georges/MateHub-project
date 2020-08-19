import { connect } from 'react-redux';
import  TopPlayer  from '../component/TopPlayer/TopPlayer';

const  mapStateToProps = (state) => ({
  list: state.users.list,
  
})

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(TopPlayer);


