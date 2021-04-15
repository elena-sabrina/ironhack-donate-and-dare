import React, { Component } from "react";
import { loadDareforDared } from "./../services/dare.js";

export class Dare extends Component {
  state = {
    dare: null
  };

  async componentDidMount() {
    const dare = await loadDareforDared(this.props.match.params.id);
    console.log(dare);
    this.setState({ dare });
  }

  render() {
    return (
      <div className="Body">
        {(this.state.dare && (
          <>
            <h1>Dared: You have been dared by {this.state.dare.dared.name} </h1>

            <p>{this.state.dare.template.name}</p>
          </>
        )) || <p>Error no dare found</p>}
      </div>
    );
  }
}

export default Dare;
