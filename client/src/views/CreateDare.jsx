import React, { Component } from "react";

import "./CreateDare.scss";
import { loadTemplate } from "./../services/dare.js";

import TemplateItem from "../components/TemplateItem";
import PaymentForm from "../components/PaymentForm";

const StripePublicApiKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

export class CreateDare extends Component {
  state = {
    template: null
  };

  async componentDidMount() {
    const template = await loadTemplate(this.props.match.params.id);
    this.setState({ template });
  }
  render() {
    return (
      <div className='Body CreateDare'>
        {(this.state.template && (
          <>
            <h1>Create {this.state.template.name}</h1>
            <div className='side-by-side'>
              

              <div className='Template'>
                <TemplateItem template={this.state.template} />
              </div>
            </div>
          </>
        )) || <p>Error no template found</p>}
      </div>
    );
  }
}

export default CreateDare;
