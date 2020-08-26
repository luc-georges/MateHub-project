import React, { useEffect } from 'react';
import './style.scss';
import { Button, Header, Modal, Form } from 'semantic-ui-react';
// import Banner from '../../assets/LoL-Banner.png';

const ProfilePage = ({ userData, getUser }) => {
    // eslint-disable-next-line
    useEffect(() => {
      getUser();
      // eslint-disable-next-line
    }, []);

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  // console.log(userData);
  // console.log(data._user_id);
  // console.log(ownProps.match);

  return (
    <div className="profilepage">
      <div className="profilepage-header">

        {/* {data._games.map((game) => {
          return console.log(game);
        })} */}

        <h1>{userData._nickname}</h1>
        <div>age</div>

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
              <div>list event</div>
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

          <Modal
            onClose={() => setOpen2(false)}
            onOpen={() => setOpen2(true)}
            open={open2}
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
              <label for="banner">Choose a banner picture:</label>

              <input
                type="file"
                id="banner"
                name="banner"
                accept="image/png, image/jpeg"
              ></input>
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
        <div className="profilepage-description">
          <h2>Description</h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
            sem ante. Pellentesque vitae sollicitudin erat. Aliquam lacinia nisi
            eu dui bibendum condimentum. Suspendisse sed ante egestas, semper
            leo id, tempus libero. Proin in suscipit purus. Quisque sit amet
            sollicitudin sapien.
          </div>
        </div>
        <div className="profilepage-game">
          <h2>Game</h2>
          <div className="profilepage-game-user">
            <div>game name</div>
            <div>game ranking</div>
          </div>
          <div className="profilepage-game-event">
            <div>starting</div>
          </div>
          <Modal
            onClose={() => setOpen3(false)}
            onOpen={() => setOpen3(true)}
            open={open3}
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
              <Button color="black" onClick={() => setOpen3(false)}>
                Cancel
              </Button>
              <Button
                content="ok"
                labelPosition="right"
                icon="checkmark"
                onClick={() => setOpen3(false)}
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

export default ProfilePage;
