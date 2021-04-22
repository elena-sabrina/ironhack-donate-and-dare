import React, { Component } from "react";

import DonorStatusDareConfirmed from "./DonorStatusDareConfirmed";
import DonorStatusDareSent from "./DonorStatusDareSent";
import DonorStatusDareUploaded from "./DonorStatusDareUploaded";
import DonorStatusDareCanceled from "./DonorStatusDareCanceled";
import DonorStatusDareRejected from "./DonorStatusDareRejected";

export class DonorStati extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dare: props.dare
    };
  }

  async StatusHasChanged() {
    console.log(this.state.dare.status);
    /* this.setState = ({
      this.state.dare: dare;
    });*/
    this.props.onStatusChange();
  }

  render() {
    const { dare } = this.state;
    console.log(dare);
    return (
      <div>
        {(dare.status === "dare-sent" && <DonorStatusDareSent dare={dare} />) ||
          (dare.status === "video-uploaded" && (
            <DonorStatusDareUploaded
              dare={dare}
              onStatusHasChange={this.StatusHasChanged}
            />
          )) ||
          (dare.status === "confirmed" && (
            <DonorStatusDareConfirmed dare={dare} />
          )) ||
          (dare.status === "rejected" && (
            <DonorStatusDareRejected dare={dare} />
          )) ||
          (dare.status === "canceled" && (
            <DonorStatusDareCanceled dare={dare} />
          )) || <p> Status not found</p>}
      </div>
    );
  }
}
export default DonorStati;
