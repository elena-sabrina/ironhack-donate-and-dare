import React, { Component } from "react";
import { loadDares } from "./../services/dare.js";
import { Link } from "react-router-dom";

import DareList from "../components/DareList";

export class Profile extends Component {
  state = {
    dares: [],
    donor: null
  };

  async componentDidMount() {
    console.log("moooouuuuuunting");
    const { dares, donor } = await loadDares(this.props.match.params.id);
    console.log("comp mount found donor & dares");
    console.log(donor);
    this.setState({ dares, donor });
  }

  render() {
    return (
      <div className="Body">
        {(this.state.donor && (
          <>
            <h1>Hello</h1>
            <h1>Hi {this.state.donor.name}</h1>
            <p>Email: {this.state.donor.email}</p>
            <p>Password: *** </p>

            <h2>Open dares</h2>
            <DareList dares={this.state.dares} donor={this.state.donor} />

            <h2>Donations</h2>
            <Link to='/sign-out'>SignOut</Link>
          </>
        )) || <p>Error no donor found</p>}
      </div>
    );
  }
}

export default Profile;
