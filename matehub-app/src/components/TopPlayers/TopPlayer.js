import React from 'react';
import { Icon } from 'semantic-ui-react';
import './style.scss';

const TopPlayer = ({ list }) => {
  return (
    <div className="TopPlayer">
      <h2 className="titre">TopPlayer</h2>
      <div className="TopPlayer-modules">
        {list.map((element) => (
          <a href="/" className="TopPlayer-module" key={element._id}>
            <Icon className="user" size="big" />
            <div>
        <div className="user-text"> pseudo {element._nickname}</div>
        <div className="user-text"> nbr creat event {element._total_events}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopPlayer;
