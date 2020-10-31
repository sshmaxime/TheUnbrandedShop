import React, { FunctionComponent, useState, useEffect } from 'react'
import ItemList from '../../components/itemList/itemList';
import Style from "./css"
import { WithStyles, withStyles } from "@material-ui/core";
import { item } from '../../store/types/items';
import ItemListPlaceholder from '../../components/itemList/itemListPlaceholder';
import config from '../../config';
import { useSelector } from 'react-redux';
import { IAppState } from '../../store/reducers';

interface props extends WithStyles<typeof Style> {
}

const Collection: FunctionComponent<props> = ({ classes }) => {
  const { storeState } = useSelector((state: IAppState) => state);

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        AUTUMN 2020
      </div>
      <ItemList type="ALL" items={storeState.items} />
    </div>
  )
}

export default withStyles(Style)(Collection);