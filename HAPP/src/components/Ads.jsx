import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdCard from './AdCard.jsx';
import SelectDay from './SelectDay.jsx';

class Ads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedAds: false,
      ads: [],
      day: new Date().getDay(),
    };
    this.selectDay = this.selectDay.bind(this);
    this.deleteRestaurant = this.deleteRestaurant.bind(this);
  }

  selectDay(event) {
    this.setState({day: Number(event.target.value)});
  }

  deleteRestaurant(id) {
    const newList = this.state.ads.filter(ad => ad._id !== id)
    this.setState({ads: newList});
  }

  componentDidMount() {
    
    fetch('/api/happy')
      .then(res => res.json())
      .then((ads) => {
        console.log(ads);
        if (!Array.isArray(ads)) ads = [];
        return this.setState({
          ads,
          fetchedAds: true
        });
      })
      .catch(err => console.log('Ads.componentDidMount: get ads: ERROR: ', err));
  }

  // This was made to rerender the page after deleting a card, but it creates an infinite rerendering/fetch loop
  // componentDidUpdate() {
    
  //   fetch('/api/happy')
  //     .then(res => res.json())
  //     .then((ads) => {
  //       if (!Array.isArray(ads)) ads = [];
  //       return this.setState({
  //         ads,
  //         fetchedAds: true
  //       });
  //     })
  //     .catch(err => console.log('Ads.componentDidMount: get ads: ERROR: ', err));
  // }


  render() {

    if (!this.state.fetchedAds) return (
      <div>
        <h1>Loading data, please wait...</h1>
      </div>
    );

    const { ads } = this.state;

    if (!ads) return null;

    if (!ads.length) return (
      <div>Sorry, no ads found</div>
    );

    const adElems = ads.map((ad, i) => {
      return (
        <AdCard
          key={i}
          id={ad._id}
          info={ad}
          day={this.state.day}
          deleteRes={this.deleteRestaurant}
        />
      );
    });

    return (
      <section className="mainSection">
        <header className="pageHeader">
          <SelectDay value={this.state.day} onChange={this.selectDay.bind(this)} />
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
          {adElems}
        </div>
      </section>
    );
  }
}

export default Ads;