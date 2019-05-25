import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home.js";
import Style from "./css.js";
import { withStyles } from "@material-ui/core";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Navbar title="(The Unbranded Shop)" />
        <div className={classes.app}>
          <Home />
        </div>
      </div>
    );
  }
}

export default withStyles(Style)(App);
