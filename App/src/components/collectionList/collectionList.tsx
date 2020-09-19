import React, { FunctionComponent, useState } from 'react'
import { useSelector } from "react-redux";
import { IAppState } from '../../store/reducers';
import { withStyles, Grid } from "@material-ui/core";

import { WithStyles } from "@material-ui/core";
import Style from "./css"
import { item, type } from '../../store/types/myType';
import Item from '../item/item';

interface props extends WithStyles<typeof Style> {
  type: type | "ALL",
}

const CollectionList: FunctionComponent<props> = ({ classes, type }) => {
  const { commonState } = useSelector((state: IAppState) => state);

  return (
    <div className={classes.root}>
      <Grid className={classes.root} container direction="row" alignItems="center" spacing={3}>
        {Array.from(commonState.items.entries()).map((entry: [number, item]) => { })}
      </Grid>
    </div >
  )
}

export default withStyles(Style)(CollectionList);