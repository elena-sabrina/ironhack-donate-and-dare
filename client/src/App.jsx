import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { signOut, verify } from "./services/authentication.js";
import "./styles/mains.scss";

import Home from "./views/Home";
import Dares from "./views/Dares";
import CreateDare from "./views/CreateDare";
import Checkout from "./views/Checkout";
import CheckoutConfirmation from "./views/CheckoutConfirmation";
import ActiveDonor from "./views/ActiveDonor";
import ActiveDared from "./views/ActiveDared";
import DareConfirmation from "./views/DareConfirmation";
import Profile from "./views/Profile";
import EditProfile from "./views/EditProfile";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";

import ProtectedRoute from "./components/ProtectedRoute";

import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    donor: null,
    loaded: false
  };

  async componentDidMount() {
    const donor = await verify();
    this.handleUserChange(donor);
    this.setState({ loaded: true });
  }

  handleUserChange = (donor) => {
    this.setState({ donor });
  };

  handleSignOut = async () => {
    await signOut();
    this.handleUserChange(null);
  };

  render() {
    const donor = this.state.donor;
    return (
      <BrowserRouter>
        <Navbar donor={donor} onSignOut={this.handleSignOut} />

        <Switch>
          <ProtectedRoute
            path='/profile/:id'
            render={(props) => <Profile {...props} donor={this.state.donor} />}
            authorized={donor}
            redirect='/sign-in'
            exact
          />

          <Route path='/dare/all' component={Dares} exact />
          <Route path='/' component={Home} exact />

          <ProtectedRoute
            path='/dare/create/:id'
            render={(props) => (
              <CreateDare {...props} donor={this.state.donor} />
            )}
            authorized={donor}
            redirect='/sign-in'
            exact
          />
          <ProtectedRoute
            path='/checkout/:id'
            component={Checkout}
            authorized={donor}
            redirect='/sign-in'
            exact
          />

          <ProtectedRoute
            path='dare/checkout/confirmation'
            component={CheckoutConfirmation}
            authorized={donor}
            redirect='/sign-in'
            exact
          />
          <ProtectedRoute
            path='/dare/:id/donor'
            component={ActiveDonor}
            authorized={donor}
            redirect='/sign-in'
            exact
          />
          <Route path='/dare/:id/dared' component={ActiveDared} exact />

          <Route
            path='/dare/id/confirmation'
            component={DareConfirmation}
            exact
          />

          <ProtectedRoute
            path='/profile/edit'
            component={EditProfile}
            authorized={donor}
            redirect='/sign-in'
            exact
          />

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
