import React, { Component } from "react";
import { loadDareforDonor } from "./../services/darestatus.js";

import DonorStati from "../components/DonorStati/DonorStati";

export class ActiveDonor extends Component {
  state = {
    dare: null
  };

  async componentDidMount() {
    const dare = await loadDareforDonor(this.props.match.params.id);
    this.setState({ dare });
  }

 async handleStatusChangeSubmission () {
    console.log('heeeeeeeeeeeyyyyy');
  }


  render() {
    return (
      <div className='Body'>
        {(this.state.dare && (
          <>
            <DonorStati dare={this.state.dare} onStatusChange={this.handleStatusChangeSubmission}/>
          </>
        )) || <p>Error no dare found</p>}
      </div>
    );
  }
}

export default ActiveDonor;
