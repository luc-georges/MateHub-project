import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import { Card, Image } from 'semantic-ui-react'

const TopPlayers = ({ topUsersList, getSelectedUser, getUser }) => {
  // const [userid, setUserId] = useState();

  // console.log(getSelectedUser);
  const handleGetSelectedUser = (evt) => {
    getSelectedUser(evt.currentTarget.id);
    getUser();
  };

  return (
    <div className="TopPlayers">
      <h2 className="titre homeTitle">TopPlayers</h2>
      <div className="TopPlayers-modules">
      <Card.Group className="user-card-group">
        {topUsersList.map((element,index) => (
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
