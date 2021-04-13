import React, { Component } from "react";
import { loadDares } from "./../services/dare.js";

import DareList from "../components/DareList";

export class Profile extends Component {
  state = {
    dares: []
  };

  async componentDidMount() {
    console.log("moooouuuuuunting");
    const dares = await loadDares(this.props.match.params.id);
    console.log("comp mount found donor");
    this.setState({ dares });
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <h1>Hi this.props.donor.name</h1>
        <p>Email: this.props.donor.email</p>
        <p>Password: *** </p>

        <h2>Open dares</h2>
        <DareList dares={this.state.dares} />

        <h2>Donations</h2>
      </div>
    );
  }
}

export default Profile;
