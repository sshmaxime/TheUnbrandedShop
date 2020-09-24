import React, { FunctionComponent, useState } from 'react'
import { useSelector } from "react-redux";
import { IAppState } from '../../store/reducers';
import { withStyles, Grid } from "@material-ui/core";

import { WithStyles } from "@material-ui/core";
import Style from "./css"
import { item, type } from '../../store/types/items';
import Item from '../item/item';
import ContentLoader from "react-content-loader"
import ItemPlaceholder from '../item/itemPlaceholder';

interface props extends WithStyles<typeof Style> {
}

const ItemListPlaceholder: FunctionComponent<props> = ({ classes }) => {
  const { commonState } = useSelector((state: IAppState) => state);

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