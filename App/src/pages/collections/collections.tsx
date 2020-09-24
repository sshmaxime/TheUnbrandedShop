import React, { FunctionComponent } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ItemList from '../../components/itemList/itemList';
import { IAppState } from '../../store/reducers';
import Style from "./css"
import { WithStyles, withStyles } from "@material-ui/core";

interface props extends WithStyles<typeof Style> {
}

const Collection: FunctionComponent<props> = ({ classes }) => {
  const { commonState } = useSelector((state: IAppState) => state);
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        AUTUMN 2020
        </div>
      <ItemList type="ALL" />
    </div>
  )
}

export default withStyles(Style)(Collection);