import React from 'react';

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const AdCard = ({id, info, day, deleteRes}) => {
  
  const {image, name, address, phone, description, hours} = info;

  const deleteRestaurant = () => {
    console.log('in deleteRestaurant')
    // check if name is empty
    
    // const body = {
    //   name
    // };
    fetch(`/api/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      // body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then((data) => {
        // console.log(data);
        deleteRes(id);
      })
      .catch(err => console.log('DeleteRestaurant ERROR: ', err));
  };

  return (
    <article className="card AdCard">
      <div>
        <img src={image ? image :'https://s3-media0.fl.yelpcdn.com/bphoto/_KPtdziiR3p0ScDlCBfM8g/o.jpg'} alt="Restaurant Image" className="adPhoto" ></img>
      </div>
      <div className="AdHeadContainer">
        <h3 className="AdName">{name}</h3>
      </div>
      <ul className="AdDetailsList">
        <li className="adDetail">Address: {address ? address : ''}</li>
        <li className="adDetail">Phone: {phone ? phone : '(xxx) xxx-xxxx'}</li>
        <li className="adDetail">Description: {description ? description : 'Happy Hour'}</li>
        <li className="adDetail">{weekday[day]} Happy Hour: {hours[day].join(', ')}</li>
      </ul>
      <button onClick={deleteRestaurant} className="adDeleteButton" >Delete Restaurant</button>
    </article>
  );
};

export default AdCard;
