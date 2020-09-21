import React, { FunctionComponent, useState, useEffect } from "react";
import Style from "./css";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EuroIcon from "@material-ui/icons/EuroSymbol";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
// import ACTIONS from "../../redux/actions";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import * as EmailValidator from 'email-validator';
// import { injectStripe } from "react-stripe-elements";
import { Elements, CardElement } from '@stripe/react-stripe-js';
// import Fade from "react-reveal/Fade";
import { WithStyles, withStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IAppState } from '../../store/reducers';
import { useStripe } from '@stripe/react-stripe-js';
import { useParams, RouteComponentProps } from 'react-router-dom';
import { render } from "@testing-library/react";

interface props extends WithStyles<typeof Style> {
  session_id: string;
}

const defaultState = (): {

} => {
  return {
  }
}

const CheckoutSuccess: FunctionComponent<props> = ({ classes, session_id }) => {
  const { commonState } = useSelector((state: IAppState) => state);
  const dispatch = useDispatch();
  const [state, setState] = useState(defaultState());
  const stripe = useStripe();

  useEffect(() => {
    (async () => {
      console.log("http://192.168.1.165:8000/session/" + session_id)
      const res = await fetch("http://192.168.1.165:8000/session/" + session_id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log("test1")
      const js = await res.json()
      console.log(js)
    })()
  }, [])

  return (
    <div className={classes.root}>
    </div>
  )

}

export default withStyles(Style)(CheckoutSuccess);
