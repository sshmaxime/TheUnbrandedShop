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
import { item, sizeType } from '../../store/types/items';

interface props extends WithStyles<typeof Style> {
  item: item
}

const Item: FunctionComponent<props> = ({ item, classes }) => {
  const { commonState } = useSelector((state: IAppState) => state);
  const dispatch = useDispatch();

  let isAvailable = false;

  for (let model of item.models) {
    for (let size of Object.keys(model.sizes)) {
      if (Number(model.sizes[size as sizeType]) > 0) {
        isAvailable = true;
        break;
      }
    }
  }

  return (
    <div className={classes.root}>
      <Link to={isAvailable ? "/item/" + item.id : ""}>
        <Card
          className={isAvailable ? classes.root : classes.rootDisabled}
          meta-index={item.id}
        >
          <CardMedia
            className={isAvailable ? classes.image : classes.imageDisabled}
            image={item.models[0].imgUrl[0]}
          />
          <Typography className={isAvailable ? classes.title : classes.titleDisabled}>
            {isAvailable ? item.id : "Out Of Stock"}
          </Typography>
        </Card>
      </Link>
    </div>
  )
}

export default withStyles(Style)(Item);