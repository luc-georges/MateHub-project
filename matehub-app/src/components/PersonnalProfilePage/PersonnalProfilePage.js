import React, { useEffect } from 'react';
import {
  Button,
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
import uuid from 'react-uuid';
import './style.scss';

const PersonnalProfilePage = ({
  personnalData,
  getPersonnalData,
  onChangeField,
  onFormSubmit,
  modifyPersonnalData,
  editProfilBanner,
  getSelectedEvent,
  onSumInputChangeField,
  sumInputData
}) => {
  // console.log(personnalData);

  const handleSumInputChange = (evt) => {
    const { name, value } = evt.target;
    onSumInputChangeField({
      [name]: value,
    });
  };

  const handleGetSelectedEvent = (evt, data) => {
    // console.log(evt.currentTarget.id);
    getSelectedEvent(evt.currentTarget.id);
  };

  // eslint-disable-next-line
  useEffect(() => {
    getPersonnalData();
    // eslint-disable-next-line
  }, []);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    if (evt.target.files) {
      // console.log(evt.target.files[0]);
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
      // console.log(evt.target.files);
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
          {personnalData._banner ? (
            <div className="modal-img">
              <img
                src={require(`../../assets/${personnalData._banner}`)}
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
        <h2 className="personnalprofilepage-titre homeTitle">Description</h2>
        <div>
          <div className="personnalprofilepage-description">
            {personnalData._description ? (
              <p>{personnalData._description}</p>
            ) : (
              <p className="default-mess">
                You don't have a description yet!!! You can do it by clicking on
                "update informations".
              </p>
            )}
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
                  <Form inverted>
                    <Form.Group widths='equal'>
                      <Form.Input
                        label="Summoner name"
                        name="summonerName"
                        placeholder="Enter your LoL summoner name"
                        onChange={handleSumInputChange}
                        value={sumInputData.summonerName}
                      />
                      <Form.Input
                        label="Region"
                        name="summonerRegion"
                        placeholder="Enter your LoL account region"
                        onChange={handleSumInputChange}
                        value={sumInputData.summonerRegion}
                      />
                    </Form.Group>
                    <Button inverted color="teal" type='submit' content="Send" />
                  </Form>
                  <div>
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
            trigger={
              <Button className="button-modal">Connect Your LoL Account</Button>
            }
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
        <h2 className="personnalprofilepage-titre homeTitle">Created Events</h2>
        <div className="Event-modules">
          <Card.Group className="event-card-group">
            {personnalData._event_created ? (
              personnalData._event_created.slice(0, 12).map((event, index) => {
                let rankClass;

                if (event.rank.slice(0, 4) === 'iron') {
                  rankClass = 'iron';
                } else if (event.rank.slice(0, 6) === 'bronze') {
                  rankClass = 'bronze';
                } else if (event.rank.slice(0, 4) === 'silv') {
                  rankClass = 'silv';
                } else if (event.rank.slice(0, 4) === 'gold') {
                  rankClass = 'gold';
                } else if (event.rank.slice(0, 4) === 'plat') {
                  rankClass = 'plat';
                } else if (event.rank.slice(0, 4) === 'diam') {
                  rankClass = 'diam';
                } else {
                  rankClass = 'chal';
                }
                return (
                  <NavLink
                    key={`C_event${event.event_id}`}
                    className="Event-module"
                    id={event.event_id}
                    to={`/event/${event.event_id}`}
                    onClick={handleGetSelectedEvent}
                  >
                    <div className={`slide-in${index}`}></div>
                    <Card className="event-card">
                      <Card.Content>
                        <Image floated="right" size="mini" src={logolol} />
                        <Card.Header>
                          <span className="nickname">{event.game_name}</span>
                        </Card.Header>
                        <Card.Meta>
                          <br />
                          <span className={`rank ${rankClass}`}>
                            {event.rank}
                          </span>
                        </Card.Meta>
                        <Card.Description className="descript">
                          "
                          {event.description.length > 25
                            ? `${event.description.slice(0, 25)}...`
                            : event.description}
                          "{/* "{element._description}" */}
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <div className="LatestEvent-text">
                          Starting date and time: <br />
                          <span className="starting">
                            <Moment format="MMM DD HH:MM">
                              {event.event_time}
                            </Moment>
                          </span>
                          <div className="LatestEvent-text">
                            Register player(s) now:{' '}
                            <span className="number">{event.player_count}</span>
                          </div>
                          <div className="LatestEvent-text">
                            Looking for:{' '}
                            <span className="number">{event.player_max}</span>{' '}
                            players
                          </div>
                          <span>Lang: </span>
                          {event.lang &&
                            event.lang.map((lang) => {
                              return <Flag name={lang.icon} key={uuid()} />;
                            })}
                          <div className="view-details">
                            GO <Icon name="rocket" />
                          </div>
                        </div>
                      </Card.Content>
                    </Card>
                  </NavLink>
                );
              })
            ) : (
              <p className="default-mess">
                {' '}
                You haven't created an event yet. Do it, it's really fun !!!{' '}
              </p>
            )}
          </Card.Group>
        </div>
        <h2 className="personnalprofilepage-titre homeTitle">
          Event Registered{' '}
        </h2>
        <Card.Group className="event-card-group">
          <div className="Event-modules">
            {personnalData.has_events ? (
              personnalData.has_events.map((h_event) => {
                let rankClasshev;

                if (h_event.rank.slice(0, 4) === 'iron') {
                  rankClasshev = 'iron';
                } else if (h_event.rank.slice(0, 6) === 'bronze') {
                  rankClasshev = 'bronze';
                } else if (h_event.rank.slice(0, 4) === 'silv') {
                  rankClasshev = 'silv';
                } else if (h_event.rank.slice(0, 4) === 'gold') {
                  rankClasshev = 'gold';
                } else if (h_event.rank.slice(0, 4) === 'plat') {
                  rankClasshev = 'plat';
                } else if (h_event.rank.slice(0, 4) === 'diam') {
                  rankClasshev = 'diam';
                } else {
                  rankClasshev = 'chal';
                }
                return (
                  <NavLink
                    key={h_event.event_id}
                    className="Event-module"
                    id={h_event._event_id}
                    to={`/event/${h_event.event_id}`}
                    onClick={handleGetSelectedEvent}
                  >
                    <Card className="event-card">
                      <Card.Content>
                        <Image floated="right" size="mini" src={logolol} />
                        <Card.Header>
                          <span className="nickname">{h_event.game_name}</span>
                        </Card.Header>
                        <Card.Meta>
                          <br />
                          <span className={`rank ${rankClasshev}`}>
                            {h_event.rank}
                          </span>
                        </Card.Meta>
                        <Card.Description className="descript">
                          "
                          {h_event.description.length > 25
                            ? `${h_event.description.slice(0, 25)}...`
                            : h_event.description}
                          "{/* "{element._description}" */}
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <div className="LatestEvent-text">
                          Starting date and time: <br />
                          <span className="starting">
                            <Moment format="MMM DD HH:MM">
                              {h_event.event_time}
                            </Moment>
                          </span>
                          <div className="LatestEvent-text">
                            Register player(s) now:{' '}
                            <span className="number">
                              {h_event.player_count}
                            </span>
                          </div>
                          <div className="LatestEvent-text">
                            Looking for:{' '}
                            <span className="number">{h_event.player_max}</span>{' '}
                            players
                          </div>
                          <span>Lang: </span>
                          {h_event.lang &&
                            h_event.lang.map((lang) => {
                              return <Flag name={lang.icon} key={uuid()} />;
                            })}
                          <div className="view-details">
                            GO <Icon name="rocket" />
                          </div>
                        </div>
                      </Card.Content>
                    </Card>
                  </NavLink>
                );
              })
            ) : (
              <p className="default-mess">
                {' '}
                You are not participating in any events at the moment. What are
                you waiting for?{' '}
              </p>
            )}
          </div>
        </Card.Group>
      </div>
    </div>
  );
};

export default PersonnalProfilePage;
