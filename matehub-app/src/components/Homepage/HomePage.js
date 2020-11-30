import React from 'react';
import LastestEvent from '../../containers/LastestEventContainer';
// import TopPlayer from '../TopPlayers/TopPlayer';
import TopPlayers from '../../containers/TopPlayersContainer';

import './style.scss';

import {Image} from 'semantic-ui-react'
import logo from '../../assets/logo-ok_matehub.svg';
import banner from '../../assets/header-banner.png';

const HomePage = () => {
  return (
    <div className="HomePage" id="page-wrap">
      <div className="header-home">
      <Image
                className='header-home--bannerimg'
                src={banner}
                />
    
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
