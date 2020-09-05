import axios from 'axios';

import {
  GET_SUMMONER_INFO,
  getSummonerInfoSuccess,
  getSummonerInfoError,
} from '../actions/lolActions';

export default (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case GET_SUMMONER_INFO:
      axios({
        method: 'get',
        url: `http://http://localhost:3001/lolApi/summoner/${
          store.getState().lol.sumInputData.summonerRegion
        }/${store.getState().lol.sumInputData.summonerName}`,
      })
        .then((res) => {
          // emplacement du second get
          console.log(res);
        })
        .catch((err) => {
          console.log(err.response);
        });
    default:
      return;
  }
};
