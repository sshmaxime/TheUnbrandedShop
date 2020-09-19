import React, { FunctionComponent, useState } from 'react'
import { useSelector } from "react-redux";
import { IAppState } from '../../store/reducers';
import { withStyles, Grid } from "@material-ui/core";

import { WithStyles } from "@material-ui/core";
import Style from "./css"
import { item, type } from '../../store/types/myType';
import Item from '../item/item';
import Collection from '../../components/collection/collection';

interface props extends WithStyles<typeof Style> {
}

const CollectionList: FunctionComponent<props> = ({ classes }) => {
  const { commonState } = useSelector((state: IAppState) => state);

  return (
    <div className={classes.root}>
      <Grid className={classes.root} container direction="row" alignItems="center" spacing={3}>
        {Array.from(commonState.items.entries()).map((entry: [number, item]) => {
          return (
            <Grid key={entry[0]} item xs={6} sm={6} md={6} >
              <Collection />
            </Grid>
          )
        })}
      </Grid>
    </div >
  )
}

export default withStyles(Style)(CollectionList);