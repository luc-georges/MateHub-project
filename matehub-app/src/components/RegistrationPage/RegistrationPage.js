import React from 'react';
import { Form, Button, Grid, Checkbox } from 'semantic-ui-react';
import './style.scss';

const RegistrationPage = ({registerData, onChangeField, onFormSubmit}) => {
  // console.log(registerData);
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    onChangeField({
      [name]: value,
    });
  };
  const handleSubmit = () => {
    onFormSubmit();
  };
  return (
    <div className="global">
      <Form onSubmit={handleSubmit}>
        <Grid className="RegistrationPage" columns={2}>
          <h1 style={{ marginBottom: '2em', margin: '0 auto 2em auto' }}>
            Inscription form
          </h1>
          <Grid.Row>
            <Grid.Column width={16}>
              <Form.Input
                id="form-input-control-error-email"
                name="email"
                type="email"
                label="Mail"
                placeholder="Your mail adress"
                value={registerData.email}
                onChange={handleInputChange}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={10}>
              <Form.Input
                id="form-input-control-error-nickname"
                name="nickname"
                label="Nickname"
                placeholder="Your nickname"
                value={registerData.nickname}
                onChange={handleInputChange}
              />
            </Grid.Column>
            <Grid.Column width={6}>
              <Form.Input
                id="form-input-control-error-dob"
                name="dateOfBirth"
                label="Date of birth"
                type="date"
                placeholder="Your date of birth"
                value={registerData.dateOfBirth}
                onChange={handleInputChange}
                onClick={handleInputChange}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <Form.Input
                id="form-input-control-error-password"
                name="password"
                type="password"
                label="Password"
                placeholder="Your password"
                value={registerData.password}
                onChange={handleInputChange}
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <Form.Input
                id="form-input-control-error-passwordConfirm"
                name="passwordConfirm"
                type="password"
                label="Confirm your password"
                placeholder="Confirm your password"
                value={registerData.passwordConfirm}
                onChange={handleInputChange}
              />
            </Grid.Column>
          </Grid.Row>
          <Form.Field
            control={Checkbox}
            label="I agree to the terms and conditions"
            style={{ marginTop: '2em', textAlign: 'center' }}
          />
          <Button content="submit" type="submit" />
        </Grid>
      </Form>
    </div>
  );
};

export default RegistrationPage;
