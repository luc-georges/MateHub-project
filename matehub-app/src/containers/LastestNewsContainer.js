import { connect } from 'react-redux'
import LastestNews from '../components/LastestNews/LastestNews';

const  mapStateToProps = (state) => ({
  list: state.news.list,
})

const mapDispatchToProps = null;


export default connect(mapStateToProps, mapDispatchToProps)(LastestNews);
