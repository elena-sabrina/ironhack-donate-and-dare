import React, { Component } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ donor }) => {
  return (
    <div>
      <p>Navbar</p>
      {(donor && (
        <>
          <Link to='/profile'>View {donor.name}'s Profile</Link> <br />
          <Link to='/sign-out'>SignOut</Link>
        </>
      )) || (
        <>
          <Link to='/'>Home</Link> <br />
          <Link to='/dare/all'> Dares</Link> <br />
          <Link to='/sign-in'>SignIn</Link> <br />
          <Link to='/sign-up'>SignUp</Link>
        </>
      )}
    </div>
  );
};

export default Navbar;