import React, { Component } from "react";
import Style from "./css.js";
import { withStyles, Divider } from "@material-ui/core";

class AboutUs extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.question}>Our mission</div>
        <Divider />
        <div className={classes.answer}>Find the hypest pieces of clothing on the internet.</div>

        <div className={classes.question}>Our products</div>
        <Divider />
        <div className={classes.answer}>
          Our products come from several regulated kind of marketplaces. We are not designing and/or
          manifacturing. We buy items from manufacturer/individual and sell them.
        </div>

        <div className={classes.question}>Quality</div>
        <Divider />
        <div className={classes.answer}>We guarrantee you the best quality for the best price.</div>

        <div className={classes.question}>Shpping</div>
        <Divider />
        <div className={classes.answer}>
          Item labeled as "certified" will most likely be received under 7 working days in France,
          under 10 working days in Europe and under 20 days anywhere else. Other items will most
          likely be received under 10 to 30 days depending on your location.
        </div>

        <div className={classes.question}>Our company</div>
        <Divider />
        <div className={classes.answer}>We are based in Montpellier, FRANCE.</div>

        <div className={classes.question}>Any questions ?</div>
        <Divider />
        <div className={classes.answer}>Feel free to email us at: "mail@gmail.com"</div>
      </div>
    );
  }
}

export default withStyles(Style)(AboutUs);
