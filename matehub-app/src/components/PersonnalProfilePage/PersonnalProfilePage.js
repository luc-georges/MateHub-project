import React, { useEffect } from 'react';
import './style.scss';
import {
  Button,
  Modal,
  Form,
  Icon,
  Card,
  Image,
  Flag,
  Select,
} from 'semantic-ui-react';
import logolol from '../../assets/logolol.png';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import uuid from 'react-uuid';
import './style.scss';

const PersonnalProfilePage = ({
  personnalData,
  getPersonnalData,
  onChangeField,
  onFormSubmit,
  modifyPersonnalData,
  editProfilBanner,
  editProfilAvatar,
  getSelectedEvent,
  onSumInputChangeField,
  sumInputData,
  onGetSummonerInfo,
  summonerStats,
  onValidateAccount,
}) => {
  // console.log(personnalData);

  const handleGetSummonerInfo = () => {
    onGetSummonerInfo();
  };

  const handleValidateAccount = () => {
    onValidateAccount();
    setOpenConnectLolAccount(false);
  };

  const handleSumInputChange = (evt) => {
    const { name, value } = evt.target;
    onSumInputChangeField({
      [name]: value,
    });
  };

  const handleSelectSumInputChange = (evt, data) => {
    const { name, value } = data;
    onSumInputChangeField({
      [name]: value,
    });
  }

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
    evt.preventDefault();
    console.log('name >>', evt.target.name);
    console.log('value >>', evt.target.value);
    const { name, value } = evt.target;
    // console.log(name)
    // console.log(evt.target.files[0])

    if (evt.target.files) {
      console.log(evt.target.files[0]);
      onChangeField({
        [name]: [evt.target.files[0]],
      });
    } else {
      onChangeField({
        [name]: value,
      });
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onFormSubmit();
    setOpen(false);
  };

  const handleUpload = (evt) => {
    evt.preventDefault();
    if (evt.target.files) {
      editProfilBanner(evt.target.files[0]);
      // console.log(evt.target.files);
    }
  };
  const handleUpload2 = (evt) => {
    evt.preventDefault();
    if (evt.target.files) {
      editProfilAvatar(evt.target.files[0]);
      console.log(evt.target.files);
    }
  };
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const [openConnectLolAccount, setOpenConnectLolAccount] = React.useState(
    false
  );

  const regionOptions = [
    { key: 'BR1', text: 'BR', value: 'BR1' },
    { key: 'EUN1', text: 'EUN', value: 'EUN1' },
    { key: 'EUW1', text: 'EUW', value: 'EUW1' },
    { key: 'JP1', text: 'JP', value: 'JP1' },
    { key: 'KR', text: 'KR', value: 'KR' },
    { key: 'LA1', text: 'LA1', value: 'LA1' },
    { key: 'LA2', text: 'LA2', value: 'LA2' },
    { key: 'NA1', text: 'NA', value: 'NA1' },
    { key: 'OC1', text: 'OC', value: 'OC1' },
    { key: 'TR1', text: 'TR', value: 'TR1' },
    { key: 'RU', text: 'RU', value: 'RU' },
  ];

  //Filtering and sorting created event
  let sortedPerso_created;
  let filteredPerso_created;
  let filteredPast_history;
  const d = new Date();
  if (personnalData._event_created) {
    sortedPerso_created = personnalData._event_created.sort(function (a, b) {
      return moment(a.event_time) - moment(b.event_time);
    });
    filteredPerso_created = sortedPerso_created.filter((data) => {
      return new Date(data.event_time).getTime() >= d.getTime();
    });
    // past event histoy
    filteredPast_history = sortedPerso_created.filter((hist) => {
      return new Date(hist.event_time).getTime() <= d.getTime();
    });
  }
  let sortedPerso_registered;
  let filteredPerso_registered;
  //Filtering and sorting event registered
  if (personnalData.has_events) {
    sortedPerso_registered = personnalData.has_events.sort(function (a, b) {
      return moment(a.event_time) - moment(b.event_time);
    });

    filteredPerso_registered = sortedPerso_registered.filter((data) => {
      return new Date(data.event_time).getTime() >= d.getTime();
    });
  }

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
                  </Modal.Description>
              <div className="testouillage">
                <div className="banner-input">
                  <label htmlFor="banner" className="banner-file-label">
                    <input
                      type="file"
                      size="60"
                      id="banner"
                      name="banner"
                      accept="image/png, image/jpeg"
                      onChange={handleUpload}
                      className="custom-file-input"
                      aria-label="File browser example"
                    ></input>
                  </label>
                </div>
              <Modal.Actions className="banner-actions">
                <Button
                  hidden
                  style={{ marginTop: '2em', textAlign: 'center' }}
                  className="banner-buttonData"
                  content="ok"
                  labelPosition="right"
                  icon="checkmark"
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
              </div>
          </Modal>
        </div>
        <div className="container-modal-avatar">
          <Modal
            className="avatar-modal"
            size="large"
            onClose={() => setOpen1(false)}
            onOpen={() => setOpen1(true)}
            open={open1}
            trigger={
              <Button className="Button-avatar">
                <Icon name="edit" size="large" />
              </Button>
            }
          >
            <Modal.Header className="avatar-modal-titre">
              Update avatar
            </Modal.Header>
            <Modal.Description>
              {personnalData._avatar && (
                <div className="modal-img">
                  <img
                    src={require(`../../assets/${personnalData._avatar}`)}
                    alt="lollogo"
                    className="avatar-modal-img"
                  />
                </div>
              )}

              <div className="avatar-input">
                <label htmlFor="avatar" className="avatar-file-label">
                  Choose a avatar picture:
                  <input
                    type="file"
                    size="60"
                    id="avatar"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={handleUpload2}
                    className="avatar-file-button"
                    aria-label="File browser example"
                  ></input>
                </label>
              </div>
            </Modal.Description>
            <Modal.Actions className="avatar-actions">
            <Button
                hidden
                style={{ marginTop: '2em', textAlign: 'center' }}
                className="avatar-buttonData"
                content="ok"
                labelPosition="right"
                icon="checkmark"
                onClick={() => setOpen1(false)}
              />
              <Button
                style={{ marginTop: '2em', textAlign: 'center' }}
                color="black"
                onClick={() => setOpen1(false)}
                content="Cancel"
                className="avatar-buttonData"
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

<div className="details">
          {personnalData._avatar ? (
            <img
              src={require(`../../assets/${personnalData._avatar}`)}
              alt="lollogo"
              className="avatar"
            />
          ):(
            <img
              src={require(`../../assets/avatar1.jpg`)}
              alt="lollogo"
              className="avatar"
            />
          ) }
          <h1>{personnalData._nickname}</h1>
          <div className="test-description">{personnalData._description}</div>
        </div>
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
              <div className="modal-info-content">
                <Form
                  inverted
                  className="information-form"
                  onSubmit={handleSubmit}
                >
                  <Form.Input
                    fluid
                    label="Nickname"
                    placeholder="New nickname"
                    name="nickname"
                    value={modifyPersonnalData.nickname}
                    onChange={handleInputChange}
                    className="information-input"
                  />

                  <Form.Input
                    fluid
                    label="Description"
                    placeholder="New description"
                    name="description"
                    value={modifyPersonnalData.description}
                    onChange={handleInputChange}
                    className="information-input"
                  />

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
        <h2 className="title-profile-small">Playing :</h2>
        {!personnalData._games && (
          <Button
            className="button-modal"
            onClick={() => {
              setOpenConnectLolAccount(!openConnectLolAccount);
            }}
          >
            {openConnectLolAccount ? 'Cancel' : 'Connect Your LoL Account'}
          </Button>
        )}
        {openConnectLolAccount ? (
          <div>
            {summonerStats.summonerName && (
              <Form onSubmit={handleValidateAccount}>
                <h2>Are u {summonerStats.summonerName} ?</h2>
                <Button.Group>
                  <Button color="green" type="submit" content="Yes" />
                  <Button color="red" content="No" />
                </Button.Group>
              </Form>
            )}
            <Form inverted onSubmit={handleGetSummonerInfo}>
              <Form.Group widths="equal">
                <Form.Input
                  label="Summoner name"
                  name="summonerName"
                  placeholder="Enter your LoL summoner name"
                  onChange={handleSumInputChange}
                  value={sumInputData.summonerName}
                />
                <Form.Input
                  label="Region"
                  control={Select}
                  options={regionOptions}
                  name="summonerRegion"
                  placeholder="Enter your LoL account region"
                  onChange={handleSelectSumInputChange}
                  value={sumInputData.summonerRegion}
                />
              </Form.Group>
              <Button inverted color="teal" type="submit" content="Send" />
            </Form>
          </div>
        ) : null}
        <div className="personnalprofilepage-game">
        {personnalData._games &&
            personnalData._games.map((game) => {
              return (
               
                <div className="game-container" key={game.id}>
                   {console.log(game)}
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
        <h2 className="personnalprofilepage-titre homeTitle">Created Events</h2>
        <div className="Event-modules">
          <Card.Group className="event-card-group">
            {personnalData._event_created ? (
              filteredPerso_created.slice(0, 10).map((event, index) => {
                let rankClass;
                //console.log(event.rank);
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
                            {moment
                              .parseZone(event.event_time)
                              .format('YYYY/MM/DD h:mm a')}
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
              filteredPerso_registered.map((h_event) => {
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
                    key={`H_event${h_event.event_id}`}
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
                            {moment
                              .parseZone(h_event.event_time)
                              .format('YYYY/MM/DD h:mm a')}
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
                              return <Flag name={lang.icon} />;
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
        <h2 className="personnalprofilepage-titre homeTitle">Event History </h2>
        <Card.Group className="event-card-group">
          <div className="Event-modules">
            {personnalData._event_created ? (
              filteredPast_history.map((h_event) => {
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
                            {moment
                              .parseZone(h_event.event_time)
                              .format('YYYY/MM/DD h:mm a')}
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
