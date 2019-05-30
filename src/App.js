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
    const ds = createDeepstream("0.0.0.0:6020").login();
    ds.record.getRecord("store").whenReady(store => {
      // Store store record to redux state
      this.props.updateRemoteData("store", store);
      this.props.setReady();

      // store.set({
      //   items: [
      //     {
      //       imgUrl:
      //         "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
      //       title: "Crzy",
      //       price: 299.99,
      //       info: [["Manufacturer", "Supreme"], ["Material", "100% Cotton"]]
      //     },
      //     {
      //       imgUrl:
      //         "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
      //       title: "Crdedzy",
      //       price: 0,
      //       info: [["Manufacturer", "Hype"], ["Material", "100% Cotton"]]
      //     },
      //     {
      //       imgUrl:
      //         "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
      //       title: "Crdedzy",
      //       price: 0,
      //       info: [["Manufacturer", "DC"], ["Material", "100% Cotton"]]
      //     },
      //     {
      //       imgUrl:
      //         "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
      //       title: "Crdedzy",
      //       price: 0,
      //       info: [["Manufacturer", "Bape"], ["Material", "100% Cotton"]]
      //     }
      //   ]
      // });
    });
  }
  render() {
    const { classes } = this.props;
    if (!this.props.isReady) return null;
    return (
      <div className={classes.root}>
        <Router>
          <Navbar title="The Unbranded Shop" />
          <div className={classes.app}>
            <Route path="/" exact component={Home} />
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
