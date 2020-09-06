import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import {
  Form,
  Button,
  Message,
  Checkbox,
  Container,
} from 'semantic-ui-react';

const RegistrationPage = ({
  registerData,
  onChangeField,
  onFormSubmit,
  registered,
  registerErrorMessage,
}) => {
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    onChangeField({
      [name]: value,
    });
  };

  const [checked, setChecked] = React.useState(false);

  const [emailError, setEmailError] = React.useState(false);

  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = React.useState(false);

  const [nicknameError, setNicknameError] = React.useState(false);
  const [dobError, setDobError] = React.useState(false);

  const handleSubmit = () => {
    if (registerData.email === '') {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
        registerData.password
      )
    ) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }

    if (registerData.passwordConfirm === registerData.password) {
      setPasswordConfirmError(false);
    }

    if (registerData.passwordConfirm === '') {
      setPasswordConfirmError(true);
    }

    if (registerData.nickname.length < 3) {
      setNicknameError(true);
    } else {
      setNicknameError(false);
    }

    if (registerData.dateofbirth === '') {
      setDobError(true);
    } else {
      setDobError(false);
    }

    /* if (!dobError && !nicknameError && !emailError && !passwordError && !passwordConfirmError) {
      setRegistrationOk(true);
    } */

    onFormSubmit();
  };

  return (
    <div className="global">
      <Form inverted className="RegistrationPage" onSubmit={handleSubmit}>
        <h1 style={{ marginBottom: '2em', margin: '0 auto 2em auto' }}>
          Registration form
        </h1>

        {registerErrorMessage ? (
          <Message
            size="mini"
            header={registerErrorMessage}
            className="input-error-message"
          />
        ) : null}

        {emailError ? (
          <Message
            size="mini"
            header="You must specify a valid mail adress"
            className="input-error-message"
          />
        ) : null}
        <Form.Input
          id="form-input-control-error-email"
          name="email"
          type="email"
          label="Mail"
          placeholder="Your mail adress"
          value={registerData.email}
          onChange={handleInputChange}
          error={emailError}
        />

        {nicknameError ? (
          <Message
            size="mini"
            header="Your nickname must have at least 3 characters"
            className="input-error-message"
          />
        ) : null}
        <Form.Input
          id="form-input-control-error-nickname"
          name="nickname"
          label="Nickname"
          placeholder="Your nickname"
          value={registerData.nickname}
          onChange={handleInputChange}
          error={nicknameError}
        />

        {dobError ? (
          <Message
            size="mini"
            header="You must specify a date of birth"
            className="input-error-message"
          />
        ) : null}
        <Form.Input
          id="form-input-control-error-dateofbirth"
          name="dateofbirth"
          label="Date of birth"
          type="date"
          placeholder="Your date of birth"
          value={registerData.dateofbirth}
          onChange={handleInputChange}
          error={dobError}
        />

        {passwordError ? (
          <Message
            size="mini"
            header="You must enter a valid password (at lease 8 characters with one uppercase letter and one numeric digit)"
            className="input-error-message"
          />
        ) : null}
        <Form.Input
          id="form-input-control-error-password"
          name="password"
          type="password"
          label="Password"
          placeholder="Your password"
          value={registerData.password}
          onChange={handleInputChange}
          error={passwordError}
        />

        {passwordConfirmError ? (
          <Message
            size="mini"
            header="Passwords fields doesn't match"
            className="input-error-message"
          />
        ) : null}
        <Form.Input
          id="form-input-control-error-passwordConfirm"
          name="passwordConfirm"
          type="password"
          label="Confirm your password"
          placeholder="Confirm your password"
          value={registerData.passwordConfirm}
          onChange={handleInputChange}
          error={passwordConfirmError}
        />

        {!registered ? (
          <Container>
            <Form.Input
              id="form-input-control-error-checkbox"
              control={Checkbox}
              checked={checked}
              onChange={() => setChecked(!checked)}
              label="I agree to the terms and conditions"
              style={{ marginTop: '2em', textAlign: 'center' }}
            />
            <Button
              inverted
              color="teal"
              content="Submit"
              type="submit"
              disabled={!checked}
            />
          </Container>
        ) : (
          <Container>
            <Message size="large" className="input-success-message">
              <Message.Header>Account created successfully, click <Link to="/login">here</Link> to connect</Message.Header>
              </Message>
          </Container>
        )}
      </Form>
    </div>
  );
};

export default RegistrationPage;
