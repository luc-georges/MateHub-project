import React from 'react';
import './style.scss';
import { Input, Form, Button, Card, Select } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const SearchEventPage = ({
  list,
  getSelectedEvent,
  onChangeField,
  searchEventData,
  onFormSubmit,
}) => {
  // Options for select input
  const selectGameOptions = [
    {
      key: '1',
      text: 'League of Legends',
      value: 1,
    },
    // {
    //   key: '2',
    //   text: 'CS : Global Offensive',
    //   value: 2,
    // },
  ];

  const durationOptions = [
    { key: '', text: 'null', value: null },
    { key: '30mn to 2h', text: '30mn to 2h', value: '-2' },
    { key: '2h to 5h', text: '2h to 5h', value: '2-5' },
    { key: 'more than 5h', text: 'more than 5h', value: '5+' },
  ];

  const maxPlayerOptions = [
    { key: '', text: 'null', value: null },
    { key: '1', text: '1', value: 1 },
    { key: '2', text: '2', value: 2 },
    { key: '3', text: '3', value: 3 },
    { key: '4', text: '4', value: 4 },
    { key: '5', text: '5', value: 5 },
  ];

  const handleGetSelectedEvent = (evt, data) => {
    // console.log(evt.currentTarget.id);
    getSelectedEvent(evt.currentTarget.id);
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    onChangeField({
      [name]: value,
    });
  };

  const handleSelectInputChange = (evt, data) => {
    // console.log('objet data entier :', data);
    const { name, value } = data;
    onChangeField({
      [name]: value,
    });
  };

  return (
    <div className="SearchEventPage">
      <Form className="SearchByName" onSubmit={onFormSubmit}>
        <h1 style={{ marginBottom: '1em', margin: '0 auto 1em auto' }}>
          Event research{' '}
        </h1>
        <Input
          icon="search"
          placeholder="Search for an event by creator name"
        />

        {/* <Form.Input
          name="game_id"
          label="Select game"
          control={Select}
          options={selectGameOptions}
          placeholder="Select game"
          onChange={handleSelectInputChange}
          // value={eventCreationData.game_id}
        /> */}

        <Form.Group widths="equal">
          <Form.Input
            label="Team size"
            name="_player_max"
            control={Select}
            options={maxPlayerOptions}
            placeholder="Maximum players"
            onChange={handleSelectInputChange}
            // value={searchEventData._player_max}
          />

          <Form.Input
            label="Duration (hour)"
            name="_duration"
            control={Select}
            options={durationOptions}
            placeholder="Event duration"
            onChange={handleSelectInputChange}
            // value={searchEventData._duration}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            name="_starting"
            label="Event day"
            type="date"
            onChange={handleInputChange}
            // value={searchEventData.event_time_date}
          />

        </Form.Group>
        <Button.Group widths="2">
          <Button content="Apply filters" type="submit" />
          <Button content="reset filters"  />
        </Button.Group>
      </Form>

      <h2 style={{ marginBottom: '1em' }}>Search Result</h2>
      <div className="Event-modules">
        <Card.Group centered>
          {list.map((element) => {
            return (
              <Card key={element._event_id}>
                <Card.Content>
                  <Card.Header>
                    <Moment format="YYYY/MM/DD HH:MM">
                      {element._starting}
                    </Moment>
                  </Card.Header>
                  <Card.Meta>{element._game_name}</Card.Meta>
                  <Card.Meta>
                    <strong>Event creator :</strong> {element._creator}
                  </Card.Meta>
                  <Card.Description>
                    {element._player_count} players
                  </Card.Description>
                  <Card.Description>
                    Looking for {element._player_max - element._player_count}{' '}
                    more players
                  </Card.Description>
                  {/* {element._langs && (
                      <div>
                        {element._langs.forEach((flag) => {
                          return (<Flag name={flag.label.toLowerCase()} />)
                        })}
                      </div>
                    )} */}
                  <Link
                    id={element._event_id}
                    to={`/event/${element._event_id}`}
                    onClick={handleGetSelectedEvent}
                  >
                    <Button content="Go" size="mini" />
                  </Link>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
      </div>
    </div>
  );
};

export default SearchEventPage;

// {list.map((element) => {
//   return (
//     <NavLink
//       className="Event-module"
//       key={element._event_id}
//       // Laisser le champs id sur l'élément cliquable
//       // ca sert au lien de redirect vers la page de l'event
//       id={element._event_id}
//       to={`/event/${element._event_id}`}
//       onClick={handleGetSelectedEvent}
//     >
//       <div className="Event-text">
//         Game {element.game_name} - Name {element._creator}
//       </div>
//       <div className="Event-text">
//         {' '}
//         Date and time{' '}
//         <Moment format="YYYY/MM/DD HH:MM">{element._starting}</Moment>
//       </div>
//       <div className="Event-text">
//         Number of players {element._player_count}
//       </div>
//     </NavLink>
//   );
// })}
