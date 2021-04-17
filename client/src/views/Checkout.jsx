import React, { Component } from "react";
import { loadDare } from "./../services/checkout.js";
import PaymentForm from "../components/PaymentForm";

const StripePublicApiKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

class Checkout extends Component {
  state = {
    dare: null
  };

  async componentDidMount() {
    console.log("compdidmount checkout");
    console.log(this.props.match.params.id);
    const dare = await loadDare(this.props.match.params.id);
    this.setState({ dare });
  }

  handlePaymentFormSubmission = ({ token }) => {
    console.log("Paymentform submitted and token received", token);
  };

  render() {
    return (
      <div className='Body'>
        {(this.state.dare && (
          <>
            <h1>
              Thank you for donating {this.state.dare.price} to
              {this.state.dare.charity}
            </h1>
            <PaymentForm
              publicKey={StripePublicApiKey}
              onSubmit={this.handlePaymentFormSubmission}
            />
          </>
        )) || <p>Error no dare found</p>}
      </div>
    );
  }
}

export default Checkout;
