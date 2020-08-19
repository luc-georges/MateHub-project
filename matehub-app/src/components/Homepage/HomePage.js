import React from 'react';
import LastestEvent from '../LastestEvent/LastestEvent';
import TopPlayer from '../TopPlayers/TopPlayer';
import LastestNews from '../LastestNews/LastestNews';
import './style.scss';


const HomePage = ({list}) => {
  return (
    <div className="HomePage">
      <h1 className="titre">Welcome on PlayTogether Connard !</h1>
      <LastestEvent list={list} />
      <TopPlayer list={list}/>
      <LastestNews />
      <LastestEvent />
      <TopPlayer />
      <LastestNews />
      <LastestEvent />
      <TopPlayer />
      <LastestNews />
      <LastestEvent />
      <TopPlayer />
      <LastestNews />
      <LastestEvent />
      <TopPlayer />
      <LastestNews />
      <LastestEvent />
      <TopPlayer />
      <LastestNews />
    </div>
  );
};

export default HomePage;
