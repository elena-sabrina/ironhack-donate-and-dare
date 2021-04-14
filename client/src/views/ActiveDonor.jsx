import React, { Component } from "react";
import { loadDareforDonor } from "./../services/dare.js";

export class Dare extends Component {
  state = {
    dare: null
  };

  async componentDidMount() {
    const dare = await loadDareforDonor(this.props.match.params.id);
    console.log(dare);
    this.setState({ dare });
  }

  render() {
    return (
      <div>
        {(this.state.dare && (
          <>
            <h1>Donor: You have dared x </h1>

            <p>{this.state.dare.template._id}</p>
          </>
        )) || <p>Error no dare found</p>}
      </div>
    );
  }
}

export default Dare;
