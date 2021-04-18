import React, { Component } from "react";
import { loadDareforDonor } from "./../services/darestatus.js";

import DonorStati from "../components/DonorStati/DonorStati";

export class Dare extends Component {
  state = {
    dare: null
  };

  async componentDidMount() {
    const dare = await loadDareforDonor(this.props.match.params.id);
    console.log(dare);
    console.log(dare.status);
    this.setState({ dare });
  }

  render() {
    return (
      <div className='Body'>
        {(this.state.dare && (
          <>
            <DonorStati dare={this.state.dare} />
          </>
        )) || <p>Error no dare found</p>}
      </div>
    );
  }
}

export default Dare;
