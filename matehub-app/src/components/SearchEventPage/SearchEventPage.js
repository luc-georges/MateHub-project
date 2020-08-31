import React from 'react';
import './style.scss';
import { Input, Form, Button } from 'semantic-ui-react';
import Moment from 'react-moment';

const SearchEventPAge = ({list, getSelectedEvent}) => {
  
  const handleGetSelectedEvent = (evt, data) => {
    // console.log(evt.currentTarget.id);
    getSelectedEvent(evt.currentTarget.id);
  };

  <div className="SearchEventPage">
    <form className="SearchByName">
      <h1 style={{ marginBottom: '1em', margin: '0 auto 1em auto' }}>
        Event research{' '}
      </h1>
      <Input icon="search" placeholder="Search for an event by creator name" />
    </form>

    <form className="filter">
      <Form.Field label="Game" control="select" className="select">
        <option value="ligue of legend">league of legends</option>
      </Form.Field>

      <Form.Field label="Players" control="select" className="select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="undefined">undefined</option>
      </Form.Field>

      <Form.Field label="Duration" control="select" className="select">
        <option value="1">0h-2h</option>
        <option value="2">2h-5h</option>
        <option value="3">5h-10h</option>
        <option value="4">10h+</option>
        <option value="undefined">undefined</option>

      </Form.Field>
      

      <div className="button">
      <Form.Field
        control={Button}
        style={{ marginTop: '1em', textAlign: 'center' }}
      >
        Apply filters
      </Form.Field>

      <Form.Field
        control={Button}
        style={{ marginTop: '1em', textAlign: 'center' }}
      >
        Reset filters
      </Form.Field>
      </div>

    </form>

    <h2 style={{ marginBottom: '1em', margin: '0 auto 1em auto' }}>
      Search Result
    </h2>
    <div className="Event-modules">
        {list.map((element) => {
          return (
            <NavLink
              className="Event-module"
              key={element._event_id}
              // Laisser le champs id sur l'élément cliquable
              // ca sert au lien de redirect vers la page de l'event
              id={element._event_id}
              to={`/event/${element._event_id}`}
              onClick={handleGetSelectedEvent}
            >
              <img
                src={logolol}
                alt="lollogo"
                className="Event-module-image"
              />
                <div className="Event-text">
                  Game {element.game_name} - Name {element._creator}
                </div>
                <div className="Event-text">
                  {' '}
                  Date and time{' '}
                  <Moment format="YYYY/MM/DD HH:MM">{element._starting}</Moment>
                </div>
                <div className="Event-text">
                  Number of players {element._player_count}
                </div>
            </NavLink>
          );
        })}
      </div>
  </div>
};

export default SearchEventPAge;
