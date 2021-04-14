import React, { Component } from "react";
import { createDare, loadTemplate } from "./../services/dare.js";

export class CreateDare extends Component {
  state = {
    template: null,
    daredname: "",
    daredemail: "",
    price: ""
  };

  async componentDidMount() {
    const template = await loadTemplate(this.props.match.params.id);
    this.setState({ template });
  }

  handleFormSubmission = async (event) => {
    event.preventDefault();
    const { daredname, daredemail, price } = this.state;
    const data = {
      daredname,
      daredemail,
      price
    };
    /*
    const body = new FormData();
    for (let key in data) {
      const value = data[key];
      console.log(value);
      if (value instanceof Array) {
        for (let item of value) {
          body.append(key, item);
          console.log("body:");
          console.log(body);
        }
      } else {
        body.append(key, value);
      }
    }
    */
    const dare = await createDare(this.props.match.params.id, data);
    this.props.history.push(`/checkout/${dare._id}`);
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
              <label htmlFor='input-daredname'>Dared Name</label>
              <input
                id='input-daredname'
                name='daredname'
                type='text'
                placeholder='Who do you want to dare?'
                value={this.state.daredname}
                onChange={this.handleInputChange}
                required
              />
              <label htmlFor='input-daredemail'>Dared Email</label>
              <input
                id='input-daredemail'
                name='daredemail'
                type='text'
                placeholder='What is their email?'
                value={this.state.daredemail}
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
