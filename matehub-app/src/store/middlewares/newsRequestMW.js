// import axios from 'axios';
// import {
//   GET_NEWS,
//   getNewsSuccess,
//   getNewsError,
// } from '../actions/newsActions';

const newsRequestMW = (store) => (next) => (action) => {
  //  console.log("Passage dans le newsRequestMW");
  next(action);
  switch (action.type) {
    // case GET_NEWS:
    //   // console.log("Passage dans GET NEWS");
    //   axios({
    //     method: 'get',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     //  url: 'http://ec2-3-86-206-225.compute-1.amazonaws.com:3001/lol/news',
    //     url: 'http://localhost:3001/lol/news',
    //   })
    //     .then((res) => {
    //       // console.log("res.data dans le MW: ", res.data);
    //       // console.log("res.data: "+ res)
    //       store.dispatch(getNewsSuccess(res.data.data));
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       store.dispatch(
    //         getNewsError('Impossible des récupérer les données')
    //       );
    //     });
    //   break;
    default:
      return;
  }
};

export default newsRequestMW;
