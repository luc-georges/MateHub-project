import React, { useEffect, useState } from 'react';
import './style.scss';
import { Button, Header, Modal, Form } from 'semantic-ui-react';
import Moment from 'react-moment';
import logolol from '../../assets/logolol.png';
import icon from '../../assets/test.ico';
// import Banner from '../../assets/LoL-Banner.png';

const ProfilePage = ({ userData, getUser, connectedUserId }) => {
    // eslint-disable-next-line
    useEffect(() => {
      getUser();
      // eslint-disable-next-line
    }, []);

  const [open, setOpen] = useState(false);
  const [open2, setopen2] = useState(false);

  return (
    <div className="profilepage">
      <div className="profilepage-header">  
      <div className="container-avatar"></div>
       <div className="container-banner">
       {userData._banner &&
            <img
            src={require(`../../assets/${userData._banner}`)}
            alt="lollogo"
            className="banner"
          />
              
            }
      {userData._avatar &&
           <img
       
           src={icon}
           alt="lollogo"
           className="avatar"
         />
              
            }
      
      </div>
        <div className="details">
        <h1>{userData._nickname}</h1>
        </div>
        </div>
      <div className="profilepage-body">
        <div className="profilepage-button">
          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Event invitation</Button>}
          >
            <Modal.Header>Event invitation</Modal.Header>
            <Modal.Description>
              <Header>Events</Header>
              <div>invitation a l'evènement</div>
            </Modal.Description>
            <Modal.Actions>
              <Button color="black" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button
                content="ok"
                labelPosition="right"
                icon="checkmark"
                onClick={() => setOpen(false)}
                positive
              />
            </Modal.Actions>
          </Modal>

        </div>
        <div className="profilepage-description">
          <h2>Description</h2>
          <div>{userData._description}</div>
        </div>
        <div className="profilepage-game">
        {userData._games &&
            userData._games.map((game) => {
              return (
                <div key= {game.id} >
                  
                  <h2>{game.game_name}</h2>
                  <div className="profilepage-game-user">
                  <div>Pseudo : {game.ign.name}</div>
                  <div>level : {game.ign.summonerLevel}</div>
                  <div>Rank : {game.stats.tier} / {game.stats.rank} </div>
                  </div>
                  
                </div>
              );
            })}
          
        </div>

        <div className="LastestEvent-modules">
        {userData._event_created &&
            userData._event_created.map((event) => {
              return (
                <div key={`C_event${event.event_id}`} className="LastestEvent-module" >
                  <img
                src={logolol}
                alt="lollogo"
                className="LastestEvent-module-image"
              />
                   <div>
                  Date and time  <Moment format="YYYY/MM/DD HH:MM">{event._starting}</Moment>
                  </div>
                  <div className="profilepage-event_created">
                  <div>{event.game_name} </div>
                  <div>player:{event.player_count}</div>
                  <div>party :{event.player_max}</div>
                  </div>
                  
                </div>
              );
            })}
            </div>
                  <h3>Event Registered: </h3>
        <div className="LastestEvent-modules">
        {userData.has_events &&
            userData.has_events.map((h_event) => {
              return (
                <div key= {`H_event${h_event.event_id}`} className="LastestEvent-module">
                    <img
                src={logolol}
                alt="lollogo"
                className="LastestEvent-module-image"
              />
                  <div>
                  Date and time  <Moment format="YYYY/MM/DD HH:MM">{h_event._starting}</Moment>
                  </div>
                  <div className="profilepage-has_event">
                  <div>{h_event.game_name} </div>
                  <div>player :{h_event.player_count}</div>
                  <div>party :{h_event.player_max}</div>
              
                  </div>
                  
                </div>
                

              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
