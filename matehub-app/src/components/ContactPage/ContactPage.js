import React from 'react';
import './style.scss';
import 'semantic-ui-css/semantic.min.css';

import { Form, Input, TextArea, Button, Checkbox } from 'semantic-ui-react';

const ContactPage = () => {
  console.log('ContactPage');
  return (
    <div className="global">
      <Form className="contactpage">
        <h1 style={{ marginBottom: '2em', margin: '0 auto 2em auto' }}>
          Contact form
        </h1>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-error-email"
            control={Input}
            label="Email"
            placeholder="joe@schmoe.com"
            // error={{
            //   content: 'Please enter a valid email address',
            //   pointing: 'below',
            // }}
          />

          <Form.Field
            id="form-input-control-nickname"
            control={Input}
            label="Nickname"
            placeholder="Nickname"
          />
        </Form.Group>
        <Form.Field
          id="form-input-control-object"
          control={Input}
          label="Object"
          placeholder="Object"
        />
        <Form.Field
          id="form-textarea-control-message"
          control={TextArea}
          label="Message"
          placeholder="Message"
        />
        {/* <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Submit"
        /> */}
        <Form.Field
          control={Checkbox}
          label={<label>I agree to the Terms and Conditions</label>}
        />
        <Button
          style={{ marginTop: '2em', textAlign: 'center' }}
          content="submit"
        />
      </Form>
    </div>
  );
};

export default ContactPage;
