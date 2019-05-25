import React, { Component } from "react";
import Style from "./css.js";
import { withStyles } from "@material-ui/core";

class AboutUs extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.root}>hey</div>;
  }
}

export default withStyles(Style)(AboutUs);
