import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { verify } from "./services/authentication.js";

import Home from "./views/Home";
import Dares from "./views/Dares";
import CreateDare from "./views/CreateDare";
import Checkout from "./views/Checkout";
import CheckoutConfirmation from "./views/CheckoutConfirmation";
import Dared from "./views/Dared";
import Donor from "./views/Donor";
import DareConfirmation from "./views/DareConfirmation";
import Profile from "./views/Profile";
import EditProfile from "./views/EditProfile";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";

import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    donor: null
  };

  async componentDidMount() {
    const donor = await verify();
    this.setState({ donor });
  }

  handleUserChange = (donor) => {
    this.setState({ donor });
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar donor={this.state.donor} />
        <Switch>
          <Route path='/dare/all' component={Dares} exact />
          <Route path='/' component={Home} exact />

          <Route
            path='/dare/create/:id'
            render={(props) => (
              <CreateDare {...props} donor={this.state.donor} />
            )}
            exact
          />

          <Route path='/checkout' component={Checkout} exact />
          <Route
            path='/checkout/confirmation'
            component={CheckoutConfirmation}
            exact
          />
          <Route path='/dare/:id/dared' component={Dared} exact />
          <Route path='/dare/:id/donor' component={Donor} exact />
          <Route
            path='/dare/id/confirmation'
            component={DareConfirmation}
            exact
          />
          <Route
            path='/profile'
            render={(props) => <Profile {...props} donor={this.state.donor} />}
            exact
          />
          <Route path='/profile/edit' component={EditProfile} exact />

          <Route
            path='/sign-in'
            render={(props) => (
              <SignIn {...props} onUserChange={this.handleUserChange} />
            )}
            exact
          />
          <Route
            path='/sign-up'
            render={(props) => (
              <SignUp {...props} onUserChange={this.handleUserChange} />
            )}
            exact
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
