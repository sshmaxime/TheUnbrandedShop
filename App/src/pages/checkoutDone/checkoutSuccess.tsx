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
import { CircularProgress, Grid, Card } from "@material-ui/core";
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
import ContentLoader from "react-content-loader"
import { invoice } from "../../store/types/myType";

interface props extends WithStyles<typeof Style> {
  session_id: string;
}

const defaultState = (): {
  invoice: invoice | undefined
} => {
  return {
    invoice: {
      customerName: "Maxime Aubanel",
      shippingInfo: {
        address: "1000300 dede dede",
        country: "France",
        city: "Vice  City",
        postalCode: "34000"
      },
      items: ""
    },
  }
}

const CheckoutSuccess: FunctionComponent<props> = ({ classes, session_id }) => {
  const { commonState } = useSelector((state: IAppState) => state);
  const dispatch = useDispatch();
  const [state, setState] = useState(defaultState());
  const stripe = useStripe();

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch(process.env.REACT_APP_URL_SERVER_DEV + "/session/" + session_id, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     const invoice = await res.json() as invoice
  //     console.log(invoice)
  //     setState({ ...state, invoice: invoice })
  //   })()
  // }, [])

  return (
    <div className={classes.root}>
      {state.invoice === undefined ?
        <></>
        :
        <Card className={classes.invoice}>
          <Typography className={classes.hello}>THANK YOU !</Typography>

          <div className={classes.thanku}>
            Your payment has been accepted. You will receive an order comfirmation email shortly.
          </div>

          <div className={classes.thanku}>
            Thank you very much for trusting<br /><span style={{ fontFamily: "nobar", letterSpacing: "-3px" }}>The Unbranded Shop</span>.
          </div>

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
                <Typography className={classes.contentBill}>{state.invoice.customerName}</Typography>
                <Divider
                  style={{
                    marginBottom: "20px",
                    height: "3px",
                    backgroundColor: "black"
                  }}
                />
                <Typography className={classes.contentBill}>{state.invoice.shippingInfo.address}</Typography>
                <Typography className={classes.contentBill}>
                  {state.invoice.shippingInfo.city}, {state.invoice.shippingInfo.postalCode}
                </Typography>
                <Typography className={classes.contentBill}>{state.invoice.shippingInfo.country} </Typography>
              </div>
              <Divider
                style={{
                  height: "2px",
                  marginTop: "15px",
                  marginBottom: "15px"
                }}
              />
              {commonState.itemsInCart.map((item, index) => (
                <Grid container spacing={2} key={index}>
                  <Grid item xs={4} md={2}>
                    <img src={item.imgUrl} style={{ height: "80px" }} />
                  </Grid>

                  <Grid container item xs={8} md={8}>
                    <Grid container item xs={8} md={6}>
                      <Grid item xs={12}>
                        <div className={classes.itemConfirmation}>
                          {item.title}
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
                          1 x €{item.price}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3} >
                        <div className={classes.itemConfirmationPrice}>
                          €{item.price}
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
