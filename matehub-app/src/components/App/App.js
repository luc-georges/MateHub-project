<<<<<<< HEAD
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

=======
import React, {useEffect} from 'react';
>>>>>>> feature/data-from-reducer-to-homepage
import './App.scss';
import 'semantic-ui-css/semantic.min.css';

/* Import components */
import NavBar from '../NavBar/NavBar';
import EventBar from '../../containers/EventBarContainer';
import HomePage from '../Homepage/HomePage';
<<<<<<< HEAD
import RegistrationPage from '../RegistrationPage/RegistrationPage';

=======
// import RegistrationPage from '../RegistrationPage/RegistrationPage';
import "semantic-ui-css/semantic.min.css";
>>>>>>> feature/data-from-reducer-to-homepage
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

<<<<<<< HEAD
function App({ getEvents }) {
=======
function App({getEvents}) {
>>>>>>> feature/data-from-reducer-to-homepage
  // eslint-disable-next-line
  useEffect(() => {
    getEvents();
    // eslint-disable-next-line
  }, []);
<<<<<<< HEAD
=======
  // console.log(list)
>>>>>>> feature/data-from-reducer-to-homepage
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage list={eventList} />
        </Route>
        <Route exact path="/registration">
          <RegistrationPage />
        </Route>
      </Switch>
      <EventBar />
    </div>
  );
}

export default App;

// PG_URL=postgres://matehub:matehub@localhost:5432/matehub
