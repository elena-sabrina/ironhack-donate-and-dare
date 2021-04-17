import React, { Component } from "react";
import { createDare, loadTemplate } from "./../services/dare.js";

import {
  Elements,
  ElementsConsumer,
  CardElement
} from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";

const cardStyles = {
  base: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    fontSize: "16px",
    fontSmoothing: "antialiased"
  }
};

class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      template: null,
      daredname: "",
      daredemail: "",
      price: "",
      charity: "",
      stripePromise: loadStripe(this.props.publicKey)
    };
  }

  async componentDidMount() {
    const template = await loadTemplate(this.props.match.params.id);
    this.setState({ template });
  }

  handleFormSubmission = async (event, { elements, stripe }) => {
    event.preventDefault();

    const { daredname, daredemail, price, charity } = this.state;

    const data = {
      daredname,
      daredemail,
      price,
      charity
    };

    const dare = await createDare(this.props.match.params.id, data);

    if (!elements || !stripe) return;
    const cardElement = elements.getElement(CardElement);

    const result = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement
    });

    const { paymentMethod, error } = result;

    if (error) {
      throw error;
    } else {
      const token = paymentMethod.id;
      this.props.onSubmit({ token });
    }
    this.props.history.push(`/${dare._id}/donor`);
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Elements stripe={this.state.stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => {
            return (
              <form
                onSubmit={(event) =>
                  this.handleFormSubmission(event, { elements, stripe })
                }
              >
                {this.props.children}

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
                  placeholder='this.state.template.price'
                  value={this.state.price}
                  onChange={this.handleInputChange}
                  required
                />

                <label>Credit Card Details</label>
                <div>
                  <CardElement options={{ style: cardStyles }} />
                </div>
                <button>Donate Now</button>
              </form>
            );
          }}
        </ElementsConsumer>
      </Elements>
    );
  }
}

export default PaymentForm;
