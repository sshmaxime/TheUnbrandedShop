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
}

const Collection: FunctionComponent<props> = ({ classes }) => {
  const { commonState } = useSelector((state: IAppState) => state);
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <Card>
        <Typography >
          "Out Of Stock"
        </Typography>
        <CardMedia
          className={classes.img}
          image="https://ae01.alicdn.com/kf/Hd32a1bb236184b54a254bc1f9751fcc42/MICHELANGELO-dr-le-impression-seau-casquettes-t-pliable-cr-me-solaire-p-cheur-Panama-chapeaux-2020.jpg"
        />
      </Card>
    </div>
  )
}

export default withStyles(Style)(Collection);