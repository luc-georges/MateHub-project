import React, { useEffect } from 'react';
import './style.scss';
import { Button, Input } from 'semantic-ui-react';

const EventPage = ({
  eventData,
  getEventById,
  getApplyToEvent,
  connectedUserId,
  onChangeField,
  applyMessage,
  onApplyAccept,
  onApplyRefuse,
  selectPlayerToAcceptOrRefuseInEvent,
  onDeleteEvent
}) => {
  // console.log(eventData._participant);

  useEffect(() => {
    getEventById();
  }, []);

  console.log(eventData);

  const handleSelectPlayerToAcceptOrRefuseInEvent = (evt, data) => {
    console.log(evt);
    console.log(data);
    selectPlayerToAcceptOrRefuseInEvent(evt.target.id);
  };

  const handleSelectAndAcceptPlayerInEvent = (evt, data) => {
    handleSelectPlayerToAcceptOrRefuseInEvent(evt, data);
    onApplyAccept();
  };

  const handleSelectAndRefuseplayerInEvent = (evt, data) => {
    handleSelectPlayerToAcceptOrRefuseInEvent(evt, data);
    onApplyRefuse();
  };

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
        <Button
          negative
          content="delete event"
          onClick={onDeleteEvent}
        />
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
                  <Button
                    id={filteredUser.user_id}
                    negative
                    onClick={handleSelectAndRefuseplayerInEvent}
                    icon="thumbs down"
                  />
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
                    <Button
                      id={filteredUser.user_id}
                      positive
                      onClick={handleSelectAndAcceptPlayerInEvent}
                      icon="thumbs up"
                    />
                    <Button
                      id={filteredUser.user_id}
                      negative
                      onClick={handleSelectAndRefuseplayerInEvent}
                      icon="thumbs down"
                    />
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
