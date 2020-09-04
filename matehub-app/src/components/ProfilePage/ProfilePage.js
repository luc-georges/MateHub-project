import React, { useEffect, useState } from 'react';
import {
  Button,
  Header,
  Modal,
  Form,
  Icon,
  Card,
  Image,
  Flag,
} from 'semantic-ui-react';
import './style.scss';
import Moment from 'react-moment';
import logolol from '../../assets/logolol.png';
import icon from '../../assets/test.ico';
import { NavLink } from 'react-router-dom';
// import Banner from '../../assets/LoL-Banner.png';

const ProfilePage = ({
  userData,
  getUser,
  getSelectedEvent,
  connectedUserId,
}) => {
  const handleGetSelectedEvent = (evt, data) => {
    // console.log(evt.currentTarget.id);
    getSelectedEvent(evt.currentTarget.id);
  };
  // eslint-disable-next-line
  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  const [open, setOpen] = useState(false);
  // const [open2, setopen2] = useState(false);

  return (
    <div className="profilepage">
      <div className="profilepage-header">
        <div className="container-avatar"></div>
        <div className="container-banner">
          {userData._banner && (
            <img
              src={require(`../../assets/${userData._banner}`)}
              alt="lollogo"
              className="banner"
            />
          )}
          {userData._avatar && (
            <img src={icon} alt="lollogo" className="avatar" />
          )}
        </div>
        <div className="details">
          <h1>{userData._nickname}</h1>
        </div>
      </div>
      <div className="profilepage-body">
        <h2 className="profilepage-titre">Description</h2>
        <div className="profilepage-description">{userData._description}</div>

        <div className="profilepage-game">
          {userData._games &&
            userData._games.map((game) => {
              return (
                <div key={game.id}>
                  <h2 className="profilepage-titre">{game.game_name}</h2>
                  <div className="profilepage-game-user">
                    <div className="profilepage-game-user-info">
                      Pseudo : {game.ign.name}
                    </div>
                    <div className="profilepage-game-user-info">
                      level : {game.ign.summonerLevel}
                    </div>
                    <div className="profilepage-game-user-info">
                      Rank : {game.stats.tier} / {game.stats.rank}{' '}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <h2 className="profilepage-titre">Created Events</h2>
        <div className="Event-modules">
          <Card.Group className="event-card-group">
            {userData._event_created &&
              userData._event_created.slice(0, 12).map((event,index) => {
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
                };
                return (
                  <NavLink
                    key={`C_event${event.event_id}`}
                    className="Event-module"
                    to={`/event/${event._event_id}`}
                    onClick={handleGetSelectedEvent}
                  >
                     <div className={`slide-in${index}`}></div>
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
                      <Moment format="MMM DD HH:MM">
                        {event.starting}
                      </Moment></span>
                      <div className="LatestEvent-text">
                        Register player(s) now: <span className="number">{event.player_count}</span>
                      </div>
                      <div className="LatestEvent-text">
                        Looking for: <span className="number">{event.player_max}</span> players
                      </div>
                      <span>Lang: </span>
                      {event.lang.map((lang) => {
                        return <Flag name={lang.icon} />;
                      })}
                      <div className="view-details">GO{" "}<Icon name="rocket"/></div>
                    </div>
                  </Card.Content>
                </Card>
            </NavLink>
                );
              })}
          </Card.Group>
        </div>
        <h2 className="personnalprofilepage-titre">Event Registered: </h2>
        <Card.Group className="event-card-group">
          <div className="Event-modules">
            {userData.has_events &&
              userData.has_events.map((h_event) => {
                let rankClasshev;
          
                if( h_event.rank.slice(0,4) === "iron"){
                  rankClasshev = "iron"
                }else if (h_event.rank.slice(0,6) === "bronze"){
                  rankClasshev = "bronze"
                }else if (h_event.rank.slice(0,4) === "silv"){
                  rankClasshev = "silv"
                }else if (h_event.rank.slice(0,4) === "gold"){
                  rankClasshev = "gold"
                }else if (h_event.rank.slice(0,4) === "plat"){
                  rankClasshev = "plat"
                }else if (h_event.rank.slice(0,4) === "diam"){
                  rankClasshev = "diam"
                } else {
                  rankClasshev = "chal"
                };
                return (
                  <NavLink
                    key={`H_event${h_event.event_id}`}
                    className="Event-module"
                    id={h_event._event_id}
                    to={`/event/${h_event._event_id}`}
                    onClick={handleGetSelectedEvent}
                  >
                   <Card className="event-card">
                      <Card.Content>
                      <Image floated="right" size="mini" src={logolol} />
                        <Card.Header><span className="nickname">{h_event.game_name}</span></Card.Header>
                        <Card.Meta ><br /><span className={`rank ${rankClasshev}`}>{h_event.rank}</span></Card.Meta>
                        <Card.Description className="descript">                    
                    "{h_event.description.length > 25
                      ? `${h_event.description.slice(0, 25)}...`
                      : h_event.description}"{/* "{element._description}" */}</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                    <div className="LatestEvent-text">
                      Starting date and time:{' '} <br />
                      <span className="starting">
                      <Moment format="MMM DD HH:MM">
                        {h_event.starting}
                      </Moment></span>
                      <div className="LatestEvent-text">
                        Register player(s) now: <span className="number">{h_event.player_count}</span>
                      </div>
                      <div className="LatestEvent-text">
                        Looking for: <span className="number">{h_event.player_max}</span> players
                      </div>
                      <span>Lang: </span>
                     
                      {h_event.Lang && h_event.Lang.map((lang) => {
                        return <Flag name={lang.icon} />;
                      })}
                      <div className="view-details">GO{" "}<Icon name="rocket"/></div>
                    </div>
                  </Card.Content>
                </Card>
                  </NavLink>
                );
              })}
          </div>
        </Card.Group>
      </div>
    </div>
  );
};

export default ProfilePage;
