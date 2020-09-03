import React from 'react';
import LastestEvent from '../../containers/LastestEventContainer';
// import TopPlayer from '../TopPlayers/TopPlayer';
import TopPlayers from '../../containers/TopPlayersContainer';
import LastestNews from '../../containers/LastestNewsContainer';
import './style.scss';

import {Image} from 'semantic-ui-react'
import logo from '../../assets/logo-matehub.svg';
const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="header-home">
   <Image
                size='medium'
                src={logo}
                />
      </div>
      <LastestEvent className="LastestEvent"/>


      <TopPlayers className="TopPlayers"/>
      <LastestNews className="LastestNews" />



    </div>
  );
};

export default HomePage;
