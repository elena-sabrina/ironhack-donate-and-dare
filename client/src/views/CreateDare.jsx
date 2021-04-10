import React, { Component } from "react";
import { createDare, loadTemplate } from "./../services/dare.js";

export class CreateDare extends Component {
  state = {
    template: null,
    donor: "",
    dared: "",
    price: ""
  };

  async componentDidMount() {
    const template = await loadTemplate(this.props.match.params.id);
    this.setState({ template });
    console.log("component did mount");
    console.log(this.state.template);
  }

  handleFormSubmission = async (event) => {
    console.log("starting handleFormSubmission");
    event.preventDefault();
    const templatedata = this.state.template;
    const donordata = this.props.donor;
    const { template, donor, dared, price } = this.state;
    const data = {
      template: templatedata,
      donor: donordata,
      dared,
      price
    };
    console.log("data");
    console.log(data);
    const body = new FormData();
    console.log(body);
    for (let key in data) {
      const value = data[key];
      console.log(value);
      if (value instanceof Array) {
        for (let item of value) {
          body.append(key, item);
        }
      } else {
        body.append(key, value);
      }
    }
    const dare = await createDare(this.props.match.params.id);
    console.log(dare);
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
        {(this.state.template && (
          <>
            <h1>Create {this.state.template.name}</h1>

            <form onSubmit={this.handleFormSubmission}>
              <p>Template: {this.state.template.name}</p>
              <p>Donor: {this.props.donor.name}</p>
              <label htmlFor='input-dared'>Dared</label>
              <input
                id='input-dared'
                name='dared'
                type='text'
                placeholder='Who do you want to dare?'
                value={this.state.dared}
                onChange={this.handleInputChange}
                required
              />
              <input
                id='input-price'
                name='price'
                type='number'
                placeholder={this.state.template.price}
                value={this.state.price}
                onChange={this.handleInputChange}
                required
              />
              <button>Create</button>
            </form>
          </>
        )) || <p>Error no template found</p>}
      </div>
    );
  }
}

export default CreateDare;
