import React, { useEffect } from 'react';
import './style.scss';
import {
  Button,
  Input,
  Card,
  Form,
  Container,
  Divider,
  Segment,
  Header,
  Message,
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

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
  getSelectedUser,
  onDeleteEvent,
  applyToEventErrorMessage,
}) => {
  // console.log(eventData._participant);
  console.log(eventData);

  // useEffect(() => {
  //   getEventById();
  // }, []);

  console.log(eventData);

  const handleGetSelectedUser = (evt) => {
    getSelectedUser(evt.currentTarget.id);
  };

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
  
  let rankClass;
          
  if( eventData._creator_stats[0].tier === "IRON"){
    rankClass = "iron"
  }else if (eventData._creator_stats[0].tier === "BRONZE"){
    rankClass = "bronze"
  }else if (eventData._creator_stats[0].tier === "SILVER"){
    rankClass = "silv"
  }else if (eventData._creator_stats[0].tier === "GOLD"){
    rankClass = "gold"
  }else if (eventData._creator_stats[0].tier === "PLATINUM"){
    rankClass = "plat"
  }else if (eventData._creator_stats[0].tier === "DIAMOND"){
    rankClass = "diam"
  } else {
    rankClass = "chal"
  };

  return (
    <div className="eventpage">
      <Container className="eventpage-title">
        <h1>
          Welcome on EVENT page !!!
          {/* {eventData._creator}'s event on {eventData._game_name} */}
        </h1> 
  <h3><span className="span-it">created by</span> <span className="event-creator">{eventData._creator}</span> - <span className="span-it">LoL account :</span> <span> <span className="lol-account">
            {eventData._creator_stats.map((elem) => {
            return elem.summonerName;
          })}</span>
          {' '}-{' '}<span className={`${rankClass}`}>
          {eventData._creator_stats.map((elem) => {
            return elem.tier;
          })}{' '}
          {eventData._creator_stats.map((elem) => {
            return elem.rank;
          })}</span></span></h3>
        <h3>{eventData._vocal}</h3>
      </Container>
      <Container className="eventpage-informations">
        {console.log(eventData._creator_stats)}
        <h2 className="evt-start">
          Start {moment(eventData._starting).format('h:mm a, dddd DD MMM YYYY')}
        </h2>
          <div className="div-descript">
            Description : {eventData._description}
          </div>
        {connectedUserId !== eventData._user_id ? (
          <Form
            onSubmit={handleApplyToEvent}
            className="eventpage-form"
          >
            {applyToEventErrorMessage && (
              <Message
                className="eventpage-apply-error"
                header={applyToEventErrorMessage}
              />
            )}
            <Input
            style={{width: '100%'}}
              icon="send"
              name="applyMessage"
              placeholder="Hey mate, i would love to participate! Check my profile !"
              onChange={handleInputChange}
              value={applyMessage}
            />
            <Button content="Apply to event" className="eventpage-apply-btn" />
          </Form>
        ) : null}
      </Container>

      <Divider />

      {eventData._participant && (
        <div>
          {/* ! Membre de l'événements */}
          <div className="event-members">Event members</div>
          <Card.Group centered>
            {eventData._participant
              .filter((user) => user.status === 1)
              .map((filteredUser) => (
                <Card
                  link
                  key={filteredUser.user_id}
                  className="event-playercard-member"
                >
                  <Card.Content>
                    <Segment.Group>
                      <Header
                        inverted
                        color="teal"
                        className="event-playercard-nickname"
                      >
                        {filteredUser.nickname}
                      </Header>
                      {filteredUser.stats && (
                        <Container>
                          Summoner :{' '}
                          <strong>
                            {filteredUser.stats.summonerName} -{' '}
                            {filteredUser.stats.tier} {filteredUser.stats.rank}
                          </strong>
                        </Container>
                      )}
                    </Segment.Group>
                  </Card.Content>
                  <Card.Content extra>
                    <NavLink
                      id={filteredUser.user_id}
                      to={`/profile/${filteredUser.nickname}`}
                      onClick={handleGetSelectedUser}
                    >
                      <Button inverted content="Profile" />
                    </NavLink>
                    {connectedUserId === eventData._user_id ? (
                      <Button
                        inverted
                        color="red"
                        id={filteredUser.user_id}
                        onClick={handleSelectAndRefuseplayerInEvent}
                        content="Kick"
                      />
                    ) : null}
                  </Card.Content>
                </Card>
              ))}
          </Card.Group>
          <Divider />
          {/* ! Postulant à l'événement */}
          <div className="event-applicants">Event applicants</div>
          <Card.Group centered>
            {eventData._participant
              .filter((user) => user.status === 0)
              .map((filteredUser) => (
                <Card
                  link
                  key={filteredUser.user_id}
                  className="event-playercard"
                  color="teal"
                >
                  <Card.Content>
                    <Segment.Group>
                      <Header
                        inverted
                        color="teal"
                        className="event-playercard-nickname"
                      >
                        {filteredUser.nickname}
                      </Header>
                      {filteredUser.stats && (
                        <Container>
                          Summoner :{' '}
                          <strong>
                            {filteredUser.stats.summonerName} -{' '}
                            {filteredUser.stats.tier} {filteredUser.stats.rank}
                          </strong>
                        </Container>
                      )}
                    </Segment.Group>
                    <Segment inverted>{filteredUser.message}</Segment>
                  </Card.Content>
                  <Card.Content extra>
                    <NavLink
                      id={filteredUser.user_id}
                      to={`/profile/${filteredUser.nickname}`}
                      onClick={handleGetSelectedUser}
                    >
                      <Button inverted color="teal" content="Profile" />
                    </NavLink>
                    {connectedUserId === eventData._user_id ? (
                      <div className="ui two buttons mini event-playercard-apply-btns">
                        <Button
                          inverted
                          color="green"
                          id={filteredUser.user_id}
                          onClick={handleSelectAndAcceptPlayerInEvent}
                          content="Approve"
                        />
                        <Button
                          inverted
                          color="red"
                          id={filteredUser.user_id}
                          onClick={handleSelectAndRefuseplayerInEvent}
                          content="Refuse"
                        />
                      </div>
                    ) : null}
                  </Card.Content>
                </Card>
              ))}
          </Card.Group>
        </div>
      )}
    </div>
  );
};

export default EventPage;
