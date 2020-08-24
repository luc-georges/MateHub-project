import { connect } from 'react-redux';
import HomePage from '../components/Homepage/HomePage';
import LatestNews from '../components/LastestNews/LastestNews';

const mapStateToProps = (state) => ({
  nickname: state.auth.nickname,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
