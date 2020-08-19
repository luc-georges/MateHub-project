import React from 'react';
import titrelol from '../../assets/titrelol.png';
import './style.scss';

const LastestNews = () => {
  return (
    <div className="LastestNews">
      <h2 className="titre">Lastest News</h2>
      <div className="LastestNews-module">
        <a href="/">
          <img
            src={titrelol}
            alt="lollogo"
            className="LastestNews-module-image"
          />
        </a>
      </div>
    </div>
  );
};

export default LastestNews;
