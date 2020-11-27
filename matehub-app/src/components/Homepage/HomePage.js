import React from 'react';
import LastestEvent from '../../containers/LastestEventContainer';
// import TopPlayer from '../TopPlayers/TopPlayer';
import TopPlayers from '../../containers/TopPlayersContainer';
import LastestNews from '../../containers/LastestNewsContainer';
import './style.scss';

import {Image} from 'semantic-ui-react'
import logo from '../../assets/logo-ok_matehub.svg';
const HomePage = () => {
  return (
    <div className="HomePage" id="page-wrap">
      <div className="header-home">
   <Image
                className='header-home--img'
                src={logo}
                />
      </div>
      <LastestEvent className="LastestEvent"/>


      <TopPlayers className="TopPlayers"/>




    </div>
  );
};

export default HomePage;
