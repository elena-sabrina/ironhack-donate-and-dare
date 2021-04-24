import React, { Component } from "react";
import { loadDareforDonor } from "./../services/darestatus.js";

import DonorStati from "../components/DonorStati/DonorStati";

export class ActiveDonor extends Component {
  constructor(props) {
    super(props);
    console.log("props A", this.props);
    console.log("props A dare", this.props.dare);
    this.state = {
      dare: null
    };
  }

  async loadDare() {
    const dare = await loadDareforDonor(this.props.match.params.id);
    this.setState({ dare });
  }

  componentDidMount() {
    this.loadDare();
  }

  handleStatusChangeSubmission = async ({ dare }) => {
    console.log("lifting up B running");
    console.log("dare", dare);
    this.setState({ dare: dare });
    this.loadDare();
  };

  render() {
    return (
      <div className='Body'>
        {(this.state.dare && (
          <>
            <DonorStati
              dare={this.state.dare}
              onStatusChange={this.handleStatusChangeSubmission}
            />
          </>
        )) || <p>Error no dare found</p>}
      </div>
    );
  }
}

export default ActiveDonor;
