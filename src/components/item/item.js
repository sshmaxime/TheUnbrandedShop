import React, { Component } from "react";
import { withStyles, CardMedia, Typography, Card } from "@material-ui/core";
import Style from "./css.js";

class Item extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card
          index={this.props.itemNbr}
          className={classes.root}
          onClick={this.props.handleFunction}
        >
          <Typography className={classes.title}>{this.props.title}</Typography>
          <CardMedia className={classes.image} image={this.props.imgUrl} />
        </Card>
      </div>
    );
  }
}

export default withStyles(Style)(Item);
