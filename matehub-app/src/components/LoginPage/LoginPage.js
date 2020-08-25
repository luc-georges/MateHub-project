import React from 'react';
import './style.scss';
import { Form, Button, Checkbox } from 'semantic-ui-react';

const LoginPage = ({ loginData, onChangeField, onFormSubmit, isLogged }) => {
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
  // <--- The page you want to redirect your user to.

  return (
    <div className="loginpage">
      <Form className="loginform" onSubmit={handleSubmit}>
        <h1 style={{ marginBottom: '2em', margin: '0 auto 2em auto' }}>
          Login form
        </h1>
        <Form.Input
          id="form-input-control-error-email"
          name="email"
          type="email"
          label="Mail"
          placeholder="Mail adress"
          value={loginData.email}
          onChange={handleInputChange}
        />
        <Form.Group widths="equal">
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
          <Form.Field control={Checkbox} label="Remember me" />
          <Button
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
