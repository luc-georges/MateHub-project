import React from 'react';
import './style.scss';
import { Form, Flag, TextArea, Button, Select } from 'semantic-ui-react';
import DateTimePicker from 'react-datetime-picker';

const CreateEventPage = () => {
  const selectGameOptions = [
    {
      key: 'League of Legends',
      text: 'League of Legends',
      value: 'League of Legends',
    },
    {
      key: 'CS : Global Offensive',
      text: 'CS : Global Offensive',
      value: 'CS : Global Offensive',
    },
  ];

  const durationOptions = [
    { key: '1', text: '1', value: 1 },
    { key: '2', text: '2', value: 2 },
    { key: '3', text: '3', value: 3 },
    { key: '4', text: '4', value: 4 },
    { key: '5', text: '5', value: 5 },
  ];

  const playersNumberOptions = [
    { key: '1', text: '1', value: 1 },
    { key: '2', text: '2', value: 2 },
    { key: '3', text: '3', value: 3 },
    { key: '4', text: '4', value: 4 },
    { key: '5', text: '5', value: 5 },
  ];

  return (
    <div className="CreateEventPage">
      <Form className="form">
        <div className="titreCreateEventPage">
          <h1 style={{ marginBottom: '1em', margin: '0 auto 1em auto' }}>
            Create event
          </h1>
        </div>

        <div className="form-select">
          <div className="form-select-title">Language</div>
          <Form.Group>
            <Form.Group className="form-select-language">
              <Flag name="france" />
              <Form.Field label="france" control="input" type="checkbox" />
            </Form.Group>
            <Form.Group className="form-select-language">
              <Flag name="gb" />
              <Form.Field label="UK" control="input" type="checkbox" />
            </Form.Group>
            <Form.Group className="form-select-language">
              <Flag name="es" />
              <Form.Field label="Spain" control="input" type="checkbox" />
            </Form.Group>
            <Form.Group className="form-select-language">
              <Flag name="it" />
              <Form.Field label="Italy" control="input" type="checkbox" />
            </Form.Group>
            <Form.Group className="form-select-language">
              <Flag name="ru" />
              <Form.Field label="Russia" control="input" type="checkbox" />
            </Form.Group>
            <Form.Group className="form-select-language">
              <Flag name="de" />
              <Form.Field label="Germany" control="input" type="checkbox" />
            </Form.Group>
          </Form.Group>
        </div>

        <Form.Input
          label="Select game"
          control={Select}
          options={selectGameOptions}
          placeholder="Select game"
        />

        <Form.Group widths="equal">
          <Form.Input
            label="Number of players"
            name="player_count"
            control={Select}
            options={playersNumberOptions}
            placeholder="Number of players"
          />

          <Form.Input
            label="Duration (hour)"
            control={Select}
            options={durationOptions}
            placeholder="Event duration"
          />
        </Form.Group>

        <Form.Input
          id="form-input-control-error-eventstart"
          name="event_time"
          label="Event start"
          type="time"
        />

        <Form.Field
          control={TextArea}
          label="Description"
          placeholder="Event description"
        />

        <Button content="Create event" type="submit" />
      </Form>
    </div>
  );
};

export default CreateEventPage;
