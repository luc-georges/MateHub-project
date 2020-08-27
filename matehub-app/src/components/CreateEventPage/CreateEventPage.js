import React, { useState } from 'react';
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
  onChangeField,
  eventCreationData,
  onFormSubmit,
  errors,
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
    onChangeField({
      [name]: checked,
    });
  };

  const [durationError, setDurationError] = useState(false);
  const [gameIdError, setgameIdError] = useState(false);
  const [playerMaxError, setplayerMaxError] = useState(false);

  const handleSubmit = () => {
    let error = false;

    if (eventCreationData.duration === '') {
      setDurationError(true);
      error = true;
    } else {
      setDurationError(false);
    }

    if (eventCreationData.game_id === '') {
      setgameIdError(true);
      error = true;
    } else {
      setgameIdError(false);
    }

    if (eventCreationData.player_max === '') {
      setplayerMaxError(true);
      error = true;
    } else {
      setplayerMaxError(false);
    }

    onFormSubmit();
  };

  // Options for select input
  const selectGameOptions = [
    {
      key: '2',
      text: 'League of Legends',
      value: 2,
    },
    {
      key: '1',
      text: 'CS : Global Offensive',
      value: 1,
    },
  ];

  const durationOptions = [
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
    { key: '1', text: '1', value: 1 },
    { key: '2', text: '2', value: 2 },
    { key: '3', text: '3', value: 3 },
    { key: '4', text: '4', value: 4 },
    { key: '5', text: '5', value: 5 },
  ];

  return (
    <div className="CreateEventPage">
      <Form className="form" onSubmit={handleSubmit} error>
        <div className="titreCreateEventPage">
          <h1 style={{ marginBottom: '1em', margin: '0 auto 1em auto' }}>
            Create event
          </h1>
        </div>

        {gameIdError ? (
          <Message
            error
            header="Select game error"
            content="You did not specify on which game your event is created"
          />
        ) : null}

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
              />
            </Form.Group>

            <Form.Group className="form-select-language">
              <Flag name="gb" />
              <Form.Input
                label="UK"
                control={Checkbox}
                name="uk2"
                onChange={handleAddFlag}
              />
            </Form.Group>

            <Form.Group className="form-select-language">
              <Flag name="it" />
              <Form.Input
                label="Italy"
                control={Checkbox}
                name="it3"
                onChange={handleAddFlag}
              />
            </Form.Group>

            <Form.Group className="form-select-language">
              <Flag name="es" />
              <Form.Input
                label="Spain"
                control={Checkbox}
                name="es4"
                onChange={handleAddFlag}
              />
            </Form.Group>

            <Form.Group className="form-select-language">
              <Flag name="ru" />
              <Form.Input
                label="Russia"
                control={Checkbox}
                name="ru5"
                onChange={handleAddFlag}
              />
            </Form.Group>

            <Form.Group className="form-select-language">
              <Flag name="de" />
              <Form.Input
                label="Germany"
                control={Checkbox}
                name="de6"
                onChange={handleAddFlag}
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
          required
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
            required
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
            required
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            id="form-input-control-error-eventstart"
            name="event_time"
            label="Event start"
            type="datetime-local"
            onChange={handleInputChange}
            value={eventCreationData.event_time}
          />

          <Form.Input
            label="vocal"
            name="vocal"
            placeholder="Event vocal"
            onChange={handleInputChange}
            value={eventCreationData.vocal}
          />
        </Form.Group>

        <Form.Field
          control={TextArea}
          label="Description"
          name="description"
          placeholder="Event description"
          onChange={handleInputChange}
          value={eventCreationData.description}
        />
        <Button
          content="Create event"
          type="submit"
          // disabled={
          //   !eventCreationData.duration ||
          //   !eventCreationData.game_id ||
          //   !eventCreationData.player_max
          // }
        />
      </Form>
    </div>
  );
};

export default CreateEventPage;
