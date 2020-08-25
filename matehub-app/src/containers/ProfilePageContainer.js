import { connect } from 'react-redux';
import  ProfilePage  from '../components/ProfilePage/ProfilePage';

const  mapStateToProps = (state, ) =>(
{
userData:state.users.userData

});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
