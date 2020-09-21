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
import CheckoutSuccess from "./checkoutSuccess";

interface MatchParams {
  session_id: string;
  type: string;
}

interface props extends WithStyles<typeof Style>, RouteComponentProps<MatchParams> {
}

const defaultState = (): {

} => {
  return {
  }
}

const CheckoutDone: FunctionComponent<props> = ({ classes, match }) => {
  const { commonState } = useSelector((state: IAppState) => state);
  const dispatch = useDispatch();
  const [state, setState] = useState(defaultState());
  const stripe = useStripe();

  if (match.params.type === "cancel") {
    return (
      <div className={classes.root}>
        Cancelled
      </div>
    )
  } else if (match.params.type === "success") {
    return (
      <CheckoutSuccess session_id={match.params.session_id} />
    )
  } else return (
    <div className={classes.root}>
      Not Found
    </div>
  )
}

export default withStyles(Style)(CheckoutDone);