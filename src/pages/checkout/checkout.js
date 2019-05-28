import React, { Component } from "react";
import Style from "./css.js";
import { withStyles } from "@material-ui/core";

class Checkout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div>hey</div>
        pay here
      </div>
    );
  }
}

export default withStyles(Style)(Checkout);
