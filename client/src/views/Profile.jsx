import React, { Component } from "react";
import { loadDonorAndDares } from "./../services/profile.js";
import { Link } from "react-router-dom";

import DareList from "../components/DareList";
import "./Profile.scss";

export class Profile extends Component {
  state = {
    dares: [],
    donor: null
  };

  async componentDidMount() {
    console.log("moooouuuuuunting");
    const { dares, donor } = await loadDonorAndDares(
      this.props.match.params.id
    );
    console.log("comp mount found donor & dares");
    console.log(donor);
    this.setState({ dares, donor });
  }

  render() {
    return (
      <div className='Body Profile'>
        {(this.state.donor && (
          <>
            <h1>Hello {this.state.donor.name}</h1>
            <section>
              <h2>My Details</h2>

              <p>Email: {this.state.donor.email}</p>
              <p>Password: *** </p>

              <button>
                <Link to={`/profile/${this.state.donor._id}/edit`}>
                  Edit Details
                </Link>
              </button>
            </section>
            <section>
              <h2>Open dares</h2>
              <div className='profile-darelist'>
                <DareList dares={this.state.dares} donor={this.state.donor} />
              </div>
            </section>

            <section>
              <h2>Donations</h2>
            </section>
          </>
        )) || <p>Error no donor found</p>}
      </div>
    );
  }
}

export default Profile;
