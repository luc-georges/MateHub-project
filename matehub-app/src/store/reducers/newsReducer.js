import {
  GET_NEWS,
  GET_NEWS_SUCCESS,
  GET_NEWS_ERROR,
} from '../actions/newsActions';

export const initialState = {
  error: '',
  list: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
      };
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
        error: '',
      };
    case GET_NEWS_ERROR:
      return {
        ...state,
        error: action.payload,
        list: [],
      };
    default:
      return state;
  }
};

// export default eventsReducer;
