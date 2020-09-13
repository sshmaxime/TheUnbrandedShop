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

const Item: FunctionComponent<props> = ({ item, classes }) => {
  const { commonState } = useSelector((state: IAppState) => state);
  const dispatch = useDispatch();

  const isAvailable = true;
  return (
    <div className={classes.root}>
      <Link to={isAvailable ? "/item" + item.id : ""}>
        <Card
          className={isAvailable ? classes.root : classes.rootDisabled}
          meta-index={item.id}
        >
          <CardMedia
            className={isAvailable ? classes.image : classes.imageDisabled}
            image={item.imgUrl}
          />
          <Typography className={isAvailable ? classes.title : classes.titleDisabled}>
            {isAvailable ? item.title : "Out Of Stock"}
          </Typography>
        </Card>
      </Link>
    </div>
  )
}

export default withStyles(Style)(Item);