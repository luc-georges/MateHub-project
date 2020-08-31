import React, { useEffect } from 'react';
import { Button, Header, Modal, Form, Icon } from 'semantic-ui-react';
import './style.scss';
import Moment from 'react-moment';
import logolol from '../../assets/logolol.png';
import icon from '../../assets/test.ico';

const PersonnalProfilePage = ({
  personnalData,
  getPersonnalData,
  onChangeField,
  onFormSubmit,
  modifyPersonnalData,
  editProfilBanner,
}) => {
  // eslint-disable-next-line
  useEffect(() => {
    getPersonnalData();
    // eslint-disable-next-line
  }, []);

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
    <div className="profilepage">
      <div className="profilepage-header">
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
            <Modal.Header>Update</Modal.Header>
            <Modal.Description>
              <Header>banner</Header>
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
                <label htmlFor="banner">Choose a banner picture:</label>
                <input
                  type="file"
                  id="banner"
                  name="banner"
                  accept="image/png, image/jpeg"
                  onChange={handleUpload}
                ></input>
              </div>
            </Modal.Description>
            <Modal.Actions>
              <Button
                style={{ marginTop: '2em', textAlign: 'center' }}
                className="eventData buttonData"
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
              >
                Cancel
              </Button>
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
            trigger={<Button>Update informations</Button>}
          >
            <Modal.Header>Update informations</Modal.Header>
            <Modal.Description>
              <Header>Update</Header>
              <div className="loginpage">
                <Form className="information-form" onSubmit={handleSubmit}>
                  <div>
                    <Form.Input
                      className="form-input"
                      fluid
                      label="Nickname"
                      placeholder="change your nickname"
                      name="nickname"
                      value={modifyPersonnalData.nickname}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <Form.Input
                      className="form-input"
                      fluid
                      label="Description"
                      placeholder="change your Description"
                      name="description"
                      value={modifyPersonnalData.description}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div></div>
                  <Button
                    style={{ marginTop: '2em', textAlign: 'center' }}
                    className="eventData buttonData"
                    type="submit"
                    content="ok"
                    labelPosition="right"
                    icon="checkmark"
                    positive
                  />
                </Form>
              </div>
            </Modal.Description>
            <Modal.Actions>
              <Button
                style={{ marginTop: '2em', textAlign: 'center' }}
                color="black"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
        <div className="profilepage-description">
          <h2>Description</h2>
          <div>{personnalData._description}</div>
        </div>
        <div className="profilepage-game">
          {personnalData._games &&
            personnalData._games.map((game) => {
              return (
                <div key={game.game_id}>
                  <h2>{game.game_name}</h2>
                  <div className="profilepage-game-user">
                    <div>Pseudo : {game.ign.name}</div>
                    <div>level : {game.ign.summonerLevel}</div>
                    <div>
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
            trigger={<Button>Select game</Button>}
          >
            <Modal.Header>Select game</Modal.Header>
            <Modal.Description>
              <Header>Update</Header>
              <Form.Field label="Game" control="select" className="select">
                <option value="ligue of legend">league of legends</option>
              </Form.Field>
            </Modal.Description>
            <Modal.Actions>
              <Button color="black" onClick={() => setOpen2(false)}>
                Cancel
              </Button>
              <Button
                content="ok"
                labelPosition="right"
                icon="checkmark"
                onClick={() => setOpen2(false)}
                positive
              />
            </Modal.Actions>
          </Modal>
        </div>
        <h2>Created Events</h2>
        <div className="LastestEvent-modules">
          {personnalData._event_created &&
            personnalData._event_created.map((event) => {
              return (
                <div
                  key={`C_event${event.event_id}`}
                  className="LastestEvent-module"
                >
                  <img
                    src={logolol}
                    alt="lollogo"
                    className="LastestEvent-module-image"
                  />
                  <div>
                    Date and time{' '}
                    <Moment format="YYYY/MM/DD HH:MM">{event.event_time}</Moment>
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
          {personnalData.has_events &&
            personnalData.has_events.map((h_event) => {
              return (
                <div
                  key={`H_event${h_event.event_id}`}
                  className="LastestEvent-module"
                >
                  <img
                    src={logolol}
                    alt="lollogo"
                    className="LastestEvent-module-image"
                  />
                  <div>
                    Date and time{' '}
                    <Moment format="YYYY/MM/DD HH:MM">
                      {h_event._starting}
                    </Moment>
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

export default PersonnalProfilePage;
