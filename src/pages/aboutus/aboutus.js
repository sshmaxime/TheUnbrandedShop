import React, { Component } from "react";
import Style from "./css.js";
import { withStyles, Divider } from "@material-ui/core";

class AboutUs extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.question}>Where do your products comes from ?</div>
        <Divider />
        <div className={classes.answer}>
          No bullshit here. Our products come from every regulated kind of marketplaces. We are not
          designing and/or manifacturing anything. We buy items from manufacturer/individual and
          sell them here.
        </div>

        <div className={classes.question}>Why should you buy from us ?</div>
        <Divider />
        <div className={classes.answer}>
          We guarrantee you the best items for the best price. Stop getting scam by online shops
          that artificially increase their price by more than 100% and then claim that they have
          "unbelieavable" "-40%"/"-50%" discount.
        </div>

        <div className={classes.question}>How long does it takes to ship to my country ?</div>
        <Divider />
        <div className={classes.answer}>
          Item labeled as "certified" will most likely be received under 7 working days in France,
          under 10 working days in Europe and under 20 days anywhere else. Other items will most
          likely be received under 10 to 30 days depending on your location.
        </div>

        <div className={classes.question}>Where are you based ?</div>
        <Divider />
        <div className={classes.answer}>We are based in Montpellier, FRANCE.</div>
      </div>
    );
  }
}

export default withStyles(Style)(AboutUs);
