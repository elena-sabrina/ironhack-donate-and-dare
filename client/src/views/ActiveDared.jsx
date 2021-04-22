import React, { Component } from "react";
import { loadDareforDared } from "./../services/darestatus.js";

import DaredStati from "../components/DaredStati/DaredStati";

export class ActiveDared extends Component {
  constructor(props) {
    super(props);
    console.log("props A", this.props);
    console.log("props A dare", this.props.dare);
    this.state = {
      dare: null
    };
  }

  async componentDidMount() {
    const dare = await loadDareforDared(this.props.match.params.id);
    this.setState({ dare });
  }
  handleVideoUploadSubmision = async ({ dare }) => {
    console.log("lifting up B running");
    console.log("dare", dare);
    this.setState({ dare: dare });
    this.props.history.push(`/dare/${this.state.dare._id}/dared`);
  };

  render() {
    return (
      <div className='Body'>
        {(this.state.dare && (
          <>
            <DaredStati
              dare={this.state.dare}
              onVideoUpload={this.handleVideoUploadSubmision}
            />
          </>
        )) || <p>Error no dare found</p>}
      </div>
    );
  }
}

export default ActiveDared;
