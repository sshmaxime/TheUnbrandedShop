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
import { Elements, StripeProvider } from "react-stripe-elements";

class App extends Component {
  // Initialize connection to database
  componentDidMount() {
    const remoteEndpoint = createDeepstream("0.0.0.0:6020");
    this.database = remoteEndpoint.login();

    // Inform the app that it is now ready to display data from the database
    this.props.setReady();
  }

  render() {
    if (!this.props.isReady) return null;

    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Router>
          <Navbar normalTitle="The Unbranded Shop" reducedTitle="UNBRDSHP" />
          <div className={classes.app}>
            <Route
              path={["/", "/item:id"]}
              exact
              component={location => <Home database={this.database} location={location} />}
            />
            <Route path="/aboutus" component={AboutUs} />
            {/* <StripeProvider apiKey="***REMOVED***">
              <Elements
                fonts={[
                  {
                    cssSrc:
                      "https://fonts.googleapis.com/css?family=Source+Code+Pro:400&display=swap"
                  }
                ]}
              > */}
            <Route path="/checkout" component={Checkout} />
            {/* </Elements>
            </StripeProvider> */}
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
  setReady: () => dispatch(ACTIONS.setReady())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Style)(App));
