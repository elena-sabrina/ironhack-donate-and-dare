import React, { Component } from "react";

export class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Hi {this.props.donor.name}</h1>
        <p>Email: {this.props.donor.email}</p>
        <p>Password: *** </p>

        <h2>Open dares</h2>
        <h2>Donations</h2>
      </div>
    );
  }
}

export default Profile;
