import React from 'react';
import { Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const TopPlayers = ({ topUsersList, getSelectedUser }) => {
  // const [userid, setUserId] = useState();

  // console.log(getSelectedUser);
  const handleGetSelectedUser = (evt) => {
    getSelectedUser(evt.currentTarget.id);
  };

  return (
    <div className="TopPlayers">
      <h2 className="titre">TopPlayers</h2>
      <div className="TopPlayers-modules">
        {topUsersList.map((element) => (
          <NavLink
            id={element._user_id}
            to={`/profile/${element._name}`}
            key={element._user_id}
            onClick={handleGetSelectedUser}
          >
            <div href="/" className="TopPlayers-module">
              <Icon className="user" size="big" />
              <div>
                <div className="user-text"> pseudo {element._name}</div>
                <div className="user-text">
                  {' '}
                  nbr creat event {element._total_events}
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default TopPlayers;
