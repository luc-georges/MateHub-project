export const GET_SUMMONER_INFO = 'GET_SUMMONER_INFO';
export const GET_SUMMONER_INFO_SUCCESS = 'GET_SUMMONER_INFO_SUCCESS';
export const GET_SUMMONER_STATS_SUCCESS = 'GET_SUMMONER_STATS_SUCCESS';
export const GET_SUMMONER_INFO_ERROR = 'GET_SUMMONER_INFO_ERROR';

export const VALIDATE_ACCOUNT = 'VALIDATE_ACCOUNT';
export const VALIDATE_ACCOUNT_SUCCESS = 'VALIDATE_ACCOUNT_SUCCESS';
export const VALIDATE_ACCOUNT_ERROR = 'VALIDATE_ACCOUNT_ERROR';

export const SUM_INPUT_CHANGE_FIELD = 'SUM_INPUT_CHANGE_FIELD';

export const getSummonerInfo = () => ({
  type: GET_SUMMONER_INFO,
});

export const getSummonerInfoSuccess = (payload) => ({
  type: GET_SUMMONER_INFO_SUCCESS,
  payload,
});

export const getSummonerStatsSuccess = (payload) => ({
  type: GET_SUMMONER_STATS_SUCCESS,
  payload,
});

export const getSummonerInfoError = (payload) => ({
  type: GET_SUMMONER_INFO_ERROR,
  payload,
});

export const sumInputChangeField = (payload) => ({
  type: SUM_INPUT_CHANGE_FIELD,
  payload,
});

export const validateAccount = () => ({
  type: VALIDATE_ACCOUNT,
});

export const validateAccountSuccess = (payload) => ({
  type: VALIDATE_ACCOUNT_SUCCESS,
  payload,
});

export const validateAccountError = (payload) => ({
  type: VALIDATE_ACCOUNT_ERROR,
  payload,
});
