import {
  GET_SUMMONER_INFO,
  GET_SUMMONER_INFO_SUCCESS,
  GET_SUMMONER_INFO_ERROR,
} from '../actions/lolActions';

export const initialState = {
  summonerInfo: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SUMMONER_INFO:
      return {
        ...state,
      };
    case GET_SUMMONER_INFO_SUCCESS:
      return {
        ...state,
        summonerInfo: {
          ...state.summonerInfo,
          ...action.payload
        }
      };
    case GET_SUMMONER_INFO_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};
