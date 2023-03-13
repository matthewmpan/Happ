import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Custom hook for handling input boxes
// saves us from creating onChange handlers for them individually
const useInput = init => {
  const [ value, setValue ] = useState(init);
  const onChange = e => {
    setValue(e.target.value);
  };
  // return the value with the onChange function instead of setValue function
  return [ value, onChange ];
};

function RestaurantForm({ Login, error }) {

  const [image, setImage] = useInput('');
  const [name, setName] = useInput('');
  const [address, setAddress] = useInput('');
  const [phone, setPhone] = useInput('');
  const [description, setDescription] = useInput('');
  const [sundayHours, setSundayHours] = useInput('');
  const [mondayHours, setMondayHours] = useInput('');
  const [tuesdayHours, setTuesdayHours] = useInput('');
  const [wednesdayHours, setWednesdayHours] = useInput('');
  const [thursdayHours, setThursdayHours] = useInput('');
  const [fridayHours, setFridayHours] = useInput('');
  const [saturdayHours, setSaturdayHours] = useInput('');


  const saveRestaurant = () => {
    console.log('in saveRestaurant')
    // check if name is empty
    if (name !== '') {

      const hours = [[sundayHours], [mondayHours], [tuesdayHours], [wednesdayHours], [thursdayHours], [fridayHours], [saturdayHours]];
      
      const body = {
        image,
        name,
        address,
        phone,
        description,
        hours
      };
      fetch('/api/addRestaurant', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(body)
      })
        .then(resp => resp.json())
        .then((data) => {
          console.log(data);
        })
        .catch(err => console.log('CreateCharacter fetch /api/character: ERROR: ', err));
    }

    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
      input.value = '';
    })

  };


  return (
    <section className="mainSection createRestaurantContainer">
      <header className="pageHeader">
      </header>
      <article className="card createRestaurant">
        <h3>Enter your restaurant details</h3>
        <div className="createRestaurantFields">
          <label htmlFor="image">Image link: </label>
          <input name="image" value={image} onChange={setImage} />
        </div>
        <div className="createRestaurantFields">
          <label htmlFor="name">Name: </label>
          <input name="name" value={name} onChange={setName} />
        </div>
        <div className="createRestaurantFields">
          <label htmlFor="address">Address: </label>
          <input name="address" value={address} onChange={setAddress} />
        </div>
        <div className="createRestaurantFields">
          <label htmlFor="phone">Phone: </label>
          <input name="phone" value={phone} onChange={setPhone} />
        </div>
        <div className="createRestaurantFields">
          <label htmlFor="description">Description: </label>
          <input name="description" value={description} onChange={setDescription} />
        </div>
        <div className="createRestaurantFields">
          <label htmlFor="sundayHours">Sunday hours: </label>
          <input name="sundayHours" value={sundayHours} onChange={setSundayHours} />
        </div>
        <div className="createRestaurantFields">
          <label htmlFor="mondayHours">Monday hours: </label>
          <input name="mondayHours" value={mondayHours} onChange={setMondayHours} />
        </div>
        <div className="createRestaurantFields">
          <label htmlFor="tuesdayHours">Tuesday hours: </label>
          <input name="tuesdayHours" value={tuesdayHours} onChange={setTuesdayHours} />
        </div>
        <div className="createRestaurantFields">
          <label htmlFor="wednesdayHours">Wednesday hours: </label>
          <input name="wednesdayHours" value={wednesdayHours} onChange={setWednesdayHours} />
        </div>
        <div className="createRestaurantFields">
          <label htmlFor="thursdayHours">Thursday hours: </label>
          <input name="thursdayHours" value={thursdayHours} onChange={setThursdayHours} />
        </div>
        <div className="createRestaurantFields">
          <label htmlFor="fridayHours">Friday hours: </label>
          <input name="fridayHours" value={fridayHours} onChange={setFridayHours} />
        </div>
        <div className="createRestaurantFields">
          <label htmlFor="saturdayHours">Saturday hours: </label>
          <input name="saturdayHours" value={saturdayHours} onChange={setSaturdayHours} />
        </div>
        <div className="createRestaurantButtonContainer">
          <Link to="/" className="backLink">
            <button type="button" className="btnSecondaryThree">
              Cancel
            </button>
          </Link>
          <button type="button" className="btnMain" onClick={saveRestaurant}>Save</button>
        </div>
      </article>
      <Link to="/" className="backLink">
          <button type="button" className="btnSecondaryTwo">
              Back to all restaurants
          </button>
        </Link>
    </section>
  );



  // return (
  //   <form onSubmit={submitHandler}>
  //     <div className="form-inner">
  //       <h2>Login</h2>
  //       {(error !== "") ? ( <div className="error">{error}</div>) : ""}
  //       <div className="form-group">
  //         <label htmlFor="name">Name: </label>
  //         <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="email">Email: </label>
  //         <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="password">Password: </label>
  //         <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
  //       </div>
  //       <input type="submit" value="LOGIN" />
  //     </div>
  //   </form>
  // )
}

export default RestaurantForm;