import React, { FunctionComponent, useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { IAppState } from '../../store/reducers';
import Style from "./css"
import { WithStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { RouteComponentProps } from 'react-router-dom';
import Item from "./item"
import { item } from '../../store/types/items';

interface MatchParams {
  id: string;
}

const defaultState = (): {
  item: item | undefined
} => {
  return {
    item: undefined
  }
}

interface props extends WithStyles<typeof Style>, RouteComponentProps<MatchParams> {
}

const ItemWrapper: FunctionComponent<props> = ({ classes, match, history }) => {
  const { commonState } = useSelector((state: IAppState) => state);
  const [state, setState] = useState(defaultState());

  useEffect(() => {
    fetch("http://192.168.1.165:8000/item/" + match.params.id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response => { return response.json() }).then((json: item) => { setState({ ...state, item: json }) })
  }, [])


  if (!state.item) return <div>item not found</div>; // TODO
  return <Item item={state.item} history={history} />
}

export default withStyles(Style)(ItemWrapper);