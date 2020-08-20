import { connect } from 'react-redux';
import  TopPlayers  from '../components/TopPlayers/TopPlayers';

const  mapStateToProps = (state) => ({
  topUsersList: state.users.topUsersList
  
})

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(TopPlayers);
