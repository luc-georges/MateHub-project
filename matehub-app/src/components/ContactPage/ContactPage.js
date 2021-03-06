import React, {useEffect} from 'react';
import './style.scss';
import 'semantic-ui-css/semantic.min.css';
import logo from '../../assets/logo-ok_matehub.svg';
import {Image} from 'semantic-ui-react'
import { Form, Input, TextArea, Button, Checkbox } from 'semantic-ui-react';
import banner from '../../assets/header-banner.png';
const ContactPage = () => {
  useEffect(() => {
    document.title = "MateHub: Contact-us"
 }, []);
  return (
    <div className="contactPage">
       <div className="header-home">
      <Image
                className='header-home--bannerimg'
                src={banner}
                />
    
   <Image
                className='header-home--img'
                src={logo}
                />
      </div>
      <Form className="contactpage" inverted>
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
        <Button inverted color="teal"
          style={{ marginTop: '2em', textAlign: 'center' }}
          content="submit"
        />
      </Form>
    </div>
  );
};

export default ContactPage;
