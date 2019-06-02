import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home.js";
import AboutUs from "./pages/aboutus/aboutus.js";
import Checkout from "./pages/checkout/checkout.js";
import Style from "./css.js";
import { withStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import createDeepstream from "deepstream.io-client-js";
import ACTIONS from "./redux/actions";

class App extends Component {
  // Initialize connection to database
  componentDidMount() {
    this.remoteEndpoint = createDeepstream("0.0.0.0:6020");
    this.client = this.remoteEndpoint.login();
    this.props.setReady();
  }

  render() {
    const { classes } = this.props;
    if (!this.props.isReady) return null;
    return (
      <div className={classes.root}>
        <Router>
          <Navbar title="The Unbranded Shop" />
          <div className={classes.app}>
            <Route path="/" exact component={() => <Home client={this.client} />} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/checkout" component={Checkout} />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isReady: state.isReady
});

const mapDispatchToProps = dispatch => ({
  updateRemoteData: (key, data) => dispatch(ACTIONS.updateRemoteData(key, data)),
  setReady: () => dispatch(ACTIONS.setReady())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Style)(App));
