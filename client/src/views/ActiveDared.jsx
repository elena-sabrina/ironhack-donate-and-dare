import React, { Component } from "react";
import { loadDareforDared } from "./../services/darestatus.js";

import DaredStati from "../components/DaredStati/DaredStati";

export class ActiveDared extends Component {
  state = {
    dare: null
  };

  async componentDidMount() {
    const dare = await loadDareforDared(this.props.match.params.id);
    this.setState({ dare });
  }

  render() {
    return (
      <div className='Body'>
        {(this.state.dare && (
          <>
            <DaredStati dare={this.state.dare} />
          </>
        )) || <p>Error no dare found</p>}
      </div>
    );
  }
}

export default ActiveDared;
