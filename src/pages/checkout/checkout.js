import React, { Component } from "react";
import Style from "./css.js";
import { withStyles } from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EuroIcon from "@material-ui/icons/EuroSymbol";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import ACTIONS from "../../redux/actions";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Redirect } from "react-router";

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
  state = {
    redirectHome: false,

    steps: ["Review order", "Shipping", "Payment"],
    activeStep: 0,

    firstname: "",
    lastname: "",
    email: "",

    country: "",
    zip: "",
    city: "",
    address: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
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

  getTotalPrice = classes => {
    var totalPrice = 0.0;
    for (var i = 0; i < this.props.itemsInCart.length; i++) {
      totalPrice += this.props.itemsInCart[i].price;
    }
    return (
      <div>
        <div className={classes.totalPrice}>
          Total: &nbsp;
          <Typography className={classes.cartItemPricePrice}>{totalPrice}</Typography>
          <EuroIcon />
        </div>
      </div>
    );
  };

  getStepContent = (classes, step) => {
    switch (step) {
      case 0:
        return (
          <div className={classes.step}>
            {this.props.itemsInCart.map((item, index) => (
              <div key={index} className={classes.cartItem}>
                <img className={classes.cartItemImg} alt="" src={item.imgUrl} />
                <div className={classes.cartItemContent}>
                  <Typography className={classes.cartItemTitle}>{item.title}</Typography>
                  <div className={classes.cartItemPrice}>
                    <Typography className={classes.cartItemPricePrice}>{item.price}</Typography>
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
            {this.getTotalPrice(classes)}
          </div>
        );
      case 1:
        return (
          <div className={classes.step}>
            <form className={classes.container} noValidate autoComplete="off">
              <div>
                <TextField
                  required
                  label="Firstname"
                  className={classes.formItem}
                  value={this.state.firstname}
                  onChange={this.handleChange("firstname")}
                  margin="normal"
                  variant="outlined"
                  error={this.state.errorFirstname}
                />
                <TextField
                  required
                  id="outlined-name"
                  label="Lastname"
                  className={classes.formItem}
                  value={this.state.lastname}
                  onChange={this.handleChange("lastname")}
                  margin="normal"
                  variant="outlined"
                  error={this.state.errorLastname}
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-name"
                  label="Email"
                  className={classes.formItem}
                  value={this.state.email}
                  onChange={this.handleChange("email")}
                  margin="normal"
                  variant="outlined"
                  error={this.state.errorEmail}
                />
              </div>
              <div>
                <TextField
                  required
                  id="standard-select-currency"
                  select
                  label="Country"
                  className={classes.formCountry}
                  value={this.state.country}
                  rows="4"
                  onChange={this.handleChange("country")}
                  margin="normal"
                  error={this.state.errorCountry}
                >
                  {countries.map(option => (
                    <MenuItem key={option.label} value={option.label}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  required
                  id="outlined-name"
                  label="City"
                  className={classes.formItem}
                  value={this.state.city}
                  onChange={this.handleChange("city")}
                  margin="normal"
                  variant="outlined"
                  error={this.state.errorCity}
                />
                <TextField
                  required
                  id="outlined-name"
                  label="Zip"
                  className={classes.formItem}
                  value={this.state.zip}
                  onChange={this.handleChange("zip")}
                  margin="normal"
                  variant="outlined"
                  error={this.state.errorZip}
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-name"
                  label="Address"
                  className={classes.formAddress}
                  value={this.state.address}
                  onChange={this.handleChange("address")}
                  margin="normal"
                  variant="outlined"
                  error={this.state.errorAddress}
                />
              </div>
            </form>
          </div>
        );
      case 2:
        return (
          <div className={classes.step}>
            <div>hey</div>
          </div>
        );
      default:
        return (
          <div className={classes.step}>
            <div>hey</div>
          </div>
        );
    }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };
  handleNext = () => {
    if (this.state.activeStep === 1) {
      var errorFirstname = false;
      var errorLastname = false;
      var errorEmail = false;
      var errorCountry = false;
      var errorCity = false;
      var errorZip = false;
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
      if (this.state.email === "") {
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
      if (this.state.zip === "") {
        errorZip = true;
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
        errorZip: errorZip,
        errorAddress: errorAddress
      });
      if (ok === false) return;
    }
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };
  render() {
    const { classes } = this.props;
    if (this.state.redirectHome) {
      return <Redirect push to="/" />;
    }
    return (
      <div className={classes.root}>
        <Stepper className={classes.stepper} activeStep={this.state.activeStep}>
          {this.state.steps.map((label, index) => {
            return (
              <Step key={index}>
                <StepLabel
                  StepIconProps={{
                    classes: {
                      root: classes.icon,
                      active: classes.activeIcon,
                      completed: classes.completedIcon
                    }
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {this.state.activeStep === this.state.steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you're finished
              </Typography>
              <Button onClick={this.handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              {this.getStepContent(classes, this.state.activeStep)}
              <div className={classes.buttonNavigate}>
                <Button
                  disabled={this.state.activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.buttonBack}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.buttonNext}
                  style={{ "&:hover": "red" }}
                >
                  {this.state.activeStep === this.state.steps.length - 1 ? "Confirm" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  itemsInCart: state.cart
});

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: index => dispatch(ACTIONS.removeItemFromCart(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Style)(Checkout));
