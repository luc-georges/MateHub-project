import React from 'react';
import LastestEvent from '../../containers/LastestEventContainer';
// import TopPlayer from '../TopPlayers/TopPlayer';
import TopPlayers from '../../containers/TopPlayersContainer';
import LastestNews from '../../containers/LastestNewsContainer';
import './style.scss';
// import { Grid, Image, GridRow, GridColumn } from 'semantic-ui-react'

const HomePage = ({nickname}) => {
  return (
    <div className="HomePage">

      <h1 className="titre">Welcome on Matehub {nickname} !</h1>
      <LastestEvent className="LastestEvent"/>


      <TopPlayers className="TopPlayers"/>

      <LastestNews className="LastestNews" />


    </div>
  );
};

export default HomePage;
