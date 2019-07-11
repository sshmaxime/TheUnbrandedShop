import React, { Component } from "react";
import { withStyles, CardMedia, Typography, Card } from "@material-ui/core";
import Style from "./css.js";

class Item extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card
          className={classes.root}
          index={this.props.itemNbr}
          onClick={this.props.handleFunction}
        >
          <CardMedia className={classes.image} image={this.props.imgUrl} />
          <Typography className={classes.title}>{this.props.title}</Typography>
        </Card>
      </div>
    );
  }
}

export default withStyles(Style)(Item);
