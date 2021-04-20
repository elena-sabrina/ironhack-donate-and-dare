import React, { Component } from "react";
import { signIn } from "./../services/authentication.js";
import { Link } from "react-router-dom";

export class SignIn extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  handleFormSubmission = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const donor = await signIn({ email, password });
    this.props.onDonorChange(donor);
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
        <h1>Sign In</h1>
        <form onSubmit={this.handleFormSubmission}>
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
          <button>Sign In</button>
        </form>
        <p>You don't have an account yet? </p>
        <Link to='/sign-up'>SignUp</Link>
      </div>
    );
  }
}

export default SignIn;
