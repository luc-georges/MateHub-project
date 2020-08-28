import React, { useEffect } from 'react';
import './style.scss';
import { Button } from 'semantic-ui-react';

const EventPage = ({ eventData, getEventById, getApplyToEvent, connectedUserId }) => {
  useEffect(() => {
    getEventById();
  }, []);

  const handleApplyToEvent = () => {
    const applyData = {
      user_id: connectedUserId,
      event_id: eventData._event_id,
    };
    getApplyToEvent(applyData);
  }

  console.log(eventData);
  return (
    <div className="eventpage">
      <div className="event">
        <div>Event creator : {eventData._creator} </div>
        <div>Event game :</div>
        <div>Event starting time :</div>
      <Button content="Apply to event" onClick={handleApplyToEvent}/>
      </div>
    </div>
  );
};

export default EventPage;
