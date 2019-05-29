import React, { Component } from "react";
import { withStyles, Grid } from "@material-ui/core";
import Style from "./css.js";
import Item from "../item/item";

class ItemList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        className={classes.root}
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={16}
      >
        {this.props.items.map((tile, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Item
              key={index}
              itemNbr={index}
              handleFunction={this.props.handleFunction}
              delay={(index - 1) * 200}
              title={tile.title}
              imgUrl={tile.imgUrl}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withStyles(Style)(ItemList);
