import React from 'react';
import RestaurantForm from './RestaurantForm.jsx';
import HappPng from '../images/HappBlackCrop.png';

function Feed() {
  return (
    <div>
      <img src={HappPng} alt="HappLogo" className="center" id="happLogo" ></img>
      <RestaurantForm />
    </div>
    
  );
}

export default Feed;