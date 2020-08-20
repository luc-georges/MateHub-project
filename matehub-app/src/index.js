import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from './containers/AppContainer';
import store from './store/store';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();const eventList = [
  {
    id: 1,
    user_id: 1,
    game_id: 1,
    event_time: '2020-08-22 09:00:00',
    duration: '04:00',
    player_count: 5,
    description: 'Competitif full team',
    status: 0,
    vocal: 'discord.gg/invitenumber',
  },
  {
    id: 2,
    user_id: 2,
    game_id: 2,
    event_time: '2020-08-22 09:00:00',
    duration: '04:00',
    player_count: 2,
    description:
      'En duo Q sur matehub En duo Q sur matehubEn duo Q sur matehubEn duo Q sur matehubEn duo Q sur matehubEn duo Q sur matehub',
    status: 3,
    vocal: 'discord.gg/invitenumber',
  },
  {
    id: 3,
    user_id: 2,
    game_id: 2,
    event_time: '2020-08-22 09:00:00',
    duration: '04:00',
    player_count: 2,
    description: 'En duo Q sur matehub',
    status: 3,
    vocal: 'discord.gg/invitenumber',
  },
  {
    id: 4,
    user_id: 2,
    game_id: 2,
    event_time: '2020-08-22 09:00:00',
    duration: '04:00',
    player_count: 2,
    description: 'En duo Q sur matehub',
    status: 3,
    vocal: 'discord.gg/invitenumber',
  },
  {
    id: 5,
    user_id: 2,
    game_id: 2,
    event_time: '2020-08-22 09:00:00',
    duration: '04:00',
    player_count: 2,
    description: 'En duo Q sur matehub',
    status: 3,
    vocal: 'discord.gg/invitenumber',
  },
];
