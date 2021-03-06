import React, { Component } from "react";
import { Link } from "react-router-dom";

import { loadDareforDonorConfirmation } from "./../services/createdare.js";

import "./CreateDareConfirmation.scss";

export class CreateDareConfirmation extends Component {
  state = {
    dare: null
  };

  async componentDidMount() {
    const dare = await loadDareforDonorConfirmation(this.props.match.params.id);
    this.setState({ dare });
  }
  render() {
    const dare = this.state.dare;
    return (
      <div className='DareConfirmation Body'>
        {(dare && (
          <>
            <h1>
              Thank you for your donation of {dare.price} Euros to{" "}
              {dare.charity}
            </h1>
            <div>
              <p>{dare.dared.name} has been informed via Email.</p>
              <button>
                <Link to={`/dare/${dare._id}/donor`}>Ok</Link>
              </button>
            </div>
          </>
        )) || <p>Error no dare found</p>}
      </div>
    );
  }
}

export default CreateDareConfirmation;
