import React, { FunctionComponent, useEffect, useState } from "react";
import Style from "./css";
import Typography from "@material-ui/core/Typography";
import { Grid, Card } from "@material-ui/core";

import Divider from "@material-ui/core/Divider";
import { WithStyles, withStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { IAppState } from '../../store/reducers';
import { checkoutInfo } from "../../store/types/checkout";
import { RouteComponentProps } from "react-router-dom";

interface MatchParams {
  checkout_id: string;
}

interface props extends WithStyles<typeof Style>, RouteComponentProps<MatchParams> {
}

const defaultState = (): {
  checkoutInfo: checkoutInfo | undefined
} => {
  return {
    checkoutInfo: undefined
  }
}

const CheckoutSuccess: FunctionComponent<props> = ({ classes, match }) => {
  const { storeState } = useSelector((state: IAppState) => state);
  const [state, setState] = useState(defaultState());


  useEffect(() => {
    (async () => {
      const res = await fetch(process.env.REACT_APP_SERVER_URL_DEV + "/checkout/" + match.params.checkout_id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const checkoutInfo = await res.json() as checkoutInfo
      setState({ ...state, checkoutInfo: checkoutInfo })
    })()
  }, [])

  return (
    <div className={classes.root}>
      {state.checkoutInfo === undefined ?
        <></>
        :
        <Card className={classes.invoice}>
          <Typography className={classes.hello}>THANK YOU !</Typography>

          <div className={classes.thanku}>
            Your payment has been accepted. You will receive an order confirmation email shortly.
          </div>

          <div className={classes.thanku2}>
            Thank you very much for trusting us.
          </div>

          <div style={{ fontFamily: "nobar", letterSpacing: "-3px", textAlign: "center", marginBottom: "30px" }} > The Unbranded Shop</div>

          <div className={classes.detailOrder}>
            <div
              style={{
                marginTop: "15px",
                marginBottom: "5px",
                padding: "20px",
                borderRadius: "3px",
                boxShadow: "5px 4px 10px grey"
              }}
            >
              <div>
                <Typography className={classes.contentBill}>{state.checkoutInfo.customer.firstname} {state.checkoutInfo.customer.lastname}</Typography>
                <Divider
                  style={{
                    marginBottom: "20px",
                    height: "3px",
                    backgroundColor: "black"
                  }}
                />
                <Typography className={classes.contentBill}>{state.checkoutInfo.shipping.address}</Typography>
                <Typography className={classes.contentBill}>
                  {state.checkoutInfo.shipping.city}, {state.checkoutInfo.shipping.postalCode}
                </Typography>
                <Typography className={classes.contentBill}>{state.checkoutInfo.shipping.country} </Typography>
              </div>
              <Divider
                style={{
                  height: "2px",
                  marginTop: "15px",
                  marginBottom: "15px"
                }}
              />
              {state.checkoutInfo.cartItems.map((item, index) => (
                <Grid container spacing={2} key={index}>

                  <Grid item xs={4} md={2}>
                    <img src={item.model.imgUrl[0]} alt={"img" + index} style={{ height: "80px" }} />
                  </Grid>

                  <Grid container item xs={8} md={8}>
                    <Grid container item xs={8} md={6}>
                      <Grid item xs={12}>
                        <div className={classes.itemConfirmation}>
                          {item.id}
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div className={classes.itemConfirmationSize}>
                          {item.size}
                        </div>
                      </Grid>
                    </Grid>

                    <Grid container item xs={4} md={6}>
                      <Grid item xs={12} md={9}>
                        <div className={classes.itemConfirmationPrices}>
                          1 x €{item.model.price}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3} >
                        <div className={classes.itemConfirmationPrice}>
                          €{item.model.price}
                        </div>
                      </Grid>
                    </Grid>

                  </Grid>
                </Grid>
              ))
              }
              <Divider
                style={{
                  height: "2px",
                  marginTop: "15px",
                  marginBottom: "15px"
                }}
              />
              <Typography className={classes.confirmationPrice}>
                {/* TODO */}
                {/* Total: ${getTotalPrice()} */}
              </Typography>

            </div >
          </div >
        </Card>
      }

    </div >
  )

}

export default withStyles(Style)(CheckoutSuccess);
