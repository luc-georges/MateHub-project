import React from 'react';
import './App.scss';
import 'semantic-ui-css/semantic.min.css';

/* Import components */
import NavBar from '../NavBar/NavBar';
// import EventBar from '../EventBar/EventBar';
import EventBar from '../../containers/EventBarContainer';
import HomePage from '../Homepage/HomePage';
// import RegistrationPage from '../RegistrationPage/RegistrationPage';
import "semantic-ui-css/semantic.min.css";

const eventList = [
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
    description: 'En duo Q sur matehub En duo Q sur matehubEn duo Q sur matehubEn duo Q sur matehubEn duo Q sur matehubEn duo Q sur matehub',
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

function App() {

  return (
    <div className="App">
      <NavBar />
      <HomePage list={eventList} />
      <EventBar />
    </div>
  );
}

export default App;

// PG_URL=postgres://matehub:matehub@localhost:5432/matehub
