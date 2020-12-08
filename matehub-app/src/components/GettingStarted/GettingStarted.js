import React, {useEffect} from 'react';
import './style.scss';
import { Image } from 'semantic-ui-react';
import logo from '../../assets/logo-ok_matehub.svg';
import banner from '../../assets/header-banner.png';
const GettingStarted = () => {
  useEffect(() => {
    document.title = `MateHub: Getting started`
 }, []);
  return (
   
    <div className="gettingstarted">
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
      <div className="gettingstarted-bloc">
        <div className="gettingstarted-bloc-textFirst">
          <h2 className="gettingstarted-bloc-titre qaTitle">What is Matehub?</h2>
            <p className="textInBlock">Matehub is a platform that allows you to easily find teammates to play your favorite games.</p>
        </div>
            <div className="gettingstarted-bloc-textSecond">
            <h2 className="gettingstarted-bloc-titre qaTitle">How it works?</h2>
            <p className="textInBlock">Once you are registered on the site you can create an event by indicating the date and time, your rank, the number of teammates you are looking for, the language(s) you speak and your pseudo discord. You can optionally indicate a description, an approximate duration of the game time.<br />
                Once your event is created, other users will be able to access it and ask to join it.<br />
                Or you can simply search through the events already created by other users and ask them to join.</p>
        </div>

      </div>
      <div className="gettingstarted-bloc2">
        <div className="gettingstarted-bloc-textFirst">
          <h2 className="gettingstarted-bloc-titre qaTitle">How I can create an event?</h2>
            <p className="textInBlock">It's very simple, you have to click on the "create event" button, which is located at the top of the right navigation bar once you are logged in the browser version, and in the mobile version the button is located in the bottom navigation bar. This will redirect you to the event creation form, and all you have to do is fill in the information, submit and your event will be online.</p>
        </div>
            <div className="gettingstarted-bloc-textSecond">
            <h2 className="gettingstarted-bloc-titre qaTitle">how can I join an event?</h2>
            <p className="textInBlock">To join an event click on the "search event" button next to "create event", you will be redirected to the search form where you can choose the date, the rank and optionally the size of the team and the duration of the game.
            Once you validate the form all the events that match your filters will appear below in the form of a map, if you are interested in one of these you can click on it to go to the page dedicated to the event and ask to join it by clicking on "apply event".</p>
        </div>

      </div>
    

    </div>
  );
};

export default GettingStarted;
