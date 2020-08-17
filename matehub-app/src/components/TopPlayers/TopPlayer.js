import React from 'react';
import { Icon } from 'semantic-ui-react';

const TopPlayer = () => {
  return (
    <div className="TopPlayer">
      <h2>TopPlayer</h2>
      <div className="TopPlayer-module">
        <a href="/">
          <Icon className="user" size="large" />
          <p>pseudo</p>
          <p>nbr creat event</p>
        </a>
      </div>
    </div>
  );
};

export default TopPlayer;
