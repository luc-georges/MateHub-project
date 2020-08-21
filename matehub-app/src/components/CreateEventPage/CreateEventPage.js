import React from 'react';
import './style.scss';
import { Form, Flag, TextArea, Button } from 'semantic-ui-react';
import DateTimePicker from 'react-datetime-picker';

const CreateEventPage = () => {
  return (
    <div className="CreatEventPage">
      <form className="form">
        <div className="titreCreateEventPage">
          <h1 style={{ marginBottom: '1em', margin: '0 auto 1em auto' }}>
            Create event
          </h1>
        </div>
        <Form.Field label="Game" control="select">
          <option value="ligue of legend">league of legends</option>
        </Form.Field>
        <label>language</label>
        <Flag name="france" />
        <Form.Field label="france" control="input" type="checkbox" />
        <Flag name="gb" />
        <Form.Field label="United Kingdom" control="input" type="checkbox" />
        <Flag name="es" />
        <Form.Field label="Spain" control="input" type="checkbox" />
        <Flag name="it" />
        <Form.Field label="Italy" control="input" type="checkbox" />
        <Flag name="ru" />
        <Form.Field label="Russia" control="input" type="checkbox" />
        <Flag name="de" />
        <Form.Field label="Germany" control="input" type="checkbox" />
        <Form.Field label="Players" control="select">
          <option value="1">1</option>
          <option value="1">1</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="undefined">undefined</option>
        </Form.Field>
        <Form.Field label="Duration" control="select">
          <option value="1">1</option>
          <option value="1">1</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="undefined">undefined</option>
        </Form.Field>
        <label>date time dd/mm/yyyy hh/mm </label>
        <DateTimePicker className="date" />
        <Form.Field
          control={TextArea}
          label="About"
          placeholder="Tell us more about ..."
        />
        <Form.Field
          control={Button}
          style={{ marginTop: '1em', textAlign: 'center' }}
        >
          Create event
        </Form.Field>
      </form>
    </div>
  );
};

export default CreateEventPage;
