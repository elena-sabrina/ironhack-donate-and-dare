import React, { Component } from "react";
import { loadDare } from "./../services/checkout.js";

class Checkout extends Component {
  state = {
    dare: null
  };

  async componentDidMount() {
    console.log("compdidmount checkout");
    console.log(this.props.match.params.id);
    const dare = await loadDare(this.props.match.params.id);
    console.log(dare);
    this.setState({ dare });
  }

  render() {
    return (
      <div>
        <h1>Checkout</h1>
        {(this.state.dare && (
          <>
            <h1>Donate your dare: </h1>
            <p>{this.state.dare.template.name}</p>
            <p>{this.state.dare.template.description}</p>
            <p>{this.state.dare.dared.name}</p>
          </>
        )) || <p>Error no dare found</p>}
      </div>
    );
  }
}

export default Checkout;
