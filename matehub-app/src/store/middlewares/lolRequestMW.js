import axios from 'axios';

import {
  GET_SUMMONER_INFO,
  getSummonerInfoSuccess,
  getSummonerStatsSuccess,
  getSummonerInfoError,
  VALIDATE_ACCOUNT,
  validateAccountSuccess,
  validateAccountError,
} from '../actions/lolActions';

import {getPersonnalData} from '../actions/authActions';

export default (store) => (next) => (action) => {
  next(action);
  // console.log("Region --->", store.getState().lol.sumInputData.summonerRegion);
  // console.log("Name --->", store.getState().lol.sumInputData.summonerName);
  switch (action.type) {
    case GET_SUMMONER_INFO:
      axios({
        method: 'get',
        url: `http://localhost:3001/lolApi/summoner/${
          store.getState().lol.sumInputData.summonerRegion
        }/${store.getState().lol.sumInputData.summonerName}`,
      })
        .then((res) => {
          // emplacement de la seconde requete
          console.log(res.data);
          store.dispatch(getSummonerInfoSuccess(res.data.data));

          axios({
            method: 'get',
            url: `http://localhost:3001/lolApi/stats/${
              store.getState().lol.sumInputData.summonerRegion
            }/${store.getState().lol.IGN.id}`,
          })
            .then((res) => {
              console.log('res de la seconde requête >>>>', res.data);
              store.dispatch(getSummonerStatsSuccess(res.data));
            })
            .catch(() => {
              console.log();
            });
        })
        .catch((err) => {
          console.log(err.response);
        });
      break;
    case VALIDATE_ACCOUNT:
      axios({
        method: 'post',
        url: `http://localhost:3001/lolApi/summoner/${
          store.getState().auth.connectedUserId
        }/1`,
        data: {
          IGN: store.getState().lol.IGN,
          stats: store.getState().lol.stats,
        },
      })
        .then((res) => {
          console.log(res);
          store.dispatch(validateAccountSuccess());
          store.dispatch(getPersonnalData());
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    default:
      return;
  }
};
