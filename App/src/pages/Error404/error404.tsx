import React, { FunctionComponent } from "react";
import Style from "./css";
import { Card, WithStyles, withStyles, Typography } from "@material-ui/core";

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
