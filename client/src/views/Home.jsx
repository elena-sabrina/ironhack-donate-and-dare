import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="Body">
        <h1>Home</h1>
        <Link to='/dare/all'> Dares</Link>

        <Link to='/checkout'> Checkout</Link>
        <Link to='dare/create/'> Create Dare</Link>
      </div>
    );
  }
}

export default Home;
