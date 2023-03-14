import React from 'react';
import HappPng from '../images/HappBlackCrop.png';
import Ads from './Ads.jsx';

function Home() {
  return (
    <div>
      <h1></h1>
      <img src={HappPng} alt="HappLogo" className="center" id="happLogo" ></img>
      <Ads />
    </div>
  );
}

export default Home;