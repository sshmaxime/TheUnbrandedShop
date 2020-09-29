import React, { FunctionComponent, useState, useEffect } from "react";
import Style from "./css";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EuroIcon from "@material-ui/icons/EuroSymbol";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import * as EmailValidator from 'email-validator';
import { WithStyles, withStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IAppState } from '../../store/reducers';
import { useStripe } from '@stripe/react-stripe-js';

const countries = [
  {
    label: "France"
  },
  {
    label: "Italy"
  },
  {
    label: "Spain"
  },
  {
    label: "UK"
  },
  {
    label: "US"
  },
  {
    label: "Australia"
  }
];

interface props extends WithStyles<typeof Style> {
}

const defaultState = (): {
  firstname: string,

  lastname: string,

  email: string,

  country: string,

  city: string,

  postalCode: string,

  address: string,
  ok: boolean,
} => {
  return {
    firstname: "Maxime",

    lastname: "Aubanel",

    email: "max@gmail.co",

    country: "France",

    city: "Montpellier",

    postalCode: "34980",

    address: "1030 chemin du Mas de L'huile",
    ok: false,
  }
}

const defaultDisplayState = (): {
  displayConfirmation: boolean,
} => {
  return {
    displayConfirmation: false,
  }
}

const defaultErrorState = (): {
  errorFirstname: boolean,
  errorLastname: boolean,
  errorAddress: boolean,
  errorPostalCode: boolean,
  errorCity: boolean,
  errorEmail: boolean,
  errorCountry: boolean,


} => {
  return {
    errorAddress: false,
    errorPostalCode: false,
    errorCity: false,
    errorCountry: false,
    errorEmail: false,
    errorLastname: false,
    errorFirstname: false,
  }
}

const Checkout: FunctionComponent<props> = ({ classes }) => {
  const { storeState } = useSelector((state: IAppState) => state);
  const dispatch = useDispatch();
  const [state, setState] = useState(defaultState());
  const [displayState, setDisplayState] = useState(defaultDisplayState());
  const [errorState, setErrorState] = useState(defaultErrorState());
  const stripe = useStripe();

  const checkReadyToPay = () => {
    var errorFirstname = false;
    var errorLastname = false;
    var errorEmail = false;
    var errorCountry = false;
    var errorCity = false;
    var errorPostalCode = false;
    var errorAddress = false;
    var ok = true;

    if (state.firstname === "") {
      errorFirstname = true;
      ok = false;
    }
    if (state.lastname === "") {
      errorLastname = true;
      ok = false;
    }
    if (EmailValidator.validate(state.email) === false) {
      errorEmail = true;
      ok = false;
    }
    if (state.country === "") {
      errorCountry = true;
      ok = false;
    }
    if (state.city === "") {
      errorCity = true;
      ok = false;
    }
    if (state.postalCode === "") {
      errorPostalCode = true;
      ok = false;
    }
    if (state.address === "") {
      errorAddress = true;
      ok = false;
    }
    setErrorState({
      ...errorState,
      errorFirstname: errorFirstname,
      errorLastname: errorLastname,
      errorEmail: errorEmail,
      errorCountry: errorCountry,
      errorCity: errorCity,
      errorPostalCode: errorPostalCode,
      errorAddress: errorAddress
    });
    if (ok === false) {
      setDisplayState({
        ...displayState,
        displayConfirmation: false
      })
      return;
    }
    console.log("chceck")
    setDisplayState({
      ...displayState,
      displayConfirmation: true
    })
  };

  const getTotalPrice = () => {
    var totalPrice = 0.0;
    for (var i = 0; i < storeState.itemsInCart.length; i++) {
      totalPrice += Number(storeState.itemsInCart[i].model.price);
    }
    return totalPrice;
  };

  const handleChange = (name: string) => (event: any) => {
    setState(
      {
        ...state,
        [name]: event.target.value
      },
    );
  };

  useEffect(() => {
    checkReadyToPay();
  }, [state])

  const removeItem = (event: any) => {
    dispatch({ type: "REMOVE_ITEM", payload: event.currentTarget.getAttribute("data-index") })
  };

  const getDivPrice = () => {
    var totalPrice = 0.0;
    for (var i = 0; i < storeState.itemsInCart.length; i++) {
      totalPrice += Number(storeState.itemsInCart[i].model.price);
    }
    return (
      <div>
        <div className={classes.totalPrice}>
          <Typography className={classes.cartItemPricePrice}>{totalPrice}</Typography>
          &nbsp;
          <EuroIcon style={{ fontSize: "2em" }} />
        </div>
      </div>
    );
  };

  const getStepShipping = () => {
    return (
      <div>
        <Typography className={classes.titleStep}>Shipping Information</Typography>
        <div
          style={{
            marginTop: "15px",
            marginBottom: "5px",
            padding: "20px",
            borderRadius: "3px",
            boxShadow: "5px 4px 10px grey"
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={6} md={4}>
              <TextField
                required
                label="Firstname"
                value={state.firstname}
                onChange={handleChange("firstname")}
                margin="normal"
                style={{ width: "100%" }}
                InputProps={{ style: { fontFamily: "SourceCodePro" } }}
                InputLabelProps={{ style: { fontFamily: "SourceCodePro" } }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                required
                label="Lastname"
                style={{ width: "100%" }}
                InputProps={{ style: { fontFamily: "SourceCodePro" } }}
                InputLabelProps={{ style: { fontFamily: "SourceCodePro" } }}
                value={state.lastname}
                onChange={handleChange("lastname")}
                margin="normal"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={8}>
              <TextField
                required
                style={{ width: "100%" }}
                InputProps={{ style: { fontFamily: "SourceCodePro" } }}
                InputLabelProps={{ style: { fontFamily: "SourceCodePro" } }}
                label="Address"
                value={state.address}
                onChange={handleChange("address")}
                margin="normal"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={5}>
              <TextField
                required
                label="City"
                style={{ width: "100%" }}
                InputProps={{ style: { fontFamily: "SourceCodePro" } }}
                InputLabelProps={{ style: { fontFamily: "SourceCodePro" } }}
                value={state.city}
                onChange={handleChange("city")}
                margin="normal"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={5} md={4}>
              <TextField
                required
                select
                style={{ width: "100%" }}
                InputProps={{ style: { fontFamily: "SourceCodePro" } }}
                InputLabelProps={{ style: { fontFamily: "SourceCodePro" } }}
                label="Country"
                value={state.country}
                rows="4"
                onChange={handleChange("country")}
                margin="normal"
                variant="outlined"
              >
                {countries.map(option => (
                  <MenuItem key={option.label} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={7} md={3}>
              <TextField
                required
                style={{ width: "100%" }}
                InputProps={{ style: { fontFamily: "SourceCodePro" } }}
                InputLabelProps={{ style: { fontFamily: "SourceCodePro" } }}
                label="PostalCode"
                value={state.postalCode}
                onChange={handleChange("postalCode")}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Divider style={{ width: "100%", height: "2px", backgroundColor: "black" }} />
            <Grid item xs={12} md={8}>
              <TextField
                required
                label="Email"
                style={{ width: "100%" }}
                InputProps={{ style: { fontFamily: "SourceCodePro" } }}
                InputLabelProps={{ style: { fontFamily: "SourceCodePro" } }}
                value={state.email}
                onChange={handleChange("email")}
                margin="normal"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  };

  const handleSubmit = () => {
    if (!stripe) {
      console.log("error");
      return
    }

    fetch("http://192.168.1.165:8000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: storeState.itemsInCart,
        user: state
      })
    }).then(response => response.json())
      .then(jsondata =>
        stripe.redirectToCheckout({
          sessionId: jsondata.id,
        }).then(function (result: any) {
          console.log(result)
        })
      )
  };

  const getStepConfirm = () => {
    const fullname = state.firstname + " " + state.lastname;

    var stepConfirm = !displayState.displayConfirmation ? null : (
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
          <Typography className={classes.contentBill}>{fullname}</Typography>
          <Divider
            style={{
              marginBottom: "20px",
              height: "3px",
              backgroundColor: "black"
            }}
          />
          <Typography className={classes.contentBill}>{state.address}</Typography>
          <Typography className={classes.contentBill}>
            {state.city}, {state.postalCode}
          </Typography>
          <Typography className={classes.contentBill}>{state.country} </Typography>
        </div>
        <Divider
          style={{
            height: "2px",
            marginTop: "15px",
            marginBottom: "15px"
          }}
        />
        {storeState.itemsInCart.map((item, index) => (
          <Grid container spacing={2} key={index}>
            <Grid item xs={4} md={2}>
              <img src={item.model.imgUrl[0]} style={{ height: "80px" }} />
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
          Total: ${getTotalPrice()}
        </Typography>
        <Button
          style={{
            marginTop: "20px",
            fontSize: "1.2em",
            backgroundColor: "black",
            fontFamily: "SourceCodePro",
            letterSpacing: "1px",
            color: "white",
            paddingTop: "0px",
            paddingBottom: "0px",
            paddingLeft: "10px",
            paddingRight: "10px"
          }}
          onClick={handleSubmit}
        >
          PAY
        </Button>
      </div >
    );
    return (
      <div>
        <Typography className={classes.titleStep}>Confirmation</Typography>
        {stepConfirm}
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Box clone order={{ xs: 2, sm: 2, md: 1 }}>
          <Grid item xs={12} md={7}>
            <div className={classes.step}>{getStepShipping()}</div>

            <Collapse in={displayState.displayConfirmation} collapsedHeight="80px">
              <div
                className={
                  displayState.displayConfirmation ? classes.step2 : classes.step2Disabled
                }
              >
                {getStepConfirm()}
              </div>
            </Collapse>
          </Grid>
        </Box>

        <Box clone order={{ xs: 1, sm: 1, md: 2 }}>
          <Grid item xs={12} md={5}>
            <div className={classes.step}>
              <Typography className={classes.titleStep}>Cart</Typography>
              {storeState.itemsInCart.map((item, index) => (
                <div key={index} className={classes.cartItem}>
                  <img className={classes.cartItemImg} alt="" src={item.model.imgUrl[0]} />
                  <div className={classes.cartItemContent}>
                    <Typography className={classes.cartItemTitle}>{item.id}</Typography>
                    <Typography className={classes.cartItemSize}>Size: {item.size}</Typography>
                    <div className={classes.cartItemPrice}>
                      <Typography className={classes.cartItemPricePrice}>
                        {item.model.price}
                      </Typography>
                          &nbsp;
                          <EuroIcon style={{ fontSize: "2em" }} />
                    </div>
                    <div
                      data-index={index}
                      className={classes.cartItemDelete}
                      onClick={removeItem}
                    >
                      <Button style={{ minWidth: 0, padding: 0 }}>
                        <DeleteIcon className={classes.cartItemDeleteIcon} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              {getDivPrice()}
            </div>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
}

export default withStyles(Style)(Checkout);
