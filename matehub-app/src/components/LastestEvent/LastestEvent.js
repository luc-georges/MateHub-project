import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
import logolol from '../../assets/Webp.net-resizeimage.png';
import { Card, Image, Flag, Icon } from 'semantic-ui-react';
import moment from 'moment';
import uuid from "react-uuid";
import './style.scss';

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
          
          if( element._rank.slice(0,4) === "Iron"){
            rankClass = "iron"
          }else if (element._rank.slice(0,6) === "Bronze"){
            rankClass = "bronze"
          }else if (element._rank.slice(0,4) === "Silv"){
            rankClass = "silv"
          }else if (element._rank.slice(0,4) === "Gold"){
            rankClass = "gold"
          }else if (element._rank.slice(0,4) === "Plat"){
            rankClass = "plat"
          }else if (element._rank.slice(0,4) === "Diam"){
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
                        {console.log(moment.locale())}
                        {moment.parseZone(element._starting).format('YYYY/MM/DD h:mm a')}
                      </span>
                      <div className="LatestEvent-text">
                        Event member(s) : <span className="number">{element._player_count}</span>
                      </div>
                      <div className="LatestEvent-text">
                        Looking for : <span className="number">{element._player_max}</span> players
                      </div>
                      <span>Lang: </span>
                      {element._langs && element._langs.map((lang) => {
                        return <Flag name={lang.icon} key={`${uuid()}`}/>;
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
