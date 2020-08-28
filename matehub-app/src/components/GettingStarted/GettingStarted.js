import React from 'react';
import './style.scss';
import { Image } from 'semantic-ui-react';

const GettingStarted = () => {
  return (
    <div className="gettingstarted">
      <h1 className="gettingstarted-titre">Getting started</h1>
      <div className="gettingstarted-bloc">
        <div className="gettingstarted-bloc-text">
          <h2 className="gettingstarted-bloc-titre">Lorem ipsum dolor</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          eleifend tincidunt augue in sodales. Maecenas lobortis lobortis
          congue. Duis eleifend ac augue at fermentum. Proin blandit velit eu ex
          fermentum egestas.
        </div>
        <div className="gettingstarted-bloc-image">
          <Image
            src="https://react.semantic-ui.com/images/wireframe/image.png"
            fluid
          />
        </div>
      </div>

      <div className="gettingstarted-bloc2">
        <div className="gettingstarted-bloc-text2">
          <h2 className="gettingstarted-bloc-titre2">Lorem ipsum dolor</h2>
          <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          eleifend tincidunt augue in sodales. Maecenas lobortis lobortis
          congue. Duis eleifend ac augue at fermentum. Proin blandit velit eu ex
          fermentum egestas.</div>
        </div>
        <div className="gettingstarted-bloc-image2">
          <Image
            src="https://react.semantic-ui.com/images/wireframe/image.png"
            fluid
          />
        </div>
      </div>

    </div>
  );
};

export default GettingStarted;
