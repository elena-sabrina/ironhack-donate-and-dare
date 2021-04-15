import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./../styles/Navbar.scss";

const Navbar = ({ donor }) => {
  return (
    <nav className='Navbar'>
      <div className='Nav'>
        <p>Donate&Dare</p>
        <div className='Menu'>
          {(donor && (
            <>
              <Link to='/'>Home</Link>
              <Link to='/dare/all'> Dares</Link>
              <Link to={`/profile/${donor._id}`}>Profile</Link>
             
            </>
          )) || (
            <>
              <Link to='/'>Home</Link>
              <Link to='/dare/all'> Dares</Link>
              <Link to='/sign-in'>SignIn</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
