import React, { FunctionComponent, useState, useEffect } from "react";
import Style from "./css";
import Arrow from "@material-ui/icons/KeyboardBackspace";
import { WithStyles, Card, withStyles, Grid, Typography, Button, Box } from "@material-ui/core";

interface props extends WithStyles<typeof Style> {
  history: any;
}

const defaultState = (): {
} => {
  return {
  }
}

const CheckoutCancel: FunctionComponent<props> = ({ classes, history }) => {
  return (
    <div className={classes.root}>
      <Card className={classes.invoice}>
        <Typography className={classes.hello}>Oups !</Typography>

        <div className={classes.thanku}>
          It seems that you cancelled the payment.
        </div>
        <Button
          className={classes.returnButton}
          onClick={() => { history.push("/collections") }}
        >
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Arrow style={{
            }} />
          </div>
              &nbsp;Collections
                </Button>
      </Card>
    </div >
  )

}

export default withStyles(Style)(CheckoutCancel);
