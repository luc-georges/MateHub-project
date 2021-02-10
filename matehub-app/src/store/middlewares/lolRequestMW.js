import axios from 'axios';

import {
  GET_SUMMONER_INFO,
  getSummonerInfoSuccess,
  getSummonerStatsSuccess,
  //getSummonerInfoError,
  VALIDATE_ACCOUNT,
  validateAccountSuccess,
  //validateAccountError,
} from '../actions/lolActions';

import {getPersonnalData} from '../actions/authActions';

const host = `${process.env.REACT_APP_URL}`

export default (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case GET_SUMMONER_INFO:
      axios({
        method: 'get',
        url: `${host}lolApi/summoner/${
          store.getState().lol.sumInputData.summonerRegion
        }/${store.getState().lol.sumInputData.summonerName}`,
      })
        .then((res) => {
          // emplacement de la seconde requete
          store.dispatch(getSummonerInfoSuccess(res.data.data));

          axios({
            method: 'get',
            url: `${host}lolApi/stats/${
              store.getState().lol.sumInputData.summonerRegion
            }/${store.getState().lol.IGN.id}`,
          })
            .then((res) => {
              store.dispatch(getSummonerStatsSuccess(res.data));
            })
            .catch(() => {
            });
        })
        .catch((err) => {
          console.log(err.response);
        });
      break;
    case VALIDATE_ACCOUNT:
      axios({
        method: 'post',
        url: `${host}lolApi/summoner/${
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
