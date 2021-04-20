import React, { Component } from "react";

//import { videoUploaded } from "./../../services/darestatus.js";

import DareItem from "./../DareItem";

export class DaredStatusDareSent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dare: props.dare
    };
  }

  handleUploadVideoSubmission = async (event) => {
    console.log("handleUploadVideoSubmission running");
    /*const { video } = this.state;
    console.log("video");
    console.log(video);

    const dare = await videoUploaded(this.props.match.params.id, video);
    console.log("newdareinfo", dare);

    //this.props.history.push(`/dare/${this.state.dare._id}/dared`);
    this.props.history.push("/");

    */
  };

  handleInputChange = (event) => {
    console.log("handleInputChange running");
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <h1>
          Hey {this.state.dare.dared.name},you've been dared by{" "}
          {this.state.dare.donor.name}
        </h1>
        <form onUploadVideoSubmit={this.handleUploadVideoSubmission}>
          <input
            id='input-video'
            name='video'
            type='text'
            placeholder='Upload Video'
            value={this.state.video}
            onChange={this.handleInputChange}
            required
          />
          <button>Upload</button>
        </form>
        <h5>Dare Status</h5>
        <p>Upload a video of you doing the dare to enable ... </p>
        <DareItem dare={this.state.dare} donor={this.state.dare.donor} />
      </div>
    );
  }
}

export default DaredStatusDareSent;
