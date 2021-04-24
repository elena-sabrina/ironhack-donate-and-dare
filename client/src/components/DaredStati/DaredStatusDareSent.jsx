import React, { Component } from "react";

import { videoUploaded } from "./../../services/darestatus.js";

import DareItem from "../DareItem";
import "./DareStatusModul.scss";

export class DaredStatusDareSent extends Component {
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
          Hey {this.state.dare.dared.name},<br /> you've been dared.
        </h1>

        <div className='side-by-side'>
          <div className='Left'>
            <h5>Robin has sent you a dare. </h5>
            <p>
              If you complete the dare, Robin will donate{" "}
              {this.state.dare.price} Euros to {this.state.dare.charity}.
            </p>
            <p>Have you completed your dare?</p>

            <form>
              <input
                id='input-url'
                name='video'
                type='text'
                value={this.state.video}
                placeholder='http://'
                onChange={this.handleUrlInputChange}
                onblur='checkURL(this)'
                required
              />

              <button onClick={this.handleUploadVideoSubmission}>
                Yes, Upload Dare
              </button>
            </form>
            <h5>Dare Status</h5>
            <p>
              After your video has been uploaded, {this.state.dare.donor.name}{" "}
              will have to confirm your dare.{" "}
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

export default DaredStatusDareSent;
