import React from 'react';
import './style.scss';
import { Form, Button, Message } from 'semantic-ui-react';

const LoginPage = ({ loginData, onChangeField, onFormSubmit, isLogged, loginErrorMessage }) => {
  // console.log('LoginPage');

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    onChangeField({
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    // evt.preventDefault();
    onFormSubmit();
  };

  return (
    <div className="loginpage">
      <Form inverted className="loginform" onSubmit={handleSubmit}>
        <h1 style={{ margin: '0 auto 1em auto' }}>
          Login form
        </h1>
        {loginErrorMessage ? (
            <Message
              header={loginErrorMessage}
              className='input-error-message'
            />
          ) : null}
        <Form.Group widths="equal">
        <Form.Input
          id="form-input-control-error-email"
          name="email"
          type="email"
          label="Mail"
          placeholder="Mail adress"
          value={loginData.email}
          onChange={handleInputChange}
        />
          <Form.Input
            id="form-input-control-password"
            name="password"
            type="password"
            label="Password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <div>
         
          <Button
          inverted color="teal"
            style={{ marginTop: '2em', textAlign: 'center' }}
            content="submit"
            type="submit"
          />
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
