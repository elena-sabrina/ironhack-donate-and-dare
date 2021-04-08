import React, { Component } from "react";
import { signIn } from "./../services/authentication.js";

export class SignIn extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  handleFormSubmission = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const donor = await signIn({
      email,
      password
    });
    console.log("donor:");
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
      <div>
        <h1>SignIn</h1>
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
      </div>
    );
  }
}

export default SignIn;
