import React, { FunctionComponent, useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IAppState } from '../../store/reducers';
import Style from "./css"
import { WithStyles } from "@material-ui/core";
import { withStyles, Grid, Typography, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { item, size, cartItem } from '../../store/types/myType';
import { useParams, RouteComponentProps } from 'react-router-dom';
import { useLastLocation } from 'react-router-last-location';
import Item from "./item"

interface MatchParams {
  id: string;
}

interface props extends WithStyles<typeof Style>, RouteComponentProps<MatchParams> {
}

const ItemWrapper: FunctionComponent<props> = ({ classes, match, history }) => {
  const { commonState } = useSelector((state: IAppState) => state);

  const item = commonState.items.get(Number(match.params.id));
  if (!item) return <div>item not found</div>; // TODO
  return <Item item={item} history={history} />
}

export default withStyles(Style)(ItemWrapper);