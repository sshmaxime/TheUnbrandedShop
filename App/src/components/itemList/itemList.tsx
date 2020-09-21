import React, { FunctionComponent, useState } from 'react'
import { useSelector } from "react-redux";
import { IAppState } from '../../store/reducers';
import { withStyles, Grid } from "@material-ui/core";

import { WithStyles } from "@material-ui/core";
import Style from "./css"
import { item, type } from '../../store/types/myType';
import Item from '../item/item';
import ContentLoader from "react-content-loader"
import ItemPlaceholder from '../item/itemPlaceholder';

interface props extends WithStyles<typeof Style> {
  type: type | "ALL",
}

const ItemList: FunctionComponent<props> = ({ classes, type }) => {
  const { commonState } = useSelector((state: IAppState) => state);

  // return (
  //   <Grid className={classes.root} container direction="row" alignItems="center" spacing={3}>
  //     <Grid key={"1"} item xs={12} sm={6} md={3} >
  //       <ItemPlaceholder />
  //     </Grid>
  //     <Grid key={"2"} item xs={12} sm={6} md={3} >
  //       <ItemPlaceholder />
  //     </Grid>
  //     <Grid key={"3"} item xs={12} sm={6} md={3} >
  //       <ItemPlaceholder />
  //     </Grid>
  //     <Grid key={"4"} item xs={12} sm={6} md={3} >
  //       <ItemPlaceholder />
  //     </Grid>
  //   </Grid>
  // )

  return (
    <div className={classes.root}>
      <Grid className={classes.root} container direction="row" alignItems="center" spacing={3}>
        {Array.from(commonState.items.entries()).map((entry: [number, item]) => {
          return type === "ALL" || entry[1].type === type ? (
            <Grid key={entry[0]} item xs={12} sm={6} md={3}  >
              <Item
                key={entry[1].id}
                item={entry[1]}
              />
            </Grid>
          ) : null
        })}
      </Grid>
    </div >
  )
}

export default withStyles(Style)(ItemList);