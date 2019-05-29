import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home.js";
import AboutUs from "./pages/aboutus/aboutus.js";
import Checkout from "./pages/checkout/checkout.js";
import Style from "./css.js";
import { withStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import createDeepstream from "deepstream.io-client-js";

class App extends Component {
  constructor(props) {
    super(props);
    this.ds = createDeepstream("0.0.0.0:6020");
    this.client = this.ds.login();
    this.store = this.ds.record.getRecord("store");

    // test
    this.store.set({
      items: [
        {
          imgUrl:
            "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
          title: "Crzy",
          price: 299.99,
          info: [["Manufacturer", "Supreme"], ["Material", "100% Cotton"]]
        },
        {
          imgUrl:
            "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
          title: "Crdedzy",
          price: 0,
          info: [["Manufacturer", "Hype"], ["Material", "100% Cotton"]]
        },
        {
          imgUrl:
            "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
          title: "Crdedzy",
          price: 0,
          info: [["Manufacturer", "DC"], ["Material", "100% Cotton"]]
        },
        {
          imgUrl:
            "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
          title: "Crdedzy",
          price: 0,
          info: [["Manufacturer", "Bape"], ["Material", "100% Cotton"]]
        }
      ]
    });
    // test
  }

  render() {
    const { classes } = this.props;
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

export default withStyles(Style)(App);
