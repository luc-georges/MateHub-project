import React from 'react';
import { Form, Button, Grid, Checkbox } from 'semantic-ui-react';
import './style.scss';

const RegistrationPage = ({ registerData, onChangeField, onFormSubmit }) => {
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    onChangeField({
      [name]: value,
    });
  };
  const handleSubmit = () => {
    onFormSubmit();
   
  };
  const [checked, setChecked] = React.useState(false);
  return (
    <div className="global">
      <Form inverted className="RegistrationPage" onSubmit={handleSubmit}>
      
          <h1 style={{ marginBottom: '2em', margin: '0 auto 2em auto' }}>
            Inscription form
          </h1>
    
              <Form.Input
                id="form-input-control-error-email"
                name="email"
                type="email"
                label="Mail"
                placeholder="Your mail adress"
                value={registerData.email}
                onChange={handleInputChange}
              />
         
         
              <Form.Input
                id="form-input-control-error-nickname"
                name="nickname"
                label="Nickname"
                placeholder="Your nickname"
                value={registerData.nickname}
                onChange={handleInputChange}
              />
         
              <Form.Input
                id="form-input-control-error-dateofbirth"
                name="dateofbirth"
                label="Date of birth"
                type="date"
                placeholder="Your date of birth"
                value={registerData.dateofbirth}
                onChange={handleInputChange}
              />
          
              <Form.Input
                id="form-input-control-error-password"
                name="password"
                type="password"
                label="Password"
                placeholder="Your password"
                value={registerData.password}
                onChange={handleInputChange}
              />
          
              <Form.Input
                id="form-input-control-error-passwordConfirm"
                name="passwordConfirm"
                type="password"
                label="Confirm your password"
                placeholder="Confirm your password"
                value={registerData.passwordConfirm}
                onChange={handleInputChange}
              />

          {!checked && (
            <div>
            <Form.Input
                id="form-input-control-error-checkbox"
                control={Checkbox}
                checked={checked}
                onChange={() => setChecked(!checked)}
                label="I agree to the terms and conditions"
                style={{ marginTop: '2em', textAlign: 'center' }}
              />
              <Button content="submit" type="submit" disabled />
            </div>
          )}
          {checked && (
            <div>
              <Form.Input
                id="form-input-control-error-checkbox"
                control={Checkbox}
                checked={checked}
                onChange={() => setChecked(!checked)}
                label="I agree to the terms and conditions"
                style={{ marginTop: '2em', textAlign: 'center' }}
              />
              <Button inverted color="teal" content="Submit" type="submit" />
            </div>
          )}
      </Form>
    </div>
  );
};

export default RegistrationPage;
