import React,{useEffect} from 'react';
import './style.scss';
import {
  Form,
  Button,
  Card,
  Select,
  Checkbox,
  Image,
  Flag,
} from 'semantic-ui-react';
import logolol from '../../assets/logolol.png';
import { Link } from 'react-router-dom';
import uuid from "react-uuid";
import moment from 'moment';

const SearchEventPage = ({
  list,
  getSelectedEvent,
  onChangeField,
  searchEventData,
  onFormSubmit,
  onIsRankedCheckboxSearchEventChangeField,
  onResetAllFilters,
  eventSearchResults,
  filterGotResults
}) => {
  // const selectGameOptions = [
  //   {
  //     key: '1',
  //     text: 'League of Legends',
  //     value: 1,
  //   },
  // ];

  const durationOptions = [
    { key: '', text: 'Any', value: '' },
    { key: '30mn to 2h', text: '30mn to 2h', value: '-2' },
    { key: '2h to 5h', text: '2h to 5h', value: '2-5' },
    { key: 'more than 5h', text: 'more than 5h', value: '5+' },
  ];

  const maxPlayerOptions = [
    { key: '', text: 'Any', value: '' },
    { key: '1', text: '1', value: 1 },
    { key: '2', text: '2', value: 2 },
    { key: '3', text: '3', value: 3 },
    { key: '4', text: '4', value: 4 },
    { key: '5', text: '5', value: 5 },
  ];

  const rankOptions = [
    { key: '', text: 'Any', value: '' },
    { key: 'iron', text: 'Iron', value: 'Iron' },
    { key: 'bronze', text: 'Bronze', value: 'Bronze' },
    { key: 'silver', text: 'Silver', value: 'Silver' },
    { key: 'gold', text: 'Gold', value: 'Gold' },
    { key: 'platinum', text: 'Platinum', value: 'Platinum' },
    { key: 'diamond', text: 'Diamond', value: 'Diamond' },
    { key: 'master', text: 'Master', value: 'Master' },
    { key: 'grandmaster', text: 'GrandMaster', value: 'Grandmaster' },
    { key: 'challenger', text: 'Challenger', value: 'Challenger' },
  ];

  const handleGetSelectedEvent = (evt, data) => {
    getSelectedEvent(evt.currentTarget.id);
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    onChangeField({
      [name]: value,
    });
  };

  const handleSelectInputChange = (evt, data) => {
    const { name, value } = data;
    onChangeField({
      [name]: value,
    });
  };

  const handleAddIsRanked = (evt, data) => {
    const { name, checked } = data;
    onIsRankedCheckboxSearchEventChangeField({
      [name]: checked,
    });
  };
  useEffect(() => {
    document.title = `MateHub: Search Event`
 }, []);
  return (
    <div className="SearchEventPage">
      <div className="form-side">
      <Form
        onSubmit={onFormSubmit}
        className="searchForm"
        inverted
      >
        <h2 className="searchForm-title">Event research</h2>

        {/* RECHERCHE PAR NOM DU CREATEUR - EN ATTENTE */}
        {/* <Input
          icon="search"
          placeholder="Search for an event by creator name"
        /> */}

          <Form.Input
            label="Team size"
            name="_player_max"
            control={Select}
            options={maxPlayerOptions}
            placeholder="Maximum players"
            onChange={handleSelectInputChange}
            value={searchEventData._player_max}
          />

          <Form.Input
            label="Duration (hour)"
            name="_duration"
            control={Select}
            options={durationOptions}
            placeholder="Event duration"
            onChange={handleSelectInputChange}
            value={searchEventData._duration}
          />

          <Form.Input
            name="_starting"
            label="Event day"
            type="date"
            onChange={handleInputChange}
            value={searchEventData._starting}
          />


  
          <Form.Input
            label="I want to play ranked games"
            name="_is_ranked"
            control={Checkbox}
            onChange={handleAddIsRanked}
            checked={searchEventData._is_ranked}
          />
          <Form.Input
            label="Rank"
            control={Select}
            name="_rank"
            placeholder="Select rank"
            options={rankOptions}
            onChange={handleSelectInputChange}
          />


        <div className="searchForm-btn-container">
          <Button positive content="Apply filters" type="submit" />

          <Button
            secondary
            className="searchForm-btn-resetFilters"
            content="reset filters"
            type="button"
            onClick={onResetAllFilters}
          />
        </div>
      </Form>


        </div>
      <div className="result-side">
        <h2 className="searchResults-title">Search Results</h2>
       
        <Card.Group centered>
          {filterGotResults && eventSearchResults.map((element,index) => {

            let rankClass;
                      
            if( element._rank.slice(0,4) === "Iron"){
              rankClass = "iron"
            }else if (element._rank.slice(0,6) === "Bronze"){
              rankClass = "bronze"
            }else if (element._rank.slice(0,4) === "Silv"){
              rankClass = "silv"
            }else if (element._rank.slice(0,4) === "Gold"){
              rankClass = "gold"
            }else if (element._rank.slice(0,4) === "Plat"){
              rankClass = "plat"
            }else if (element._rank.slice(0,4) === "Diam"){
              rankClass = "diam"
            } else {
              rankClass = "chal"
            };

            return (
              <div key={uuid()} className={`slide-up${index}`} >
              <Card key={element._event_id} className={`searchResults-card event-card `}>
                  <Card.Header >
                    <span className="elm-star">
                    {moment.parseZone(element._starting).format("YYYY/MM/DD h:mm a")}
                    </span>
                  </Card.Header>
                <Card.Content className="card-container">
                <Link
                    id={element._event_id}
                    to={`/event/${element._event_id}`}
                    onClick={handleGetSelectedEvent}
                  >
                    <Button className="card-button" inverted color="teal" content="Go" size="mini" />
                  </Link>
                  <Card.Meta ><Image  size="mini" src={logolol} /></Card.Meta>
                  <Card.Meta className="nick-search">
                   <span className="nickname ">{element._creator}</span><span className={`rank ${rankClass}`}> {element._rank}</span>
                  </Card.Meta>
                  <Card.Description className="descript descript-spe desc-search">                    
                    "{element._description.length > 40
                      ? `${element._description.slice(0, 40)}...`
                      : element._description}"{/* "{element._description}" */}</Card.Description>
                  <Card.Description>
                    Event member: <span className="number">{element._player_count}</span>
                  </Card.Description>
                  <Card.Description>
                    Looking for {element._player_max - element._player_count}{' '}
                    more players
                  </Card.Description>
                  <Card.Description className="lang-search">
                      {element._langs && element._langs.map((lang) => {
                        return <Flag name={lang.icon} key={uuid()} />;
                      })}
                  </Card.Description>
                  {/* {element._langs && (
                      <div>
                        {element._langs.forEach((flag) => {
                          return (<Flag name={flag.label.toLowerCase()} />)
                        })}
                      </div>
                    )} */}
                  
                </Card.Content>
              </Card>
              </div>
            );
          })}
        </Card.Group>
      </div>
    </div>
  );
};

export default SearchEventPage;