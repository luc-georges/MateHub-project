import React from 'react';
import LastestEvent from '../../containers/LatestEventContainer';
import TopPlayer from '../TopPlayers/TopPlayer';
import LastestNews from '../LastestNews/LastestNews';
import './style.scss';


const HomePage = ({list}) => {
  return (
    <div className="HomePage">
      <h1 className="titre">Welcome on PlayTogether Connard !</h1>
      <LastestEvent />
      <TopPlayer list={list}/>
      <LastestNews />
    </div>
  );
};

export default HomePage;
