import React, { Component } from "react";
import { createDare, loadTemplate } from "./../services/dare.js";

import TemplateItem from "../components/TemplateItem";

import "./../styles/CreateDare.scss";

export class CreateDare extends Component {
  state = {
    template: null,
    daredname: "",
    daredemail: "",
    price: "",
    charity: ""
  };

  async componentDidMount() {
    const template = await loadTemplate(this.props.match.params.id);
    this.setState({ template });
  }

  handleFormSubmission = async (event) => {
    event.preventDefault();
    const { daredname, daredemail, price, charity } = this.state;
    console.log(price);
    console.log(charity);
    const data = {
      daredname,
      daredemail,
      price,
      charity
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
    //const { name, template, daredname, daredemail } = this.state;

    return (
      <div className='Body CreateDare'>
        {(this.state.template && (
          <>
            <h1>Create {this.state.template.name}</h1>
            <div className='side-by-side'>
              <form onSubmit={this.handleFormSubmission}>
                <p>Whom do you want to send your dare to?</p>

                <input
                  id='input-daredname'
                  name='daredname'
                  type='text'
                  placeholder='Name'
                  value={this.state.daredname}
                  onChange={this.handleInputChange}
                  required
                />

                <input
                  id='input-daredemail'
                  name='daredemail'
                  type='text'
                  placeholder='Email'
                  value={this.state.daredemail}
                  onChange={this.handleInputChange}
                  required
                />

                <p>Whom do you want to donate your dare to?</p>

                <select
                  id='input-charity'
                  name='charity'
                  value={this.state.charity}
                  onChange={this.handleInputChange}
                  required
                >
                  <option className='placeholder' value='' disabled>
                    Charity
                  </option>
                  <option value='bali-children'>Bali Children</option>
                  <option value='street-paw'>Street Paw</option>
                  <option value='solemen'>Solemen</option>
                </select>

                <p>Do you want to top-up your donation?</p>
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
              <div className='Template'>
                <TemplateItem template={this.state.template} />
              </div>
            </div>
          </>
        )) || <p>Error no template found</p>}
      </div>
    );
  }
}

export default CreateDare;
