import React, { Component } from "react";

import { videoUploaded } from "./../../services/darestatus.js";

import DareItem from "../DareItem";

export class DaredStatusDareSent extends Component {
  constructor(props) {
    super(props);

    console.log("props C", this.props);
    console.log("props C dare", this.props.dare);
    this.state = {
      dare: props.dare
    };
  }

  handleUploadVideoSubmission = async (event) => {
    event.preventDefault();
    console.log("handleUploadVideoSubmission ruuning");
    const body = new FormData();
    console.log(new FormData(););
    /* const { video } = event.target;
    console.log(video);
    body.append(video);

    console.log(body);
    const { dare } = await videoUploaded(this.state.dare._id, {
      body
    });

    this.props.onVideoPassed({ dare });*/
  };

  handleFileInputChange = (event) => {
    const { name, files } = event.target;
    const arrayOfFiles = [];
    for (const file of files) arrayOfFiles.push(file);
    this.setState({
      [name]: arrayOfFiles
    });
  };

  render() {
    return (
      <div>
        <h1>
          Hey {this.state.dare.dared.name},you've been dared by{" "}
          {this.state.dare.donor.name}
        </h1>
        <form>
          <input
            id='input-video'
            name='file'
            type='file'
            value={this.state.video}
            onChange={this.handleFileInputChange}
            required
          />

          <button onClick={this.handleUploadVideoSubmission}>Upload</button>
        </form>
        <h5>Dare Status</h5>
        <p>Upload a video of you doing the dare to enable ... </p>
        <DareItem dare={this.state.dare} donor={this.state.dare.donor} />

      
    );
  }
}

export default DaredStatusDareSent;
