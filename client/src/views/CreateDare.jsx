import React, { Component } from "react";
import { createDare } from "./../services/dare";

export class CreateDare extends Component {
  state = {
    name: "",
    template: "",
    donor: "",
    dared: "",
    email: "",
    charity: "",
    status: "",
    video: ""
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
        <h1>CreateDare</h1>
        <form>
          <label htmlFor='input-name'>Name</label>
          <input
            id='input-name'
            name='name'
            type='text'
            placeholder='Name'
            value={this.state.name}
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor='input-template'>Template</label>
          <input
            id='input-template'
            name='template'
            type='text'
            placeholder='Template'
            value={this.state.template}
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor='input-donor'>Donor</label>
          <input
            id='input-donor'
            name='donor'
            type='text'
            placeholder='donor'
            value={this.state.donor}
            onChange={this.handleInputChange}
            required
          />
        </form>
      </div>
    );
  }
}

export default CreateDare;
