import React, { useEffect } from 'react';
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
import Moment from 'react-moment';
import logolol from '../../assets/logolol.png';
import icon from '../../assets/test.ico';
import { NavLink } from 'react-router-dom';
import './style.scss';

const PersonnalProfilePage = ({
  personnalData,
  getPersonnalData,
  onChangeField,
  onFormSubmit,
  modifyPersonnalData,
  editProfilBanner,
  getSelectedEvent,
}) => {
  const handleGetSelectedEvent = (evt, data) => {
    // console.log(evt.currentTarget.id);
    getSelectedEvent(evt.currentTarget.id);
  };

  // eslint-disable-next-line
  useEffect(() => {
    getPersonnalData();
    // eslint-disable-next-line
  }, []);

  console.log(personnalData)

  const handleInputChange = (evt) => {
    console.log('name >>', evt.target.name);
    console.log('value >>', evt.target.value);
    const { name, value } = evt.target;

    // console.log(name)
    // console.log(evt.target.files[0])

    if (evt.target.files) {
      console.log(evt.target.files[0]);
    }
    onChangeField({
      [name]: value || [evt.target.files[0]],
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onFormSubmit();
    setOpen(false);
  };

  const handleUpload = (evt) => {
    if (evt.target.files) {
      editProfilBanner(evt.target.files[0]);
      console.log(evt.target.files);
    }
  };

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  return (
    <div className="personnalprofilepage">
      <div className="personnalprofilepage-header">
        <div className="container-modal-banner">
          <Modal
            className="banner-modal"
            size="large"
            onClose={() => setOpen3(false)}
            onOpen={() => setOpen3(true)}
            open={open3}
            trigger={
              <Button className="Button-banner">
                <Icon name="edit" size="large" />
              </Button>
            }
          >
            <Modal.Header className="banner-modal-titre">
              Update banner
            </Modal.Header>
            <Modal.Description>
              {personnalData._banner && (
                <div className="modal-img">
                  <img
                    src={require(`../../assets/${personnalData._banner}`)}
                    alt="lollogo"
                    className="banner-modal-img"
                  />
                </div>
              )}
              <div className="banner-input">
                <label htmlFor="banner" className="banner-file-label">
                  Choose a banner picture:
                  <input
                    type="file"
                    size="60"
                    id="banner"
                    name="banner"
                    accept="image/png, image/jpeg"
                    onChange={handleUpload}
                    className="banner-file-button"
                    aria-label="File browser example"
                  ></input>
                </label>
              </div>
            </Modal.Description>
            <Modal.Actions className="banner-actions">
              <Button
                style={{ marginTop: '2em', textAlign: 'center' }}
                className="banner-buttonData"
                content="ok"
                labelPosition="right"
                icon="checkmark"
                positive
                onClick={() => setOpen3(false)}
              />
              <Button
                style={{ marginTop: '2em', textAlign: 'center' }}
                color="black"
                onClick={() => setOpen3(false)}
                content="Cancel"
                className="banner-buttonData"
              />
            </Modal.Actions>
          </Modal>
        </div>
        <div className="container-banner">
          {personnalData._banner && (
            <img
              src={require(`../../assets/${personnalData._banner}`)}
              alt="lollogo"
              className="banner"
            />
          )}

          {personnalData._avatar && (
            <img src={icon} alt="lollogo" className="avatar" />
          )}
        </div>
        <div className="details">
          <h1>{personnalData._nickname}</h1>
        </div>
      </div>
      <div className="profilepage-body">
        <div className="profilepage-button">
          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            className="modal-info"
            trigger={
              <Button className="button-modal">Update informations</Button>
            }
          >
            <Modal.Header className="modal-info-titre">
              Update informations
            </Modal.Header>
            <Modal.Description>
              <div className="loginpage">
                <Form className="information-form" onSubmit={handleSubmit}>
                  <div>
                    <Form.Input
                      fluid
                      label="Nickname"
                      placeholder="change your nickname"
                      name="nickname"
                      value={modifyPersonnalData.nickname}
                      onChange={handleInputChange}
                      className="information-input"
                    />
                  </div>

                  <div>
                    <Form.Input
                      fluid
                      label="Description"
                      placeholder="change your Description"
                      name="description"
                      value={modifyPersonnalData.description}
                      onChange={handleInputChange}
                      className="information-input"
                    />
                  </div>

                  <div>
                    <Button
                      style={{ marginTop: '2em', textAlign: 'center' }}
                      className="banner-buttonData"
                      type="submit"
                      content="ok"
                      labelPosition="right"
                      icon="checkmark"
                      positive
                    />
                    <Button
                      className="banner-buttonData"
                      style={{ marginTop: '2em', textAlign: 'center' }}
                      color="black"
                      onClick={() => setOpen(false)}
                      content="Cancel"
                    />
                  </div>
                </Form>
              </div>
            </Modal.Description>
          </Modal>
        </div>{' '}
        <h2 className="personnalprofilepage-titre">Description</h2>
        <div>
          <div className="personnalprofilepage-description">
            {personnalData._description}
          </div>
        </div>
        <div className="personnalprofilepage-game">
          {personnalData._games &&
            personnalData._games.map((game) => {
              return (
                <div key={game.game_id}>
                  <h2 className="personnalprofilepage-titre">
                    {game.game_name}
                  </h2>
                  <div className="personnalprofilepage-game-user">
                    <div className="personnalprofilepage-game-user-info">
                      Pseudo : {game.ign.name}
                    </div>
                    <div className="personnalprofilepage-game-user-info">
                      level : {game.ign.summonerLevel}
                    </div>
                    <div className="personnalprofilepage-game-user-info">
                      Rank : {game.stats.tier} / {game.stats.rank}{' '}
                    </div>
                  </div>
                </div>
              );
            })}

          <Modal
            onClose={() => setOpen2(false)}
            onOpen={() => setOpen2(true)}
            open={open2}
            trigger={<Button className="button-modal">Select game</Button>}
            className="modal-game"
          >
            <Modal.Header className="modal-game-titre">
              Select game
            </Modal.Header>
            <Modal.Description className="modal-game-select">
              <Form.Field label="Game" control="select" className="select">
                <option value="ligue of legend">league of legends</option>
              </Form.Field>
            </Modal.Description>
            <Modal.Actions className="modal-game-action">
              <Button
                className="banner-buttonData"
                content="ok"
                labelPosition="right"
                icon="checkmark"
                onClick={() => setOpen2(false)}
                positive
              />
              <Button
                className="banner-buttonData"
                color="black"
                content="Cancel"
                onClick={() => setOpen2(false)}
              />
            </Modal.Actions>
          </Modal>
        </div>
        <h2 className="personnalprofilepage-titre">Created Events</h2>
        <div className="Event-modules">
          <Card.Group className="event-card-group">
            {personnalData._event_created &&
              personnalData._event_created.slice(0, 12).map((event) => {
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
                            Number of players {event._player_count}
                          </div>
                          <div className="LatestEvent-text">
                            Looking for: {event._player_max} player
                          </div>
                          {event.lang.map((lang) => {
                            return <Flag name={lang.icon} key={lang.id}/>;
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
          <div className="LastestEvent-modules">
            {personnalData.has_events &&
              personnalData.has_events.slice(0, 12).map((h_event) => {
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
                            {h_event._starting}
                          </Moment>
                          <div className="LatestEvent-text">
                            Number of players {h_event._player_count}
                          </div>
                          <div className="LatestEvent-text">
                            Looking for: {h_event._player_max} player
                          </div>
                          {h_event.Lang.map((lang) => {
                            return <Flag name={lang.icon} key={lang.id}/>;
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

export default PersonnalProfilePage;
