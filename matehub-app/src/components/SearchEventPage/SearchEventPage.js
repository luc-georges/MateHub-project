import React from 'react';
import './style.scss';
import { Input, Form, Button } from 'semantic-ui-react';

const SearchEventPAge = () => (
  <div className="SearchEventPage">
    <form className="SearchByName">
      <h1 style={{ marginBottom: '1em', margin: '0 auto 1em auto' }}>
        Event research{' '}
      </h1>
      <Input icon="search" placeholder="Search for an event by creator name" />
    </form>

    <form className="filter">
      <Form.Field label="Game" control="select" className="select">
        <option value="ligue of legend">league of legends</option>
      </Form.Field>

      <Form.Field label="Players" control="select" className="select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="undefined">undefined</option>
      </Form.Field>

      <Form.Field label="Duration" control="select" className="select">
        <option value="1">0h-2h</option>
        <option value="2">2h-5h</option>
        <option value="3">5h-10h</option>
        <option value="4">10h+</option>
        <option value="undefined">undefined</option>

      </Form.Field>
      

      <div className="button">
      <Form.Field
        control={Button}
        style={{ marginTop: '1em', textAlign: 'center' }}
      >
        Apply filters
      </Form.Field>

      <Form.Field
        control={Button}
        style={{ marginTop: '1em', textAlign: 'center' }}
      >
        Reset filters
      </Form.Field>
      </div>

    </form>

    <h2 style={{ marginBottom: '1em', margin: '0 auto 1em auto' }}>
      Search Result
    </h2>
  </div>
);

export default SearchEventPAge;
