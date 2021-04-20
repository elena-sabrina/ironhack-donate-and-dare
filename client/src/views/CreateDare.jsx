import React, { Component } from "react";

import "./CreateDare.scss";
import { createDare, loadTemplate } from "./../services/createdare.js";

import TemplateItem from "../components/TemplateItem";
import PaymentForm from "../components/PaymentForm";

const StripePublicApiKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

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

  handlePaymentFormSubmission = async ({ token }) => {
    const { daredname, daredemail, price, charity } = this.state;
    const oldprice = this.state.template.price;

    if (oldprice <= price) {
      const data = {
        daredname,
        daredemail,
        price,
        charity,
        token
      };
      const { dare, payment } = await createDare(
        this.props.match.params.id,
        data
      );
      console.log("payment", payment);
      this.props.history.push(`/dare/create/${dare._id}/confirmation`);
    } else {
      alert(
        "Hello! You cant donate less. But you're welcome to donate more..."
      );
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  /*handlePriceInputChange = (event) => {
    const { name, value } = event.target;
    const price = this.state.template.price;

    if (price <= value) {
      this.setState({
        [name]: value
      });
    } else {
      alert(
        "Hello! You cant donate less. But you're welcome to donate more..."
      );
    }
  };*/

  render() {
    return (
      <div className='Body CreateDare'>
        {(this.state.template && (
          <>
            <h1>Create {this.state.template.name}</h1>
            <div className='side-by-side'>
              <PaymentForm
                publicKey={StripePublicApiKey}
                onPaymentFormSubmit={this.handlePaymentFormSubmission}
              >
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
              </PaymentForm>

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
