import React, { Component } from 'react';
import HappPng from '../images/HappBlackCrop.png';
import Ads from './Ads.jsx';

class Home extends Component {
  render() {
    return (
      <div>
        <h1></h1>
        <img src={HappPng} alt="HappLogo" className="center" id="happLogo" ></img>
        <Ads />
      </div>
    );
  }
}

export default Home;