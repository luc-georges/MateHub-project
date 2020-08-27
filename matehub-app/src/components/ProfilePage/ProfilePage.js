import React, { useEffect, useState } from 'react';
import './style.scss';
import { Button, Header, Modal, Form } from 'semantic-ui-react';
// import Banner from '../../assets/LoL-Banner.png';
import Moment from 'react-moment';

const ProfilePage = ({ userData, getUser, connectedUserId }) => {
    // eslint-disable-next-line
    useEffect(() => {
      getUser();
      // eslint-disable-next-line
    }, []);

  const [open, setOpen] = React.useState(false);
  const [open2, setopen2] = React.useState(false);

  return (
    <div className="profilepage">
      <div className="profilepage-header">

        <h1>{userData._nickname}</h1>
      <div>{userData._age}</div>

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
      <div>{userData._event_created.map((event)=>{
        return(
        <div key={event.game_id}>
          <div>Game: {event.game_name}</div>
          <div>Event time: <Moment format="YYYY/MM/DD HH:MM">{event.event_time}</Moment></div>
          <div>Durtion: {event.duration}</div>
          <div>Player count: {event.player_count}</div>
          <div>Player max: {event.player_max}</div>
          <div>Description: {event.description}</div>
        </div>
        );
      })};</div>
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
            onClose={() => setopen2(false)}
            onOpen={() => setopen2(true)}
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
              <Button color="black" onClick={() => setopen2(false)}>
                Cancel
              </Button>
              <Button
                content="ok"
                labelPosition="right"
                icon="checkmark"
                onClick={() => setopen2(false)}
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
