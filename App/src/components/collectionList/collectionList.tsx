import React, { FunctionComponent, useState } from 'react'
import { useSelector } from "react-redux";
import { IAppState } from '../../store/reducers';
import { withStyles, Grid } from "@material-ui/core";

import { WithStyles } from "@material-ui/core";
import Style from "./css"
import { item } from '../../store/types/items';
import Collection from '../../components/collection/collection';

interface props extends WithStyles<typeof Style> {
}

const CollectionList: FunctionComponent<props> = ({ classes }) => {
  const { storeState } = useSelector((state: IAppState) => state);

  return (
    <div className={classes.root}>
      <Grid className={classes.root} container direction="row" alignItems="center" spacing={3}>
        {Array.from(storeState.items.entries()).map((entry: [string, item]) => {
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