import React, { FunctionComponent, useEffect, useState } from 'react'
import Style from "./css"
import { WithStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { RouteComponentProps } from 'react-router-dom';
import Item from "./item"
import { useSelector } from 'react-redux';
import { IAppState } from '../../store/reducers';

interface MatchParams {
  id: string;
}

interface props extends WithStyles<typeof Style>, RouteComponentProps<MatchParams> {
}

const ItemWrapper: FunctionComponent<props> = ({ classes, match, history }) => {
  const { storeState } = useSelector((state: IAppState) => state);

  const item = storeState.items.get(match.params.id)
  if (!item) return <div>item not found</div>;
  return <Item item={item} history={history} />
}

export default withStyles(Style)(ItemWrapper);