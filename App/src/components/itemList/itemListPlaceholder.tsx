import React, { FunctionComponent } from 'react'
import { withStyles, Grid } from "@material-ui/core";

import { WithStyles } from "@material-ui/core";
import Style from "./css"
import ItemPlaceholder from '../item/itemPlaceholder';

interface props extends WithStyles<typeof Style> {
}

const ItemListPlaceholder: FunctionComponent<props> = ({ classes }) => {
  return (
    <Grid className={classes.root} container direction="row" alignItems="center" spacing={3}>
      <Grid key={"1"} item xs={12} sm={6} md={3} >
        <ItemPlaceholder />
      </Grid>
      <Grid key={"2"} item xs={12} sm={6} md={3} >
        <ItemPlaceholder />
      </Grid>
      <Grid key={"3"} item xs={12} sm={6} md={3} >
        <ItemPlaceholder />
      </Grid>
      <Grid key={"4"} item xs={12} sm={6} md={3} >
        <ItemPlaceholder />
      </Grid>
    </Grid>
  )

}

export default withStyles(Style)(ItemListPlaceholder);