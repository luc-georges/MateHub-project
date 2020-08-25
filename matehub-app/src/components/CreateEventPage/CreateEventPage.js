import React from 'react';
import './style.scss';
import { Form, Flag, TextArea, Button } from 'semantic-ui-react';

const CreateEventPage = () => {
  return (
    <div className="CreatEventPage">
      <form className="form">
        <div className="titreCreateEventPage">
          <h1 style={{ marginBottom: '1em', margin: '0 auto 1em auto' }}>
            Create event
          </h1>
        </div>
        <div className="select">
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
        </div>
        <Form.Field label="Game" control="select" className="select">
          <option value="ligue of legend">league of legends</option>
        </Form.Field>
        <Form.Field label="Players" control="select" className="select">
          <option value="1">1</option>
          <option value="1">1</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="undefined">undefined</option>
        </Form.Field>
        <Form.Field label="Duration" control="select" className="select">
          <option value="1">1</option>
          <option value="1">1</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="undefined">undefined</option>
        </Form.Field>

        <label> </label>

        <Form.Input
                id="datetime"
                name="dat"
                label="Date and time"
                type="datetime-local"
                
              />

        <Form.Field
          control={TextArea}
          label="About"
          placeholder="Tell us more about ..."
          className="select"
        />
        <Form.Field
          control={Button}
          style={{ marginTop: '1em', textAlign: 'center' }}
          className="button"
        >
          Create event
        </Form.Field>
      </form>
    </div>
  );
};

export default CreateEventPage;
