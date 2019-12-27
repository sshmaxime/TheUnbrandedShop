import React, { Component } from "react";
import { withStyles, Grid } from "@material-ui/core";
import Style from "./css.js";
import Item from "../item/item";
import Fade from "react-reveal/Fade";

class ItemList extends Component {
  render() {
    const { classes } = this.props;
    if (this.props.items != null)
      return (
        <Grid className={classes.root} container direction="row" alignItems="center" spacing={2}>
          {this.props.items.map((tile, index) => (
            <Grid key={index} item xs={6} sm={6} md={4} lg={3} xl={3}>
              <Fade delay={100 * index}>
                <Item
                  key={tile.id}
                  handleFunction={this.props.handleFunction}
                  title={tile.title}
                  imgUrl={tile.imgUrl}
                  id={tile.id}
                  size={tile.size}
                />
              </Fade>
            </Grid>
          ))}
        </Grid>
      );
    return null;
  }
}

export default withStyles(Style)(ItemList);
