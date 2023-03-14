import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdCard from './AdCard.jsx';
import SelectDay from './SelectDay.jsx';

function Ads() {

  const [fetchedAds, setFetchedAds] = useState(false);
  const [ads, setAds] = useState([]);
  const [adsJSX, setAdsJSX] = useState([]);
  const [day, setDay] = useState(new Date().getDay());

  function selectDay(event) {
    setDay(Number(event.target.value))
  }

  function deleteRestaurant(id) {
    const newAdsList = ads.filter(ad => ad._id !== id.toString());
    setAds(newAdsList);
  }

  useEffect(() => {
    fetch('/api/happy')
    .then(res => res.json())
    .then((ads) => {
      if (!Array.isArray(ads)) ads = [];
      setAds(ads);
      setFetchedAds(true);
    })
    .catch(err => console.log('Ads.componentDidMount: get ads: ERROR: ', err));
  }, []);

  useEffect(() => {
    const adElems = ads.map((ad) => {
      return (
        <AdCard
          key={ad._id}
          id={ad._id}
          info={ad}
          day={day}
          deleteRes={deleteRestaurant}
        />
      );
    });
    setAdsJSX(adElems);
  }, [ads]);

  return (
    <section className="mainSection">
      <header className="pageHeader">
        <SelectDay value={day} onChange={selectDay} />
        <Link to={'/create'}>
          <button
            type="button"
            className="btnSecondary"
          >
            Add a Happy Hour
          </button>
        </Link>
      </header>
      <div className="adContainer">
        {adsJSX}
      </div>
    </section>
  );

}

export default Ads;