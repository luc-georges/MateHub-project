import React from 'react';
import LastestEvent from '../../containers/LastestEventContainer';
// import TopPlayer from '../TopPlayers/TopPlayer';
import TopPlayers from '../../containers/TopPlayersContainer';
import LastestNews from '../../containers/LastestNewsContainer';
import './style.scss';
import { Grid, Image, GridRow, GridColumn } from 'semantic-ui-react'

const HomePage = ({nickname}) => {
  return (
    <div className="HomePage">

      <div className="header-home">
      <LastestNews className="LastestNews" />
      </div>
      <LastestEvent className="LastestEvent"/>


      <TopPlayers className="TopPlayers"/>



    </div>
  );
};

export default HomePage;
