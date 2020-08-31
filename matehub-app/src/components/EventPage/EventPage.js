import React, { useEffect } from 'react';
import './style.scss';
import { Button } from 'semantic-ui-react';

const EventPage = ({
  eventData,
  getEventById,
  getApplyToEvent,
  connectedUserId,
}) => {
  // console.log(eventData._participant);
  // console.log(eventData);

  useEffect(() => {
    getEventById();
  }, []);

  const handleApplyToEvent = () => {
    const applyData = {
      user_id: connectedUserId,
      event_id: eventData._event_id,
    };
    getApplyToEvent(applyData);
  };

  return (
    <div className="eventpage">
      <div className="event">
        <div>Event creator : {eventData._creator} </div>
        <div>Event game :</div>
        <div>Event starting time :</div>

        <Button content="Apply to event" className="event-apply-btn" onClick={handleApplyToEvent} />

        {eventData._participant && (
          <div>
            {/* ! Membre de l'événements */}
            {eventData._participant
              .filter((user) => user.status === 1)
              .map((filteredUser) => (
                <div key={filteredUser.user_id}>
                  <div className="event-members">Event members</div>
                  <div>{filteredUser.nickname}</div>
                </div>
              ))}
            {/* ! Postulant à l'événement */}
            {eventData._participant
              .filter((user) => user.status === 0)
              .map((filteredUser) => (
                <div key={filteredUser.user_id}>
                  <div className="event-applicants">Event applicants</div>
                  <div>{filteredUser.nickname}</div>
                </div>
              ))}
          </div>
        )}
        
      </div>
    </div>
  );
};

export default EventPage;
