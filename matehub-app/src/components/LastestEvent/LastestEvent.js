import React from 'react';
import { NavLink } from 'react-router-dom';
import logolol from '../../assets/logolol.png';
import Moment from 'react-moment';
import { Button, Card, Image,Flag } from 'semantic-ui-react'
import './style.scss';

const LastestEvent = ({ list, getSelectedEvent }) => {
  const handleGetSelectedEvent = (evt, data) => {
    // console.log(evt.currentTarget.id);
    getSelectedEvent(evt.currentTarget.id);
  };
  const flagRenderer = (item) => <Flag name={item} />
  return (
    <div className="LastestEvent-cards">
      <h2 className="titre">Lastest event</h2>

      <Card.Group className="event-card-group" centered>
        {list.map((element) => {
          return (
            
              <NavLink
               
                key={element._event_id}
                // Laisser le champs id sur l'élément cliquable
                // ca sert au lien de redirect vers la page de l'event
                id={element._event_id}
                to={`/event/${element._event_id}`}
                onClick={handleGetSelectedEvent}
                >
            <Card className="event-card">
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={logolol}
                />
                
              <Card.Header>{element.game_name}</Card.Header>

              <Card.Meta>{element._creator}</Card.Meta>
              <Card.Description>
              {element._description}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <div className="LatestEvent-text">
                  Date and time{' '}
                  <Moment format="YYYY/MM/DD HH:MM">{element._starting}</Moment>
                  <div className="LatestEvent-text">
                  Number of players {element._player_count}
                </div>
                <div className="LatestEvent-text">
                  Looking for:  {element._player_max} player
                </div>
                {element._langs.map((lang)=>{
                     return (
                    <Flag name={lang.icon} />
                  )
             })}
                <div className="view-details">view details</div>
                </div>
            </Card.Content>
          </Card>
                </NavLink>
              
              
               
              );
            })}
            </Card.Group>
    </div>
  );
};
export default LastestEvent;
