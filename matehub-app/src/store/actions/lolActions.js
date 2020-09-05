export const GET_SUMMONER_INFO = 'GET_SUMMONER_INFO';
export const GET_SUMMONER_INFO_SUCCESS = 'GET_SUMMONER_INFO_SUCCESS';
export const GET_SUMMONER_INFO_ERROR = 'GET_SUMMONER_INFO_ERROR';

export const SUM_INPUT_CHANGE_FIELD = 'SUM_INPUT_CHANGE_FIELD';

export const getSummonerInfo = () => ({
  type: GET_SUMMONER_INFO,
});

export const getSummonerInfoSuccess = (payload) => ({
  type: GET_SUMMONER_INFO_SUCCESS,
  payload,
});

export const getSummonerInfoError = (payload) => ({
  type: GET_SUMMONER_INFO_ERROR,
  payload,
});

export const sumInputChangeField = (payload) => ({
  type: SUM_INPUT_CHANGE_FIELD,
  payload,
})
