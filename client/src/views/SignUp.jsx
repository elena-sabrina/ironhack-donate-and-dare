import React, { Component } from "react";
import { signUp } from "./../services/authentication.js";
import { Link } from "react-router-dom";

export class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  handleFormSubmission = async (event) => {
    event.preventDefault();
    const { name, email, password } = this.state;
    const donor = await signUp({
      name,
      email,
      password
    });
    console.log(donor);
    this.props.onUserChange(donor);
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
        <h1>SignUp</h1>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor='name-input'>Name</label>
          <input
            id='name-input'
            type='text'
            placeholder='name'
            name='name'
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <label htmlFor='email-input'>Email</label>
          <input
            id='email-input'
            type='email'
            placeholder='email'
            name='email'
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <label htmlFor='password-input'>Password</label>
          <input
            id='password-input'
            type='password'
            placeholder='password'
            name='password'
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button>Sign Up</button>
        </form>
        <p>You have an account already?</p>
        <Link to='/sign-in'>SignIn</Link>
      </div>
    );
  }
}

export default SignUp;
