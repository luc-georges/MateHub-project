import React, { useEffect } from 'react';
import './style.scss';
import { Button, Header, Modal, Form } from 'semantic-ui-react';
// import Banner from '../../assets/LoL-Banner.png';

const PersonnalProfilePage = ({ personnalData, getPersonnalData }) => {

  // eslint-disable-next-line
  useEffect(() => {
    getPersonnalData();
    // eslint-disable-next-line
  }, []);

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  return (
    <div className="profilepage">
      <div className="profilepage-header">  
            <img src={`${personnalData._banner}`} alt="" />
              <img src={`${personnalData._avatar}`} alt="" />

        <h1>{personnalData._nickname}</h1>
        <div>age</div>
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
              <Form.Input
                fluid
                label="Nickname"
                placeholder="change your nickname"
              />
              <Form.Input fluid label="years" placeholder="how old are you" />
              <label htmlFor="banner">Choose a banner picture:</label>

              <input
                type="file"
                id="banner"
                name="banner"
                accept="image/png, image/jpeg"
              ></input>
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
          <div>{personnalData.description}</div>
        </div>
        <div className="profilepage-game">
          {personnalData._games &&
            personnalData._games.map((game) => {
              return (
                <div key= {game.id} >
                  <h2>{game.game_name}</h2>
                  <div className="profilepage-game-user">
                    <div>game ranking</div>
                  </div>
                  <div className="profilepage-game-event">
                    <div>starting</div>
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
        <div className="profilepage-history-"></div>
        <h2>Event history</h2>
        <div>game name</div>
        <div>starting</div>
        <div>creator</div>
      </div>
    </div>
  );
};

export default PersonnalProfilePage;
