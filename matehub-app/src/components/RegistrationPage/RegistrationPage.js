import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import './style.scss';

const RegistrationPage = () => {
  return (
    <div className="RegistrationPage">
      <div className="titre">
        <h2>Inscription form</h2>
      </div>
      <Form className="form">
        <Form.Field>
          <label>Mail</label>
          <input placeholder="Enter your mail" />
        </Form.Field>
        <Form.Field>
          <label>Nickname</label>
          <input placeholder="Enter your nickname" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Enter your password" />
        </Form.Field>
        <Form.Field>
          <label>Confirm password</label>
          <input placeholder="Confirm your password" />
        </Form.Field>
        <Form.Field>
          <label> Birthday</label>
          <input placeholder="Enter your birthday" />
        </Form.Field>
        <Button type="submit" className="button">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RegistrationPage;
