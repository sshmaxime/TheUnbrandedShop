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
        <div className={classes.answer}>
          Find the hypest pieces of clothing on the internet and provide them to you for the best
          price.
        </div>

        <div className={classes.question}>Our products</div>
        <Divider />
        <div className={classes.answer}>
          Our products come from several marketplaces. We are not designing and/or manufacturing. We
          buy items from manufacturer/individual and sell them.
        </div>

        <div className={classes.question}>Quality</div>
        <Divider />
        <div className={classes.answer}>
          We guarrantee the best quality. If you receive the wrong item or a damaged one please
          email us.
        </div>

        <div className={classes.question}>Shipping</div>
        <Divider />
        <div className={classes.answer}>
          Item labeled as "certified" are sent by us and will most likely be received under 7
          working days in France, under 10 working days in Europe and under 20 days anywhere else.
          <br />
          <br />
          Other items will be sent by our suppliers and will most likely be received under 10 to 30
          days depending on your location.
        </div>

        <div className={classes.question}>Our company</div>
        <Divider />
        <div className={classes.answer}>Since 2018, Montpellier, FRANCE.</div>

        <div className={classes.question}>theunbrandedshop@gmail.com</div>
      </div>
    );
  }
}

export default withStyles(Style)(AboutUs);
