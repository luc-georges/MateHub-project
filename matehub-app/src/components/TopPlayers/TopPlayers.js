import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react'

const TopPlayers = ({ topUsersList, getSelectedUser, getUser }) => {

  const handleGetSelectedUser = (evt) => {
    getSelectedUser(evt.currentTarget.id);
    getUser();
  };

  return (
    <div className="TopPlayers">
      <h2 className="titre homeTitle">Top players</h2>
      <div className="TopPlayers-modules">
      <Card.Group className="user-card-group">
        {topUsersList.slice(0, 5).map((element,index) => (
      <div className={`slide-in${index}`} key={element._user_id} >

          <NavLink
          id={element._user_id}
          to={`/profile/${element._name}`}
          onClick={handleGetSelectedUser}
          >
          <Card className="user-card">
          <Card.Content>
          <Image
          className="user-image"
          floated='right'
          size='tiny'
          src={element._avatar ? require(`../../assets/${element._avatar}`) : null}
          />
          <Card.Meta className="nickname">{element._name}</Card.Meta>
          <Card.Description >
          Rank : <span className="playerRank">Gold IV</span>
          </Card.Description>
          </Card.Content>
          <Card.Content extra>
          <div >
          Created event:  {element._total_events}
          </div>
          </Card.Content>
          </Card>
          </NavLink>
           
        </div>
        ))}
         </Card.Group>
      </div>
    </div>
  );
};

export default TopPlayers;
