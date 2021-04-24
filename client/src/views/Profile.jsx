import React, { Component } from "react";
import { loadDonorAndDares } from "./../services/profile.js";
import { Link } from "react-router-dom";

import DareList from "../components/DareList";
import "./Profile.scss";

export class Profile extends Component {
  state = {
    daresent: null,
    darevideouploaded: null,
    dareconfirmed: null,
    darerejected: null,
    darecanceled: null,
    donor: null
  };

  async componentDidMount() {
    console.log("moooouuuuuunting");
    const {
      daresent,
      darevideouploaded,
      dareconfirmed,
      darerejected,
      darecanceled,
      donor
    } = await loadDonorAndDares(this.props.match.params.id);

    this.setState({
      daresent,
      darevideouploaded,
      dareconfirmed,
      darerejected,
      darecanceled,
      donor
    });
  }
  /* async componentDidMount() {
    console.log("moooouuuuuunting");
    const { dares, donor } = await loadDonorAndDares(
      this.props.match.params.id
    );
    console.log("comp mount found donor & dares");
    console.log(donor);
    this.setState({ dares, donor });
  }*/

  render() {
    const {
      daresent,
      darevideouploaded,
      dareconfirmed,
      darerejected,
      darecanceled,
      donor
    } = this.state;
    return (
      <div className='Body Profile'>
        {(donor && (
          <>
            <h1>Hello {donor.name}</h1>
            <div className='Details'>
              <h2>My Details</h2>

              <p>Email: {donor.email}</p>
              <p>Password: *** </p>

              <button>
                <Link to={`/profile/${donor._id}/edit`}>Edit Details</Link>
              </button>
            </div>
            <div className='Dares'>
              <h2>Dares </h2>

              {(daresent.length > 0 || darerejected.length > 0) && (
                <section>
                  <h3>Sent</h3>
                  <div className='profile-darelist'>
                    <DareList dares={daresent} donor={donor} />
                    <DareList dares={darerejected} donor={donor} />
                  </div>
                </section>
              )}

              {darevideouploaded.length > 0 && (
                <section>
                  <h3>To be confirmed</h3>
                  <div className='profile-darelist'>
                    <DareList dares={darevideouploaded} donor={donor} />
                  </div>
                </section>
              )}

              {dareconfirmed.length > 0 && (
                <section>
                  <h3>Donated</h3>

                  <div className='profile-darelist'>
                    <DareList dares={dareconfirmed} donor={donor} />
                  </div>
                </section>
              )}

              {darecanceled.length > 0 && (
                <section>
                  <h3>Rejected</h3>

                  <div className='profile-darelist'>
                    <DareList dares={darecanceled} donor={donor} />
                  </div>
                </section>
              )}
            </div>
          </>
        )) || <p>Error no donor found</p>}
      </div>
    );
  }
}

export default Profile;
