import {
  GET_SUMMONER_INFO,
  GET_SUMMONER_INFO_SUCCESS,
  GET_SUMMONER_INFO_ERROR,
  SUM_INPUT_CHANGE_FIELD,
} from '../actions/lolActions';

export const initialState = {
  summonerInfo: {},
  sumInputData: {
    summonerName: 'Gui',
    summonerRegion: 'euw',
  },
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
          ...action.payload,
        },
      };
    case GET_SUMMONER_INFO_ERROR:
      return {
        ...state,
      };
    case SUM_INPUT_CHANGE_FIELD:
      return {
        ...state,
        sumInputData: {
          ...state.sumInputData,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
