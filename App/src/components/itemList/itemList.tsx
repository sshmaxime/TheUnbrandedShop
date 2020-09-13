import React, { FunctionComponent, useState } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IAppState } from '../../store/reducers';
import { withStyles, Grid } from "@material-ui/core";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  SwipeableDrawer, WithStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Style from "./css"
import { CardMedia, Card } from "@material-ui/core";
import { item } from '../../store/types/myType';
import Item from '../item/item';

interface props extends WithStyles<typeof Style> {
}

const ItemList: FunctionComponent<props> = ({ classes }) => {
  const { commonState } = useSelector((state: IAppState) => state);
  const dispatch = useDispatch();

  const isAvailable = true;
  return (
    <div className={classes.root}>
      <Grid className={classes.root} container direction="row" alignItems="center" spacing={3}>
        {Array.from(commonState.items.entries()).map((entry: [number, item]) => (
          <Grid key={entry[0]} item xs={12} sm={6} md={3} >
            {/* <Fade delay={100 * index}> */}
            <Item
              key={entry[1].id}
              item={entry[1]}
            />
            {/* </Fade> */}
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default withStyles(Style)(ItemList);