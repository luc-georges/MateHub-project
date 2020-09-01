import React from 'react';
import './style.scss';
import { Form, Button, Card, Select, Checkbox, Divider } from 'semantic-ui-react';
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
  const selectGameOptions = [
    {
      key: '1',
      text: 'League of Legends',
      value: 1,
    },
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
        className="SearchByName"
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

          <Form.Field
            disabled={!searchEventData._isRanked}
            label="Rank"
            control="select"
            name="_rank"
            placeholder="Select your rank"
            onChange={handleInputChange}
          >
            <option value="">None</option>
            <optgroup label="Iron">
              <option value="Iron 1">Iron I</option>
              <option value="Iron 2">Iron II</option>
              <option value="Iron 3">Iron III</option>
              <option value="Iron 4">Iron IV</option>
            </optgroup>
            <optgroup label="Bronze">
              <option value="Bronze 1">Bronze I</option>
              <option value="Bronze 2">Bronze II</option>
              <option value="Bronze 3">Bronze III</option>
              <option value="Bronze 4">Bronze IV</option>
            </optgroup>
            <optgroup label="Silver">
              <option value="Silver 1">Silver I</option>
              <option value="Silver 2">Silver II</option>
              <option value="Silver 3">Silver III</option>
              <option value="Silver 4">Silver IV</option>
            </optgroup>
            <optgroup label="Gold">
              <option value="Gold 1">Gold I</option>
              <option value="Gold 2">Gold II</option>
              <option value="Gold 3">Gold III</option>
              <option value="Gold 4">Gold IV</option>
            </optgroup>
            <optgroup label="Platinum">
              <option value="Platinum 1">Platinum I</option>
              <option value="Platinum 2">Platinum II</option>
              <option value="Platinum 3">Platinum III</option>
              <option value="Platinum 4">Platinum IV</option>
            </optgroup>
            <optgroup label="Diamond">
              <option value="Diamond 1">Diamond I</option>
              <option value="Diamond 2">Diamond II</option>
              <option value="Diamond 3">Diamond III</option>
              <option value="Diamond 4">Diamond IV</option>
            </optgroup>
            <optgroup label="Master">
              <option value="Master">Master</option>
            </optgroup>
            <optgroup label="GrandMaster">
              <option value="GrandMaster">GrandMaster</option>
            </optgroup>
            <optgroup label="Challenger">
              <option value="Challenger">Challenger</option>
            </optgroup>
          </Form.Field>
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
