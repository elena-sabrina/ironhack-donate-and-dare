import React, { Component } from "react";

import DaredStatusDareConfirmed from "./DaredStatusDareConfirmed";
import DaredStatusDareSent from "./DaredStatusDareSent";
import DaredStatusDareUploaded from "./DaredStatusDareUploaded";
import DaredStatusDareRejected from "./DaredStatusDareRejected";
import DaredStatusDareCanceled from "./DaredStatusDareCanceled";

export class DaredStati extends Component {
  constructor(props) {
    super(props);
    console.log("props B", this.props);
    console.log("props B dare", this.props.dare);
    this.state = {
      dare: props.dare
    };
  }

  handleVideoUploaded = async ({ dare }) => {
    console.log("lifting up B running");
    console.log("dare", dare);
    this.props.onVideoUpload({ dare });
  };

  render() {
    const { dare } = this.state;
    console.log(dare);
    return (
      <div>
        {(dare.status === "dare-sent" && (
          <DaredStatusDareSent
            dare={dare}
            onVideoPassed={this.handleVideoUploaded}
          />
        )) ||
          (dare.status === "video-uploaded" && (
            <DaredStatusDareUploaded
              dare={dare}
              onVideoPassed={this.handleVideoUploaded}
            />
          )) ||
          (dare.status === "confirmed" && (
            <DaredStatusDareConfirmed dare={dare} />
          )) ||
          (dare.status === "rejected" && (
            <DaredStatusDareRejected dare={dare} />
          )) ||
          (dare.status === "canceled" && (
            <DaredStatusDareCanceled dare={dare} />
          )) || <p> Status not found</p>}
      </div>
    );
  }
}

export default DaredStati;
