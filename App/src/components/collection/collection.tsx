import React, { FunctionComponent, useState } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IAppState } from '../../store/reducers';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  SwipeableDrawer, withStyles, WithStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Style from "./css"
import { CardMedia, Card } from "@material-ui/core";
import { item } from '../../store/types/myType';

interface props extends WithStyles<typeof Style> {
  item: item
}

const Collection: FunctionComponent<props> = ({ item, classes }) => {
  const { commonState } = useSelector((state: IAppState) => state);
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      Hello
    </div>
  )
}

export default withStyles(Style)(Collection);