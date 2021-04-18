import React, { Component } from "react";

import { listTemplates } from "./../services/createdare";
import TemplateList from "../components/TemplateList";

class Dares extends Component {
  state = {
    templates: []
  };

  async componentDidMount() {
    console.log("mounting dares");
    const templates = await listTemplates();
    console.log('comp mount fond templates');
    console.log(templates);
    this.setState({ templates });
  }
  render() {
    return (
      <div className="Body">
        <h1>Dares</h1>
        <TemplateList templates={this.state.templates} />
      </div>
    );
  }
}

export default Dares;
