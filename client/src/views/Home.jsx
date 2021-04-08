import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to='/dare/all'> Dares</Link>
        <Link to='/profile'> Profile</Link>
        <Link to='/checkout'> Checkout</Link>
        <Link to='/checkout/confirmation'> Checkout Conf</Link>
      </div>
    );
  }
}

export default Home;
