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
        <Form.Group widths="equal" /* style={{marginBottom: '2em' }} */>
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            label="First name"
            placeholder="First name"
          />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Last name"
            placeholder="Last name"
          />
        </Form.Group>
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Opinion"
          placeholder="Opinion"
        />
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
        {/* <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Submit"
        /> */}
        <Form.Field
          control={Checkbox}
          label={<label>I agree to the Terms and Conditions</label>}
        />
        <Button style={{ marginTop: '2em', textAlign: 'center' }} content="submit" />
      </Form>
    </div>
  );
};

export default ContactPage;
