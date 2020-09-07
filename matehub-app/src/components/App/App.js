import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// import { Grid, Image, GridRow, GridColumn,Sidebar, Menu , Segment,Icon, Header} from 'semantic-ui-react'
/**
 * Import css
 */
import './App.scss';
import 'semantic-ui-css/semantic.min.css';

/* Import components */
import NavBar from '../../containers/NavBarContainer';
import EventBar from '../../containers/EventBarContainer';
import HomePage from '../../containers/HomePageContainer';
import RegistrationPage from '../../containers/RegistrationPageContainer';
import LoginPage from '../../containers/LoginPageContainer';
import ContactPage from '../ContactPage/ContactPage';
import EventPage from '../../containers/EventPageContainer';
import CreateEventPage from '../../containers/CreateEventPageContainer';
import SearchEventPage from '../../containers/searchEventPageContainer';
import ProfilePage from '../../containers/ProfilePageContainer';
import PersonnalProfilePage from '../../containers/PersonnalProfilePageContainer';
import GettingStarted from '../GettingStarted/GettingStarted';
import NotFound from '../NotFound/NotFound';
/**
 * composant principale de l'application
 * @component
 * @param {Object} param0
 */
function App({
  getAllEvents,
  getTopUsers,
  checkAuth,
  getNews,
  isLogged,
}) {
  // eslint-disable-next-line
  useEffect(() => {
    getNews();
    getAllEvents();
    getTopUsers();
    checkAuth();
    // getUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage className="main" />
        </Route>
        <Route exact path="/profile/:name" component={ProfilePage} />
        <Route
          exact
          path="/personnalprofile"
          component={PersonnalProfilePage}
        />
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/registration">
          {/* {registered ? <Redirect to="/login" /> : <RegistrationPage />} */}
          <RegistrationPage />
        </Route>
        <Route exact path="/login">
          {isLogged ? <Redirect to="/personnalprofile" /> : <LoginPage />}
        </Route>
        {/* <Route exact path="/event/:id" component={EventPage} /> */}
        <Route exact path="/event/:id">
          {isLogged ? <EventPage /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/createevent">
          {isLogged ? <CreateEventPage /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/searchevent">
          <SearchEventPage />
        </Route>
        <Route exact path="/gettingstarted">
          <GettingStarted />
        </Route>
        <Route component={NotFound} />
      </Switch>

      <div className="eventbar">
        <EventBar />
      </div>
    </div>
  );
}

export default App;

// PG_URL=postgres://matehub:matehub@localhost:5432/matehub
