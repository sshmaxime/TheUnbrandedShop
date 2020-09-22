import React, { FunctionComponent, useState, useEffect } from "react";
import Style from "./css";
import EuroIcon from "@material-ui/icons/EuroSymbol";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
// import ACTIONS from "../../redux/actions";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { CircularProgress, Card } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import * as EmailValidator from 'email-validator';
// import { injectStripe } from "react-stripe-elements";
import { Elements, CardElement } from '@stripe/react-stripe-js';
// import Fade from "react-reveal/Fade";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IAppState } from '../../store/reducers';
import { useStripe } from '@stripe/react-stripe-js';
import { useParams, RouteComponentProps } from 'react-router-dom';
import { render } from "@testing-library/react";
import ContentLoader from "react-content-loader"
import { invoice } from "../../store/types/myType";
import Arrow from "@material-ui/icons/KeyboardBackspace";
import { WithStyles, withStyles, Grid, Typography, Button, Box } from "@material-ui/core";

interface props extends WithStyles<typeof Style> {
  history: any;
}

const defaultState = (): {
} => {
  return {
  }
}

const Error404: FunctionComponent<props> = ({ classes, history }) => {
  return (
    <div className={classes.root}>
      <Card className={classes.invoice}>
        <Typography className={classes.hello}>404 Not Found</Typography>

        <div className={classes.thanku}>
          It seems like you are at the wrong place.
        </div>
      </Card>
    </div >
  )

}

export default withStyles(Style)(Error404);
