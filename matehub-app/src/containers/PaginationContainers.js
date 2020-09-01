import { connect } from 'react-redux'
import LastestEvent from '../components/LastestEvent/LastestEvent';
import Pagination from '../components/pagination/pagination'
import { setPage } from '../store/actions/eventsActions';

const  mapStateToProps = (state) => ({
  list: state.events.list,
})

const mapDispatchToProps = (dispatch) => ({
  setPage: (tab, p) => dispatch({
    type: 'SET_PAGE',
    page: p,
    payload: tab === 'feed' ? agent.Articles.feed(p) : agent.Articles.all(p)
  }),
  onTabClick: (tab, payload) => dispatch({ type: 'CHANGE_TAB', tab, payload })
});


export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
