import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { signOut, verify } from "./services/authentication.js";
import "./styles/mains.scss";

import Home from "./views/Home";
import Dares from "./views/Dares";
import CreateDare from "./views/CreateDare";
import CreateDareConfirmation from "./views/CreateDareConfirmation";
import ActiveDonor from "./views/ActiveDonor";
import ActiveDared from "./views/ActiveDared";

import Profile from "./views/Profile";
import EditProfile from "./views/EditProfile";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";

import ProtectedRoute from "./components/ProtectedRoute";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.scss";

class App extends Component {
  state = {
    donor: null,
    loaded: false
  };

  async componentDidMount() {
    const donor = await verify();
    this.handleDonorChange(donor);
    this.setState({ loaded: true });
  }

  handleDonorChange = (donor) => {
    this.setState({ donor });
  };

  handleSignOut = async () => {
    await signOut();
    this.handleDonorChange(null);
  };

  render() {
    const donor = this.state.donor;
    return (
      <BrowserRouter className='App'>
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
            path='/dare/create/:id/confirmation'
            component={CreateDareConfirmation}
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

          <ProtectedRoute
            path='/profile/:id/edit'
            component={EditProfile}
            authorized={donor}
            redirect='/'
            exact
          />

          <ProtectedRoute
            path='/sign-in'
            render={(props) => (
              <SignIn {...props} onDonorChange={this.handleDonorChange} />
            )}
            authorized={!donor}
            redirect='/'
            exact
          />

          <ProtectedRoute
            path='/sign-up'
            render={(props) => (
              <SignUp {...props} onDonorChange={this.handleDonorChange} />
            )}
            authorized={!donor}
            redirect='/'
            exact
          />
        </Switch>
        <Footer donor={donor} onSignOut={this.handleSignOut} />
      </BrowserRouter>
    );
  }
}

export default App;
