import React, { Component } from "react";
import { withStyles, Grid } from "@material-ui/core";
import Style from "./css.js";
import Item from "../item/item";
import { Animate, AnimateGroup } from "react-simple-animate";

const props = {
  start: { opacity: 0, transform: "scale(1.25)" },
  end: { opacity: 1, transform: "scale(1)" }
};
class ItemList extends Component {
  render() {
    const { classes } = this.props;
    if (this.props.items != null)
      return (
        <Grid
          className={classes.root}
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          spacing={2}
        >
          {this.props.items.map((tile, index) => (
            <Grid key={index} item xs={6} sm={6} md={4} lg={3} xl={3}>
              <AnimateGroup play>
                <Animate {...props} sequenceIndex={index} delay={index * 0.1}>
                  <Item
                    key={index}
                    itemNbr={index}
                    handleFunction={this.props.handleFunction}
                    title={tile.title}
                    imgUrl={tile.imgUrl}
                  />
                </Animate>
              </AnimateGroup>
            </Grid>
          ))}
        </Grid>
      );
    return null;
  }
}

export default withStyles(Style)(ItemList);
