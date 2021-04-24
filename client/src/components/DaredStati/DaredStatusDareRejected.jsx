import React, { Component } from "react";

import { videoUploaded } from "./../../services/darestatus.js";

import DareItem from "../DareItem";
import "./DareStatusModul.scss";

export class DaredStatusDareRejected extends Component {
  constructor(props) {
    super(props);

    console.log("props C", this.props);
    console.log("props C dare", this.props.dare);
    this.state = {
      dare: props.dare,
      video: null
    };
  }

  handleUploadVideoSubmission = async (event) => {
    event.preventDefault();
    const { video } = this.state;
    console.log(video);

    const { dare } = await videoUploaded(this.state.dare._id, {
      video
    });
    console.log(dare.video);
    this.props.onVideoPassed({ dare });
  };

  handleUrlInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.video);
  };

  render() {
    return (
      <div className='Body DareStatusModul'>
        <h1>
          Hey {this.state.dare.dared.name},{this.state.dare.donor.name} has
          rejected your dare. Try again.
        </h1>
        <div className='side-by-side'>
          <div className='Left'>
            <form>
              <input
                id='input-url'
                name='video'
                type='url'
                value={this.state.video}
                placebolder='http://'
                onChange={this.handleUrlInputChange}
                onblur='checkURL(this)'
                required
              />

              <button onClick={this.handleUploadVideoSubmission}>Upload</button>
            </form>

            <h5>Dare Status</h5>
            <p>Upload a video of you doing the dare to enable ... </p>
          </div>

          <div className='Dare'>
            <DareItem dare={this.state.dare} donor={this.state.dare.donor} />
          </div>
        </div>
      </div>
    );
  }
}

export default DaredStatusDareRejected;
