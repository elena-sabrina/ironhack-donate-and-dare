import React, { Component } from "react";

import { confirmorRejectDare } from "./../../services/darestatus.js";

import DareItem from "./../DareItem";

export class DonorStatusDareUploaded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dare: props.dare
    };
  }
  handleDareConfirmation = async (event) => {
    event.preventDefault();
    const { dare } = await confirmorRejectDare(this.state.dare._id, {
      confirmation: "confirming"
    });
    console.log(dare._id);
    this.props.onStatusHasChange();
  };

  handleDareRejection = async (event) => {
    event.preventDefault();

    const { dare } = await confirmorRejectDare(this.state.dare._id, {
      confirmation: "rejected"
    });
    //const location = event.view.location.href;
    //console.log(location);
    //reload(location);
  };

  render() {
    return (
      <div>
        <h1>
          Hey {this.state.dare.donor.name},{this.state.dare.dared.name}
          has fulfilled your dare
        </h1>
        <h5>
          ,{this.state.dare.dared.name} has sent you the following dare
          confirmation:
        </h5>
        <p>Watch the video and confirm the dare</p>
        <button>Watch video</button>
        <button onClick={this.handleDareConfirmation}>Confirm Dare</button>
        <button onClick={this.handleDareRejection}>Reject Dare</button>

        <h5>Dare Status</h5>
        <p>
          {this.state.dare.dared.name} has uploaded dare video. Awaiting your
          confirmation.
        </p>
        <DareItem dare={this.state.dare} donor={this.state.dare.donor} />
      </div>
    );
  }
}

export default DonorStatusDareUploaded;
