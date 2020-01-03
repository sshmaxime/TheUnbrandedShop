import React, { Component } from "react";
import Style from "./css.js";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EuroIcon from "@material-ui/icons/EuroSymbol";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import ACTIONS from "../../redux/actions";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Redirect } from "react-router";
import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import * as EmailValidator from "email-validator";
import { injectStripe } from "react-stripe-elements";
import { CardElement } from "react-stripe-elements";
import Fade from "react-reveal/Fade";

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
    label: "United States"
  },
  {
    label: "Australia"
  }
];

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.props.setRoute("/checkout");
  }
  state = {
    redirectHome: false,

    displayPayment: false,
    displayConfirmation: false,

    firstname: "d",
    lastname: "d",
    email: "d@g.com",

    country: "",
    postalCode: "3333",
    city: "333",
    address: "3333"
  };

  checkReadyToPay = () => {
    var errorFirstname = false;
    var errorLastname = false;
    var errorEmail = false;
    var errorCountry = false;
    var errorCity = false;
    var errorPostalCode = false;
    var errorAddress = false;
    var ok = true;

    if (this.state.firstname === "") {
      errorFirstname = true;
      ok = false;
    }
    if (this.state.lastname === "") {
      errorLastname = true;
      ok = false;
    }
    if (EmailValidator.validate(this.state.email) === false) {
      errorEmail = true;
      ok = false;
    }
    if (this.state.country === "") {
      errorCountry = true;
      ok = false;
    }
    if (this.state.city === "") {
      errorCity = true;
      ok = false;
    }
    if (this.state.postalCode === "") {
      errorPostalCode = true;
      ok = false;
    }
    if (this.state.address === "") {
      errorAddress = true;
      ok = false;
    }
    this.setState({
      errorFirstname: errorFirstname,
      errorLastname: errorLastname,
      errorEmail: errorEmail,
      errorCountry: errorCountry,
      errorCity: errorCity,
      errorPostalCode: errorPostalCode,
      errorAddress: errorAddress
    });
    if (ok === false) {
      this.hideConfirmation();
      this.hidePayment();
      return;
    }
    this.displayPayment();
  };
  handleChange = name => event => {
    this.setState(
      {
        [name]: event.target.value
      },
      () => {
        this.checkReadyToPay();
      }
    );
  };
  hidePayment = () => {
    this.setState({
      displayPayment: false
    });
  };
  displayPayment = () => {
    this.setState({
      displayPayment: true
    });
  };
  hideConfirmation = () => {
    this.setState({
      displayConfirmation: false
    });
  };
  displayConfirmation = () => {
    this.setState({
      displayConfirmation: true
    });
  };
  handleClickRemoveItemFromCart = event => {
    this.props.removeItemFromCart(event.currentTarget.getAttribute("index"));
    if (this.props.itemsInCart.length - 1 === 0) {
      // -1 because counting the one remove just above that hasbn't been updated yet
      this.setState({
        redirectHome: true
      });
    }
  };
  getDivPrice = classes => {
    var totalPrice = 0.0;
    for (var i = 0; i < this.props.itemsInCart.length; i++) {
      totalPrice += this.props.itemsInCart[i].price;
    }
    return (
      <div>
        <div className={classes.totalPrice}>
          <Typography className={classes.cartItemPricePrice}>{totalPrice}</Typography>
          &nbsp;
          <EuroIcon />
        </div>
      </div>
    );
  };
  getTotalPrice = () => {
    var totalPrice = 0.0;
    for (var i = 0; i < this.props.itemsInCart.length; i++) {
      totalPrice += this.props.itemsInCart[i].price;
    }
    return totalPrice;
  };
  getStepShipping = classes => {
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
                value={this.state.firstname}
                onChange={this.handleChange("firstname")}
                margin="normal"
                style={{ width: "100%" }}
                InputProps={{ style: { fontFamily: "SourceCodePro" } }}
                InputLabelProps={{ style: { fontFamily: "SourceCodePro" } }}
                variant="outlined"
                error={this.state.errorFirstname}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                required
                id="outlined-name"
                label="Lastname"
                style={{ width: "100%" }}
                InputProps={{ style: { fontFamily: "SourceCodePro" } }}
                InputLabelProps={{ style: { fontFamily: "SourceCodePro" } }}
                value={this.state.lastname}
                onChange={this.handleChange("lastname")}
                margin="normal"
                variant="outlined"
                error={this.state.errorLastname}
              />
            </Grid>

            <Grid item xs={12} md={8}>
              <TextField
                required
                style={{ width: "100%" }}
                InputProps={{ style: { fontFamily: "SourceCodePro" } }}
                InputLabelProps={{ style: { fontFamily: "SourceCodePro" } }}
                id="outlined-name"
                label="Address"
                value={this.state.address}
                onChange={this.handleChange("address")}
                margin="normal"
                variant="outlined"
                error={this.state.errorAddress}
              />
            </Grid>

            <Grid item xs={12} md={5}>
              <TextField
                required
                id="outlined-name"
                label="City"
                style={{ width: "100%" }}
                InputProps={{ style: { fontFamily: "SourceCodePro" } }}
                InputLabelProps={{ style: { fontFamily: "SourceCodePro" } }}
                value={this.state.city}
                onChange={this.handleChange("city")}
                margin="normal"
                variant="outlined"
                error={this.state.errorCity}
              />
            </Grid>

            <Grid item xs={6} md={4}>
              <TextField
                required
                id="standard-select-currency"
                select
                style={{ width: "100%" }}
                InputProps={{ style: { fontFamily: "SourceCodePro" } }}
                InputLabelProps={{ style: { fontFamily: "SourceCodePro" } }}
                label="Country"
                value={this.state.country}
                rows="4"
                onChange={this.handleChange("country")}
                margin="normal"
                variant="outlined"
                error={this.state.errorCountry}
              >
                {countries.map(option => (
                  <MenuItem key={option.label} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                required
                id="outlined-name"
                style={{ width: "100%" }}
                InputProps={{ style: { fontFamily: "SourceCodePro" } }}
                InputLabelProps={{ style: { fontFamily: "SourceCodePro" } }}
                label="PostalCode"
                value={this.state.postalCode}
                onChange={this.handleChange("postalCode")}
                margin="normal"
                variant="outlined"
                error={this.state.errorPostalCode}
              />
            </Grid>
            <Divider style={{ width: "100%", height: "2px", backgroundColor: "black" }} />
            <Grid item xs={12} md={8}>
              <TextField
                required
                id="outlined-name"
                label="Email"
                style={{ width: "100%" }}
                InputProps={{ style: { fontFamily: "SourceCodePro" } }}
                InputLabelProps={{ style: { fontFamily: "SourceCodePro" } }}
                value={this.state.email}
                onChange={this.handleChange("email")}
                margin="normal"
                variant="outlined"
                error={this.state.errorEmail}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  };

  handleSubmit = ev => {
    ev.preventDefault();

    fetch("http://localhost:8000", {
      method: "GET",
      headers: {
        "Content-Type": "text/plain",
      },
    }).then(response => response.json())
      .then(jsondata =>
        this.props.stripe.redirectToCheckout({
          sessionId: jsondata.id
        }).then(function (result) {
          console.log(result)
        })
        // if (response.ok) console.log("Purchase Complete!");
      )
  };
  getStepPayment = classes => {
    var stepPayment = !this.state.displayPayment ? null : (
      <div
        style={{
          marginTop: "15px",
          marginBottom: "5px",
          padding: "20px",
          borderRadius: "3px",
          boxShadow: "5px 4px 10px grey"
        }}
      >
        <CardElement
          onChange={obj => {
            if (obj.complete === true) {
              this.displayConfirmation();
            } else {
              this.hideConfirmation();
            }
          }}
          style={{
            base: { fontSize: "18px", fontFamily: "Source Code Pro, Monospace" }
          }}
        />
      </div>
    );

    return (
      <div>
        <Typography className={classes.titleStep}>Payment</Typography>
        {stepPayment}
      </div>
    );
  };
  getStepConfirm = classes => {
    const fullname = this.state.firstname + " " + this.state.lastname;

    var stepConfirm = !this.state.displayConfirmation ? null : (
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
          <Typography className={classes.contentBill}>{this.state.address}</Typography>
          <Typography className={classes.contentBill}>
            {this.state.city}, {this.state.postalCode}
          </Typography>
          <Typography className={classes.contentBill}>{this.state.country} </Typography>
        </div>
        <Divider
          style={{
            height: "2px",
            marginTop: "15px",
            marginBottom: "15px"
          }}
        />
        {this.props.itemsInCart.map((item, index) => (
          <div key={index} className={classes.itemConfirmation}>
            1x {item.title} ${item.price}
          </div>
        ))}
        <Divider
          style={{
            height: "2px",
            marginTop: "15px",
            marginBottom: "15px"
          }}
        />
        <Typography className={classes.confirmationPrice}>
          Total: ${this.getTotalPrice()}
        </Typography>
        <Button
          style={{
            marginTop: "20px",
            fontSize: "1.5em",
            backgroundColor: "black",
            fontFamily: "SourceCodePro",
            letterSpacing: "10px",
            color: "white",
            paddingTop: "0px",
            paddingBottom: "0px",
            paddingLeft: "30px",
            paddingRight: "30px"
          }}
          className={classes.buttonConfirmation}
          onClick={this.handleSubmit}
        >
          PAY
        </Button>
      </div>
    );
    return (
      <div>
        <Typography className={classes.titleStep}>Confirmation</Typography>
        {stepConfirm}
      </div>
    );
  };

  render() {
    const { classes } = this.props;
    if (this.state.redirectHome) {
      return <Redirect push to="/" />;
    }
    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Box clone order={{ xs: 2, sm: 2, md: 1 }}>
            <Grid item xs={12} md={7}>
              <Fade delay={100}>
                <div className={classes.step}>{this.getStepShipping(classes)}</div>
              </Fade>

              <Fade delay={200}>
                <Collapse in={this.state.displayPayment} collapsedHeight="80px">
                  <div
                    className={this.state.displayPayment ? classes.step2 : classes.step2Disabled}
                  >
                    {this.getStepPayment(classes)}
                  </div>
                </Collapse>
              </Fade>

              <Fade delay={300}>
                <Collapse in={this.state.displayConfirmation} collapsedHeight="80px">
                  <div
                    className={
                      this.state.displayConfirmation ? classes.step2 : classes.step2Disabled
                    }
                  >
                    {this.getStepConfirm(classes)}
                  </div>
                </Collapse>
              </Fade>
            </Grid>
          </Box>

          <Box clone order={{ xs: 1, sm: 1, md: 2 }}>
            <Grid item xs={12} md={5}>
              <Fade delay={400}>
                <div className={classes.step}>
                  <Typography className={classes.titleStep}>Cart</Typography>
                  {this.props.itemsInCart.map((item, index) => (
                    <div key={index} className={classes.cartItem}>
                      <img className={classes.cartItemImg} alt="" src={item.imgUrl} />
                      <div className={classes.cartItemContent}>
                        <Typography className={classes.cartItemTitle}>{item.title}</Typography>
                        <Typography className={classes.cartItemSize}>Size: {item.size}</Typography>
                        <div className={classes.cartItemPrice}>
                          <Typography className={classes.cartItemPricePrice}>
                            {item.price}
                          </Typography>
                          &nbsp;
                          <EuroIcon />
                        </div>
                        <div
                          index={index}
                          className={classes.cartItemDelete}
                          onClick={this.handleClickRemoveItemFromCart}
                        >
                          <Button style={{ minWidth: 0, padding: 0 }}>
                            <DeleteIcon className={classes.cartItemDeleteIcon} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {this.getDivPrice(classes)}
                </div>
              </Fade>
            </Grid>
          </Box>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  itemsInCart: state.cart
});

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: index => dispatch(ACTIONS.removeItemFromCart(index)),
  setRoute: route => dispatch(ACTIONS.setRoute(route))
});

export default injectStripe(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(Style)(Checkout))
);
