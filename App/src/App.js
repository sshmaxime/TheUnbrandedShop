import React, { Component } from "react";

import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home.js";
import Item from "./pages/item/item.js";
import Checkout from "./pages/checkout/checkout.js";

import Style from "./css.js";

import { withStyles } from "@material-ui/core";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import ACTIONS from "./redux/actions";

import createDeepstream from "deepstream.io-client-js";

import { Elements, StripeProvider } from "react-stripe-elements";

class App extends Component {
  // Initialize connection to database
  componentDidMount() {
    const remoteEndpoint = createDeepstream("0.0.0.0:6020");
    this.databaseClient = remoteEndpoint.login();

    this.storeRecord = this.databaseClient.record.getRecord("store");
    this.storeRecord.whenReady(_ => {
      this.props.setReady();
    });
  }


  render() {
    const { classes } = this.props;
    console.log(process.env)
    if (!this.props.isReady) return null;

    return (
      <div className={classes.root}>
        <Router>
          <Navbar normalTitle="The Unbranded Shop" reducedTitle="UNBRDSHP" />
          <StripeProvider apiKey={process.env.REACT_APP_STRIPE_API_KEY}>
            <div className={classes.app}>
              <Route
                path={["/"]}
                exact
                component={location => <Home storeRecord={this.storeRecord} location={location} />}
              />
              <Route
                path={["/item:id"]}
                exact
                component={location => <Item storeRecord={this.storeRecord} location={location} />}
              />

              <Elements>
                <Route
                  path={["/checkout"]}
                  exact
                  component={location => <Checkout location={location} />}
                />
              </Elements>
            </div>
          </StripeProvider>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isReady: state.isReady
});

const mapDispatchToProps = dispatch => ({
  setReady: () => dispatch(ACTIONS.setReady())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Style)(App));
