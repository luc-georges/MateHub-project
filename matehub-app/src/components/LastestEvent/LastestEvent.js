import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
import logolol from '../../assets/logolol.png';
import Moment from 'react-moment';
import { Card, Image, Flag, Icon } from 'semantic-ui-react';
import moment from 'moment';
const LastestEvent = ({ list, getSelectedEvent, getEventById }) => {
  const handleGetSelectedEvent = (evt, data) => {
    // console.log(evt.currentTarget.id);
    getSelectedEvent(evt.currentTarget.id);
    getEventById();
  };
  const d = new Date();

  console.log(d)
  const filteredLatestEvents = list.filter((date=>{
    return new Date(date._starting).getTime() >= d.getTime();
  })) 
  console.log("filtered list: ",filteredLatestEvents)
  return (
    <div className="LastestEvent-cards">
      <h2 className="titre homeTitle">Lastest event</h2>

      <Card.Group className="event-card-group" centered>
        {filteredLatestEvents.slice(0, 10).map((element, index) => {
          let rankClass;
          
          if( element._rank.slice(0,4) === "iron"){
            rankClass = "iron"
          }else if (element._rank.slice(0,6) === "bronze"){
            rankClass = "bronze"
          }else if (element._rank.slice(0,4) === "silv"){
            rankClass = "silv"
          }else if (element._rank.slice(0,4) === "gold"){
            rankClass = "gold"
          }else if (element._rank.slice(0,4) === "plat"){
            rankClass = "plat"
          }else if (element._rank.slice(0,4) === "diam"){
            rankClass = "diam"
          } else {
            rankClass = "chal"
          };

          return (
            <NavLink
              key={element._event_id}
              // Laisser le champs id sur l'élément cliquable
              // ca sert au lien de redirect vers la page de l'event
              id={element._event_id}
              to={`/event/${element._event_id}`}
              onClick={handleGetSelectedEvent}
            >
              <div className={`slide-in${index}`}>
                <Card className="event-card">
                  <Card.Content>
                    <Image floated="right" size="mini" src={logolol} />

                    <Card.Header>{element.game_name}</Card.Header>

          <Card.Meta ><span className="nickname">{element._creator}</span><br /><span className={`rank ${rankClass}`}>{element._rank}</span></Card.Meta>
                  {/* <Segment inverted>{element._description}</Segment> */}
                    <Card.Description className="descript">                    
                    "{element._description.length > 25
                      ? `${element._description.slice(0, 25)}...`
                      : element._description}"{/* "{element._description}" */}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="LatestEvent-text">
                      Starting date and time:{' '} <br />
                      <span className="starting">
                      
                        {moment(element._starting).format("YYYY/MM/DD HH:MM")}
                      </span>
                      <div className="LatestEvent-text">
                        Register player(s) now: <span className="number">{element._player_count}</span>
                      </div>
                      <div className="LatestEvent-text">
                        Looking for: <span className="number">{element._player_max}</span> players
                      </div>
                      <span>Lang: </span>
                      {element._langs && element._langs.map((lang) => {
                        return <Flag name={lang.icon} />;
                      })}
                      <div className="view-details">GO{" "}<Icon name="rocket"/></div>
                    </div>
                  </Card.Content>
                </Card>
              </div>
            </NavLink>
          );
                    })}
      </Card.Group>
    </div>
  );
};
export default LastestEvent;
