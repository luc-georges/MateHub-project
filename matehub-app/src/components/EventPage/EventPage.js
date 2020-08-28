import React, { useEffect } from 'react';
import './style.scss';

const EventPage = ({ eventData, getEventById }) => {
  useEffect(() => {
    getEventById();
  }, [])
  console.log(eventData);
  return (
    <div className="eventpage">
      <div className="event">
        <div>Event creator : {eventData._creator} </div>
        <div>Event game :</div>
        <div>Event starting time :</div>
      </div>
      
    </div>
  );
};

export default EventPage;
