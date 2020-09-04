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

  console.log(userData);

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
        <div className="profilepage-button">
          <Modal
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
          </Modal>
        </div>

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
              userData._event_created.slice(0, 12).map((event) => {
                return (
                  <NavLink
                    key={`C_event${event.event_id}`}
                    className="Event-module"
                    to={`/event/${event._event_id}`}
                    onClick={handleGetSelectedEvent}
                  >
                    <Card className="event-card">
                      <Card.Content>
                        <Image
                          floated="right"
                          src={logolol}
                          size="mini"
                          alt="lollogo"
                        />
                        <Card.Header>{event.game_name}</Card.Header>
                        <Card.Meta>{event._creator}</Card.Meta>
                        <Card.Description>
                          {event._description}
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <div className="LatestEvent-text">
                          Date and time{' '}
                          <Moment format="YYYY/MM/DD HH:MM">
                            {event.event_time}
                          </Moment>
                          <div className="LatestEvent-text">
                            Number of players {event.player_count}
                          </div>
                          <div className="LatestEvent-text">
                            Looking for: {event.player_max} player
                          </div>
                          {event.lang.map((lang) => {
                            return <Flag name={lang.icon} key={lang.id} />;
                          })}
                          <div className="view-details">view details</div>
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
                return (
                  <NavLink
                    key={`H_event${h_event.event_id}`}
                    id={h_event._event_id}
                    to={`/event/${h_event._event_id}`}
                    onClick={handleGetSelectedEvent}
                  >
                    <Card className="event-card">
                      <Card.Content>
                        <Image floated="right" size="mini" src={logolol} />
                        <Card.Header>{h_event.game_name}</Card.Header>
                        <Card.Meta>{h_event._creator}</Card.Meta>
                        <Card.Description>
                          {h_event._description}
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <div className="LatestEvent-text">
                          Date and time{' '}
                          <Moment format="YYYY/MM/DD HH:MM">
                            {h_event.event_time}
                          </Moment>
                          <div className="LatestEvent-text">
                            Number of players {h_event.player_count}
                          </div>
                          <div className="LatestEvent-text">
                            Looking for: {h_event.player_max} player
                          </div>
                          {h_event.Lang.map((lang) => {
                            return <Flag name={lang.icon} key={lang.id} />;
                          })}
                          <div className="view-details">view details</div>
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
