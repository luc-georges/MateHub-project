import React from 'react';
import LastestEvent from '../../containers/LatestEventContainer';
// import TopPlayer from '../TopPlayers/TopPlayer';
import TopPlayers from '../../containers/TopPlayersContainer';
import LastestNews from '../LastestNews/LastestNews';
import './style.scss';


const HomePage = ({nickname}) => {
  return (
    <div className="HomePage">
      <h1 className="titre">Welcome on PlayTogether {nickname} !</h1>
      <LastestEvent />
      <TopPlayers /* list={list} *//>
      <LastestNews />
    </div>
  );
};

export default HomePage;
