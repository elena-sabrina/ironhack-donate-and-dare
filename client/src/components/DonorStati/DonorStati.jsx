import React, { Component } from "react";

import DonorStatusDareConfirmed from "./DonorStatusDareConfirmed";
import DonorStatusDareSent from "./DonorStatusDareSent";
import DonorStatusDareUploaded from "./DonorStatusDareUploaded";
import DonorStatusDareCanceled from "./DonorStatusDareCanceled";
import DonorStatusDareRejected from "./DonorStatusDareRejected";

export class DonorStati extends Component {
  constructor(props) {
    super(props);
    console.log("props B", this.props);
    console.log("props B dare", this.props.dare);
    this.state = {
      dare: props.dare
    };
  }

  handleStatusHasChanged = async ({ dare }) => {
    console.log("lifting up B running");
    console.log('dare',dare);
    this.props.onStatusChange({dare});
  };

  render() {
    const { dare } = this.state;
    console.log(dare);
    return (
      <div>
        {(dare.status === "dare-sent" && <DonorStatusDareSent dare={dare} />) ||
          (dare.status === "video-uploaded" && (
            <DonorStatusDareUploaded
              dare={dare}
              onStatusHasChanged={this.handleStatusHasChanged}
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
