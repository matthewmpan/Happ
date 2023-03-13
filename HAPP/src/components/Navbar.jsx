import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ads">Ads</Link>
          </li>
          <li>
            <Link to="/feed">Feed</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;