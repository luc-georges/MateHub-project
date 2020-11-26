import React, { 
  useEffect, 
  //useState 
} from 'react';
import './style.scss';
import {
  //Button,
  //Modal,
  Icon,
  Card,
  Image,
  Flag,
} from 'semantic-ui-react';

import moment from 'moment'
import logolol from '../../assets/logolol.png';
import icon from '../../assets/test.ico';
import { NavLink } from 'react-router-dom';
// import Banner from '../../assets/LoL-Banner.png';

const ProfilePage = ({
  userData,
  getUser,
  getSelectedEvent,
  //connectedUserId,
}) => {
  const handleGetSelectedEvent = (evt, data) => {
    getSelectedEvent(evt.currentTarget.id);
  };

  //eslint-disable-next-line
  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);




  return (
    <div className="personnalprofilepage">
      <div className="personnalprofilepage-header">
        <div className="container-avatar"></div>
        <div className="container-banner">
        {userData._banner ? (
            <div className="modal-img">
              <img
                src={require(`../../assets/${userData._banner}`)}
                alt="lollogo"
                className="banner-modal-img"
              />
            </div>
          ) : (
            <div className="modal-img">
              <img
                src={require(`../../assets/banner1.png`)}
                alt="lollogo"
                className="banner-modal-img"
              />
            </div>
          )}
            <div className="details">
          {userData._avatar && (
            <img src={icon} alt="lollogo" className="avatar" />
          )}
          <h1>{userData._nickname}</h1>
          <div className="test-description">{userData._description}</div>
        </div>
        </div>
      </div>
      <div className="profilepage-body">
        <div className="profilepage-button">
          {/* <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button className="button-modal">Event invitation</Button>}
            className="modal-invitation"
          >
            <Modal.Header className="modal-invitation-titre">Event invitation</Modal.Header>
            <Modal.Actions className="modal-invitation-action">
              <Button
              className="banner-buttonData"
                content="ok"
                labelPosition="right"
                icon="checkmark"
                onClick={() => setOpen(false)}
                positive
              />
              <Button
              className="banner-buttonData"
                color="black"
                content="Cancel"
                onClick={() => setOpen(false)}
              ></Button>
            </Modal.Actions>
          </Modal> */}
        </div>

        <h2 className="title-profile-small">Playing :</h2>

        <div className="profilepage-game">
          {userData._games &&
            userData._games.map((game) => {
              return (
               
                <div className="game-container" key={game.id}>
                  <h2 className="profilepage-titre-game">{game.game_name} :</h2>
                 
                    <div className="profilepage-game-user-info">
                      <span className="blue-text">Summoner  : </span> <span className="cyan-text">{game.ign.name}</span>
                    </div>
                    <div className="profilepage-game-user-info">
                    <span className="blue-text"> level : </span><span className="cyan-text">{game.ign.summonerLevel}</span>
                    </div>
                    <div className="profilepage-game-user-info">
                    <span className="blue-text">Rank : </span> <span className="cyan-text">{game.stats.tier} </span> <span className="blue-text">/ </span><span className="cyan-text">{game.stats.rank}{' '}</span>
                    </div>
                    <div className="profilepage-game-user-info">
                    <span className="blue-text">Win : </span> <span className="cyan-text">{game.stats.wins} </span> <span className="blue-text">/ Losses :</span><span className="cyan-text">{game.stats.losses}{' '}</span>

                  </div>
                </div>
              );
            })}
        </div>
        <h2 className="profilepage-titre">Created Events</h2>
        <div className="Event-modules">
          <Card.Group className="event-card-group">
            {userData._event_created &&
              userData._event_created.slice(0, 10).map((event,index) => {
                let rankClass;
          
                if( event.rank.slice(0,4) === "iron"){
                  rankClass = "iron"
                }else if (event.rank.slice(0,6) === "bronze"){
                  rankClass = "bronze"
                }else if (event.rank.slice(0,4) === "silv"){
                  rankClass = "silv"
                }else if (event.rank.slice(0,4) === "gold"){
                  rankClass = "gold"
                }else if (event.rank.slice(0,4) === "plat"){
                  rankClass = "plat"
                }else if (event.rank.slice(0,4) === "diam"){
                  rankClass = "diam"
                } else {
                  rankClass = "chal"
                }
                return (
                  <NavLink
                    key={`C_event${event.event_id}`}
                    className="Event-module"
                    to={`/event/${event._event_id}`}
                    onClick={handleGetSelectedEvent}
                  >
                     <div className={`slide-in${index}`}>
                    <Card className="event-card">
                      <Card.Content>
                      <Image floated="right" size="mini" src={logolol} />
                        <Card.Header><span className="nickname">{event.game_name}</span></Card.Header>
                        <Card.Meta ><br /><span className={`rank ${rankClass}`}>{event.rank}</span></Card.Meta>
                        <Card.Description className="descript">                    
                    "{event.description.length > 25
                      ? `${event.description.slice(0, 25)}...`
                      : event.description}"{/* "{element._description}" */}</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                    <div className="LatestEvent-text">
                      Starting date and time:{' '} <br />
                     <span className="starting">
                      {moment.parseZone(event.event_time).format("YYYY/MM/DD h:mm a")}
                      </span>
                      <div className="LatestEvent-text">
                        Register player(s) now: <span className="number">{event.player_count}</span>
                      </div>
                      <div className="LatestEvent-text">
                        Looking for: <span className="number">{event.player_max}</span> players
                      </div>
                      <span>Lang: </span>
                      {event.lang && event.lang.map((lang) => {
                        return <Flag name={lang.icon} />;
                      })}
                      <div className="view-details">GO{" "}<Icon name="rocket"/></div>
                    </div>
                  </Card.Content>
                </Card>
                </div>
            </NavLink>
                );
              })}
          </Card.Group>
        </div>
        <h2 className="personnalprofilepage-titre">Event Registered: </h2>
          <div className="Event-modules">
        <Card.Group className="event-card-group">
            {userData.has_events &&
              userData.has_events.map((h_event,index) => {
                let rankClass2;
          
                if( h_event.rank.slice(0,4) === "iron"){
                  rankClass2 = "iron"
                }else if (h_event.rank.slice(0,6) === "bronze"){
                  rankClass2 = "bronze"
                }else if (h_event.rank.slice(0,4) === "silv"){
                  rankClass2 = "silv"
                }else if (h_event.rank.slice(0,4) === "gold"){
                  rankClass2 = "gold"
                }else if (h_event.rank.slice(0,4) === "plat"){
                  rankClass2 = "plat"
                }else if (h_event.rank.slice(0,4) === "diam"){
                  rankClass2 = "diam"
                } else {
                  rankClass2 = "chal"
                }
                return (
                  <NavLink
                    key={`H_event${h_event.event_id}`}
                    id={h_event._event_id}
                    to={`/event/${h_event._event_id}`}
                    onClick={handleGetSelectedEvent}
                  >
                     <div className={`slide-in${index}`}>
                    <Card className="event-card">
                      <Card.Content>
                        <Image floated="right" size="mini" src={logolol} />

                        <Card.Header><span className="nickname">{h_event.game_name}</span></Card.Header>
                        <Card.Meta><br /><span className={`rank ${rankClass2}`}>{h_event.rank}</span></Card.Meta>
                        <Card.Description className="descript">
                        "{h_event.description.length > 25
                      ? `${h_event.description.slice(0, 25)}...`
                      : h_event.description}
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <div className="LatestEvent-text">
                        Starting date and time:{' '} <br />
                           <span className="starting">
                          {moment.parseZone(h_event.event_time).format("YYYY/MM/DD h:mm a")}
                          </span>
                          <div className="LatestEvent-text">
                            Number of players {h_event.player_count}
                          </div>
                          <div className="LatestEvent-text">
                            Looking for: {h_event.player_max} player
                          </div>
                          {h_event.lang && h_event.lang.map((lang) => {
                            return <Flag name={lang.icon} key={lang.id} />;
                          })}
                          <div className="view-details">view details</div>
                        </div>
                      </Card.Content>
                    </Card>
                    </div>
                  </NavLink>
                );
              })}
        </Card.Group>
          </div>
      </div>
    </div>
  );
};

export default ProfilePage;
