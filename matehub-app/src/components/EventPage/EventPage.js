import React, { useEffect } from 'react';
import './style.scss';
import { Button, Input, Icon } from 'semantic-ui-react';

const EventPage = ({
  eventData,
  getEventById,
  getApplyToEvent,
  connectedUserId,
  onChangeField,
  applyMessage,
  onApplyAccept,
  onApplyRefuse,
}) => {
  // console.log(eventData._participant);
  // console.log(eventData);

  useEffect(() => {
    getEventById();
  }, []);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    onChangeField({
      [name]: value,
    });
  };

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

        <Input
          label="Apply message"
          name="applyMessage"
          placeholder="a changer"
          onChange={handleInputChange}
          value={applyMessage}
        />
        <Button
          content="Apply to event"
          className="event-apply-btn"
          onClick={handleApplyToEvent}
        />

        {eventData._participant && (
          <div>
            {/* ! Membre de l'événements */}
            <div className="event-members">Event members</div>
            {eventData._participant
              .filter((user) => user.status === 1)
              .map((filteredUser) => (
                <div key={filteredUser.user_id}>
                  <div>{filteredUser.nickname}</div>
                </div>
              ))}
            {/* ! Postulant à l'événement */}
            <div className="event-applicants">Event applicants</div>
            {eventData._participant
              .filter((user) => user.status === 0)
              .map((filteredUser) => (
                <div key={filteredUser.user_id}>
                  <div>{filteredUser.nickname}</div>
                  <Button.Group icon>
                    <Button positive onClick={onApplyAccept}>
                      <Icon name="thumbs up" />
                    </Button>
                    <Button negative onClick={onApplyRefuse}>
                      <Icon name="thumbs down" />
                    </Button>
                  </Button.Group>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventPage;
