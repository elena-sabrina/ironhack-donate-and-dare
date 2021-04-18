import React, { Component } from "react";
import { loadDonorAndDares, editProfile } from "./../services/profile.js";
import { Link } from "react-router-dom";

export class EditProfile extends Component {
  state = {
    name: null,
    email: null,
    password: null,
    donor: null
  };

  async componentDidMount() {
    const { dares, donor } = await loadDonorAndDares(
      this.props.match.params.id
    );

    this.setState({
      name: donor.name,
      email: donor.email,
      password: donor.password,
      donor
    });
  }

  handleFormSubmission = async (event) => {
    event.preventDefault();
    const { name, email, password } = this.state;
    const { donor } = await editProfile(this.props.match.params.id, {
      name,
      email,
      password
    });

    console.log("newdonorinfo", donor);

    this.props.history.push(`/profile/${donor._id}`);
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className='Body'>
        {(this.state.donor && (
          <>
            <h1>Edit Profile</h1>
            <form onSubmit={this.handleFormSubmission}>
              <label htmlFor='name-input'>Name</label>
              <input
                id='name-input'
                type='text'
                placeholder={this.state.name}
                name='name'
                defaultValue={this.state.name}
                onChange={this.handleInputChange}
              />
              <label htmlFor='email-input'>Email</label>
              <input
                id='email-input'
                type='email'
                placeholder={this.state.email}
                name='email'
                defaultValue={this.state.email}
                onChange={this.handleInputChange}
              />
              <label htmlFor='password-input'>Password</label>
              <input
                id='password-input'
                type='password'
                placeholder='***'
                name='password'
                defaultValue={this.state.password}
                onChange={this.handleInputChange}
              />
              <button>Update</button>
            </form>

            <button>
              <Link to='/profile/${donor._id}'>Go Back</Link>
            </button>
          </>
        )) || <p>Error no donor info found</p>}
      </div>
    );
  }
}

export default EditProfile;
