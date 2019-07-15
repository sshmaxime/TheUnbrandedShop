import React, { Component } from "react";
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  SwipeableDrawer
} from "@material-ui/core";
import Style from "./css.js";
import ShoppingBasketLogo from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import EuroIcon from "@material-ui/icons/EuroSymbol";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import ACTIONS from "../../redux/actions";
import { Animate, AnimateGroup } from "react-simple-animate";

const props = {
  start: { opacity: 0 },
  end: { opacity: 1 }
};

class Navbar extends Component {
  state = {
    displayCart: false
  };
  toggleCart = () => {
    this.setState(state => {
      return { displayCart: !state.displayCart };
    });
  };

  handleClickRemoveItemFromCart = event => {
    this.props.removeItemFromCart(event.currentTarget.getAttribute("index"));
    if (this.props.itemsInCart.length === 1) {
      this.toggleCart();
    }
  };
  render() {
    const { classes } = this.props;
    const cartIcon = (
      <IconButton disableRipple className={classes.cart} onClick={this.toggleCart}>
        <AnimateGroup play>
          <Animate {...props} sequenceIndex={1} delay={0} duration={0.5}>
            <ShoppingBasketLogo className={classes.cartLogo} />
          </Animate>
        </AnimateGroup>
      </IconButton>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.navbar} position="static">
          <Toolbar style={{ padding: 0 }}>
            {/* <Button disableRipple className={classes.aboutUs} color="inherit">
              <Link to="/aboutus">
                <Typography className={classes.aboutUsText}>ABOUT US</Typography>
              </Link>
            </Button> */}
            <Typography className={classes.title}>
              <Link className={classes.normalTitle} to="/">
                {this.props.normalTitle}
              </Link>
              <Link className={classes.reducedTitle} to="/">
                {this.props.reducedTitle}
              </Link>
            </Typography>
            {this.props.itemsInCart.length === 0 || this.props.route === "/checkout"
              ? null
              : cartIcon}
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          onOpen={() => {}}
          anchor="right"
          open={this.state.displayCart}
          onClose={this.toggleCart}
        >
          <div className={classes.cartMenu} role="presentation">
            <div className={classes.cartTitle}>CART</div>
            {this.props.itemsInCart.map((item, index) => (
              <div key={index} className={classes.cartItem}>
                <img className={classes.cartItemImg} alt="" src={item.imgUrl} />
                <div className={classes.cartItemContent}>
                  <Typography className={classes.cartItemTitle}>{item.title}</Typography>
                  <div className={classes.cartItemPrice}>
                    <Typography className={classes.cartItemPricePrice}>{item.price}</Typography>
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
            {this.props.itemsInCart.length === 0 ? null : (
              <div className={classes.checkout}>
                <Link to="/checkout">
                  <Button
                    disableRipple
                    className={classes.checkoutContainer}
                    color="inherit"
                    onClick={this.toggleCart}
                  >
                    <Typography className={classes.checkoutTitle}>CHECKOUT</Typography>
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  itemsInCart: state.cart,
  route: state.route
});

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: index => dispatch(ACTIONS.removeItemFromCart(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Style)(Navbar));
