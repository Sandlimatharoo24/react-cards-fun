import React from 'react';
import Cards from './Cards';

export default function CardList() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <Cards 
          featureImage="https://sebhastian.com/static/eb0e936c0ef42ded5c6b8140ece37d3e/fcc29/feature-image.png"
          title="How To Make Interactive ReactJS Form"
          description="Let's write some interactive form with React"
          link="https://sebhastian.com/interactive-react-form"
          />
        </div>
        <div className="col-sm-4">
          <Cards
          featureImage="https://cdn-images-1.medium.com/max/1600/1*pMUHe42kIC3wNbdfu8oeFw.png"
          title="React Full Stack Tutorial"
          description="Let’s build a full stack MongoDB, React, Node and Express (MERN) app"
          link="https://medium.com/javascript-in-plain-english/full-stack-mongodb-react-node-js-express-js-in-one-simple-app-6cc8ed6de274" />
        </div>
        <div className="col-sm-4">
          <Cards 
          featureImage="https://cdn-images-1.medium.com/max/800/1*jhD-rWxuFvo17Q1Mw6LuEw.jpeg"
          title="React.Js efficient server rendering"
          description="Using ReactJS, ES6 & JSX to Build a UI (the rise of MERN)"
          link="https://hackernoon.com/react-js-efficient-server-rending-5dcb2a0ae14a"/>
        </div>
      </div>
    );
  }

