import React, { Component } from "react";
import { Link } from "react-router-dom";

import { confirmorRejectDare } from "./../../services/darestatus.js";

import DareItem from "./../DareItem";
import "./../DaredStati/DareStatusModul.scss";

export class DonorStatusDareUploaded extends Component {
  constructor(props) {
    super(props);

    console.log("props C", this.props);
    console.log("props C dare", this.props.dare);
    this.state = {
      dare: props.dare
    };
  }
  handleDareConfirmation = async (event) => {
    console.log("lifting up C running");
    event.preventDefault();
    const { dare } = await confirmorRejectDare(this.state.dare._id, {
      confirmation: "confirming"
    });
    // this.setState({ dare: dare });
    this.props.onStatusHasChanged({ dare });
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
      <div className='Body DareStatusModul'>
        <h1>
          Hey {this.state.dare.donor.name},<br />
          {this.state.dare.dared.name}
          has fulfilled your dare
        </h1>
        <div className='side-by-side'>
          <div className='Left'>
            <h5>
              {this.state.dare.dared.name} has sent you the following dare
              confirmation:
            </h5>
            <p>Watch the video and confirm the dare</p>
            <button>
              <Link to={this.state.dare.video} className='Logo'>
                Watch video
              </Link>
            </button>
            <button onClick={this.handleDareConfirmation}>Confirm Dare</button>
            <button onClick={this.handleDareRejection}>Reject Dare</button>

            <br />
            <h5>Dare Status</h5>
            <p>
              {this.state.dare.dared.name} has uploaded dare video. Awaiting
              your confirmation.
            </p>
          </div>
          <div className='Dare'>
            <DareItem dare={this.state.dare} donor={this.state.dare.donor} />
          </div>
        </div>
      </div>
    );
  }
}

export default DonorStatusDareUploaded;
