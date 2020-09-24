import React, { FunctionComponent, useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ItemList from '../../components/itemList/itemList';
import { IAppState } from '../../store/reducers';
import Style from "./css"
import { WithStyles, withStyles } from "@material-ui/core";
import { item } from '../../store/types/items';

interface props extends WithStyles<typeof Style> {
}

const defaultState = (): {
  items: item[] | undefined
} => {
  return {
    items: undefined
  }
}

const Collection: FunctionComponent<props> = ({ classes }) => {
  const { commonState } = useSelector((state: IAppState) => state);
  const dispatch = useDispatch();
  const [state, setState] = useState(defaultState());

  useEffect(() => {
    fetch("http://192.168.1.165:8000/items", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response => { return response.json() }).then((json: item[]) => { setState({ ...state, items: json }) })
  }, [])

  if (!state.items) return <div>cannot fetch</div>; // TODO
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        AUTUMN 2020
        </div>
      <ItemList type="ALL" items={state.items} />
    </div>
  )
}

export default withStyles(Style)(Collection);