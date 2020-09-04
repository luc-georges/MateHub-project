import React, { useState, pushState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import {
  Form,
  Flag,
  TextArea,
  Button,
  Select,
  Checkbox,
  Message,
} from 'semantic-ui-react';

const CreateEventPage = ({
  onisRankedCheckboxCreateEventChangeField,
  onFlagCheckboxChangeField,
  onChangeField,
  eventCreationData,
  onFormSubmit,
  selectedEvent,
}) => {
  // console.log(eventCreationData);

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

  const handleAddFlag = (evt, data) => {
    // console.log('objet data entier :', data);
    const { name, checked } = data;
    onFlagCheckboxChangeField({
      [name]: checked,
    });
  };

  const handleAddIsRanked = (evt, data) => {
    // console.log('objet data entier :', data);
    const { name, checked } = data;
    onisRankedCheckboxCreateEventChangeField({
      [name]: checked,
    });
  };

  const [flagError, setFlagError] = useState(false);
  const [durationError, setDurationError] = useState(false);
  const [gameIdError, setgameIdError] = useState(false);
  const [playerMaxError, setplayerMaxError] = useState(false);
  const [eventStartDateError, setEventStartDateError] = useState(false);
  const [eventStartHourError, setEventStartHourError] = useState(false);
  const [rankError, setRankError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const handleSubmit = () => {
    let error = false;

    if (
      !eventCreationData.language.fr1 &&
      !eventCreationData.language.uk2 &&
      !eventCreationData.language.it3 &&
      !eventCreationData.language.es4 &&
      !eventCreationData.language.ru5 &&
      !eventCreationData.language.de6
    ) {
      setFlagError(true);
      error = true;
    } else {
      setFlagError(false);
      error = false;
    }

    if (eventCreationData.duration === '') {
      setDurationError(true);
      error = true;
    } else {
      setDurationError(false);
      error = false;
    }

    if (eventCreationData.game_id === '') {
      setgameIdError(true);
      error = true;
    } else {
      setgameIdError(false);
      error = false;
    }

    if (eventCreationData.player_max === '') {
      setplayerMaxError(true);
      error = true;
    } else {
      setplayerMaxError(false);
      error = false;
    }

    if (eventCreationData.event_time_date === '') {
      setEventStartDateError(true);
      error = true;
    } else {
      setEventStartDateError(false);
      error = false;
    }

    if (eventCreationData.event_time_hour === '') {
      setEventStartHourError(true);
      error = true;
    } else {
      setEventStartHourError(false);
      error = false;
    }

    if (eventCreationData.rank === '') {
      setRankError(true);
      error = true;
    } else {
      setRankError(false);
      error = false;
    }

    if (eventCreationData.description === '') {
      setDescriptionError(true);
      error = true;
    } else {
      setDescriptionError(false);
      error = false;
    }

    if (!error) {
      onFormSubmit();
      this.history.state('/');
    }
  };

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
    { key: '', text: 'Any', value: '' },
    { key: '00:30:00', text: '30mn', value: '00:30:00' },
    { key: '01:00:00', text: '1h', value: '01:00:00' },
    { key: '01:30:00', text: '1h30', value: '01:30:00' },
    { key: '02:00:00', text: '2h', value: '02:00:00' },
    { key: '02:30:00', text: '2h30', value: '02:30:00' },
    { key: '03:00:00', text: '3h', value: '03:00:00' },
    { key: '03:30:00', text: '3h30', value: '03:30:00' },
    { key: '04:00:00', text: '4h', value: '04:00:00' },
    { key: '04:30:00', text: '4h30', value: '04:30:00' },
    { key: '05:00:00', text: '5h or more', value: '05:00:00' },
  ];

  const maxPlayerOptions = [
    { key: '', text: 'Any', value: '' },
    { key: '1', text: '1', value: 1 },
    { key: '2', text: '2', value: 2 },
    { key: '3', text: '3', value: 3 },
    { key: '4', text: '4', value: 4 },
    { key: '5', text: '5', value: 5 },
  ];

  return (
    <div className="CreateEventPage">
      <Form inverted className="form" onSubmit={handleSubmit} error>
        <div className="titreCreateEventPage">
          <h1 style={{ marginBottom: '1em', margin: '0 auto 1em auto' }}>
            Create event
          </h1>
        </div>

        <div>
          {flagError ? (
            <Message
              error
              header="Select language error"
              content="You must select atleast one language"
            />
          ) : null}
          {gameIdError ? (
            <Message
              error
              header="Select game error"
              content="You did not specify on which game your event is created"
            />
          ) : null}
          {playerMaxError ? (
            <Message
              error
              header="Maximum players error"
              content="You did not specify how many players you want on your event"
            />
          ) : null}
          {durationError ? (
            <Message
              error
              header="Duration error"
              content="You did not specify a duration for your event"
            />
          ) : null}
          {eventStartDateError ? (
            <Message
              error
              header="Date error"
              content="You did not specify the event day"
            />
          ) : null}
          {eventStartHourError ? (
            <Message
              error
              header="Date error"
              content="You did not specify the event starting hour"
            />
          ) : null}
          {rankError ? (
            <Message
              error
              header="Rank error"
              content="You must specify your rank"
            />
          ) : null}

          {descriptionError ? (
            <Message
              error
              header="Description error"
              content="You did not specify a description for your event"
            />
          ) : null}
        </div>

        <div className="form-select">
          <div className="form-select-title">Language</div>
          <Form.Group>
            <Form.Group className="form-select-language">
              <Flag name="france" />
              <Form.Input
                label="France"
                control={Checkbox}
                name="fr1"
                onChange={handleAddFlag}
                checked={eventCreationData.language.fr1}
                error={flagError}
              />
            </Form.Group>

            <Form.Group className="form-select-language">
              <Flag name="gb" />
              <Form.Input
                label="UK"
                control={Checkbox}
                name="uk2"
                onChange={handleAddFlag}
                checked={eventCreationData.language.uk2}
                error={flagError}
              />
            </Form.Group>

            <Form.Group className="form-select-language">
              <Flag name="it" />
              <Form.Input
                label="Italy"
                control={Checkbox}
                name="it3"
                onChange={handleAddFlag}
                checked={eventCreationData.language.it3}
                error={flagError}
              />
            </Form.Group>

            <Form.Group className="form-select-language">
              <Flag name="es" />
              <Form.Input
                label="Spain"
                control={Checkbox}
                name="es4"
                onChange={handleAddFlag}
                checked={eventCreationData.language.es4}
                error={flagError}
              />
            </Form.Group>

            <Form.Group className="form-select-language">
              <Flag name="ru" />
              <Form.Input
                label="Russia"
                control={Checkbox}
                name="ru5"
                onChange={handleAddFlag}
                checked={eventCreationData.language.ru5}
                error={flagError}
              />
            </Form.Group>

            <Form.Group className="form-select-language">
              <Flag name="de" />
              <Form.Input
                label="Germany"
                control={Checkbox}
                name="de6"
                onChange={handleAddFlag}
                checked={eventCreationData.language.de6}
                error={flagError}
              />
            </Form.Group>
          </Form.Group>
        </div>

        <Form.Input
          name="game_id"
          label="Select game"
          control={Select}
          options={selectGameOptions}
          placeholder="Select game"
          onChange={handleSelectInputChange}
          value={eventCreationData.game_id}
          error={gameIdError}
        />
        <Form.Group widths="equal">
          <Form.Input
            label="Maximum players"
            name="player_max"
            control={Select}
            options={maxPlayerOptions}
            placeholder="Maximum players"
            onChange={handleSelectInputChange}
            value={eventCreationData.player_max}
            error={playerMaxError}
          />

          <Form.Input
            label="Duration (hour)"
            name="duration"
            control={Select}
            options={durationOptions}
            placeholder="Event duration"
            onChange={handleSelectInputChange}
            value={eventCreationData.duration}
            error={durationError}
          />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Input
            id="form-input-control-error-eventstart"
            name="event_time_date"
            label="Event start date"
            type="date"
            onChange={handleInputChange}
            value={eventCreationData.event_time_date}
            error={eventStartDateError}
          />

          <Form.Input
            id="form-input-control-error-eventstart"
            name="event_time_hour"
            label="Event start time"
            type="time"
            onChange={handleInputChange}
            value={eventCreationData.event_time_hour}
            error={eventStartHourError}
          />

          <Form.Input
            label="vocal"
            name="vocal"
            placeholder="Event vocal"
            onChange={handleInputChange}
            value={eventCreationData.vocal}
          />
        </Form.Group>

        <Form.Input
          label="I want to play ranked games"
          name="is_ranked"
          control={Checkbox}
          onChange={handleAddIsRanked}
          checked={eventCreationData.is_ranked}
        />

        <Form.Input
          label="Rank"
          control="select"
          name="rank"
          placeholder="Select your rank"
          onChange={handleInputChange}
          value={eventCreationData.rank}
          error={rankError}
        >
          <option value=''>Select your rank</option>
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
        </Form.Input>

        <Form.Input
          control={TextArea}
          label="Description"
          name="description"
          placeholder="Event description"
          onChange={handleInputChange}
          value={eventCreationData.description}
          error={descriptionError}
        />
          <Link aria-disabled to={`/event/${selectedEvent}`}>
            <Button content="Create event" type="submit" />
          </Link>
      </Form>
    </div>
  );
};

export default CreateEventPage;
