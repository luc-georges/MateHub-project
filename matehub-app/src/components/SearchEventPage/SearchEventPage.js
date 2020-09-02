import React from 'react';
import './style.scss';
import {
  Form,
  Button,
  Card,
  Select,
  Checkbox,
  Divider,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const SearchEventPage = ({
  list,
  getSelectedEvent,
  onChangeField,
  searchEventData,
  onFormSubmit,
  onIsRankedCheckboxSearchEventChangeField,
  onResetAllFilters,
}) => {
  // const selectGameOptions = [
  //   {
  //     key: '1',
  //     text: 'League of Legends',
  //     value: 1,
  //   },
  // ];

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

  const rankOptions = [
    { key: 'iron', text: 'Iron', value: 'iron' },
    { key: 'bronze', text: 'Bronze', value: 'bronze' },
    { key: 'silver', text: 'Silver', value: 'silver' },
    { key: 'gold', text: 'Gold', value: 'gold' },
    { key: 'platinum', text: 'Platinum', value: 'platinum' },
    { key: 'diamond', text: 'Diamond', value: 'diamond' },
    { key: 'master', text: 'Master', value: 'master' },
    { key: 'grandmaster', text: 'GrandMaster', value: 'grandmaster' },
    { key: 'challenger', text: 'Challenger', value: 'challenger' },
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

  const handleAddIsRanked = (evt, data) => {
    // console.log('objet data entier :', data);
    const { name, checked } = data;
    onIsRankedCheckboxSearchEventChangeField({
      [name]: checked,
    });
  };

  return (
    <div className="SearchEventPage">
      <Form
        onSubmit={onFormSubmit}
        className="searchForm"
      >
        <h2>Event research</h2>

        {/* RECHERCHE PAR NOM DU CREATEUR - EN ATTENTE */}
        {/* <Input
          icon="search"
          placeholder="Search for an event by creator name"
        /> */}

        <Form.Group widths="equal">
          <Form.Input
            label="Team size"
            name="_player_max"
            control={Select}
            options={maxPlayerOptions}
            placeholder="Maximum players"
            onChange={handleSelectInputChange}
            value={searchEventData._player_max}
          />

          <Form.Input
            label="Duration (hour)"
            name="_duration"
            control={Select}
            options={durationOptions}
            placeholder="Event duration"
            onChange={handleSelectInputChange}
            value={searchEventData._duration}
          />

          <Form.Input
            name="_starting"
            label="Event day"
            type="date"
            onChange={handleInputChange}
            value={searchEventData._starting}
          />
        </Form.Group>

        <Form.Group widths="equal" className="searchForm-rank-container">
          <Form.Input
            label="I want to play ranked games"
            name="_isRanked"
            control={Checkbox}
            onChange={handleAddIsRanked}
            checked={searchEventData._isRanked}
          />
          <Form.Input
            disabled={!searchEventData._isRanked}
            label="Rank"
            control={Select}
            name="_rank"
            placeholder="Select rank"
            options={rankOptions}
            onChange={handleSelectInputChange}
          />
        </Form.Group>

        <div className="searchForm-btn-container">
          <Button positive content="Apply filters" type="submit" />

          <Button
            secondary
            className="searchForm-btn-resetFilters"
            content="reset filters"
            type="button"
            onClick={onResetAllFilters}
          />
        </div>
      </Form>
      <Divider />

      <div>
        <h2 className="searchResults-title">Search Results</h2>
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
