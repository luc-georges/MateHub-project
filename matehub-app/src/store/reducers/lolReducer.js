import {
  GET_SUMMONER_INFO,
  GET_SUMMONER_INFO_SUCCESS,
  GET_SUMMONER_STATS_SUCCESS,
  GET_SUMMONER_INFO_ERROR,
  SUM_INPUT_CHANGE_FIELD,
  VALIDATE_ACCOUNT,
  VALIDATE_ACCOUNT_SUCCESS,
  VALIDATE_ACCOUNT_ERROR,
} from '../actions/lolActions';

export const initialState = {
  IGN: {},
  stats: {},
  sumInputData: {
    summonerName: '',
    summonerRegion: '',
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
        IGN: {
          ...state.IGN,
          ...action.payload,
        },
      };
    case GET_SUMMONER_STATS_SUCCESS:
      return {
        ...state,
        stats: {
          ...state.stats,
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
    case VALIDATE_ACCOUNT:
      return {
        ...state,
      };
    case VALIDATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        sumInputData: {
          ...initialState.sumInputData,
        },
        IGN: {
          ...initialState.IGN,
        },
        stats: {
          ...initialState.stats,
        }
      };
    case VALIDATE_ACCOUNT_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};
