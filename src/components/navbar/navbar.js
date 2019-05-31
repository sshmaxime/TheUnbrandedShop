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
  };

  render() {
    const { classes } = this.props;
    const cartIcon = (
      <IconButton disableRipple className={classes.cart} onClick={this.toggleCart}>
        <ShoppingBasketLogo className={classes.cartLogo} />
      </IconButton>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.navbar} position="static">
          <Toolbar style={{ padding: 0 }}>
            <Button disableRipple className={classes.aboutUs} color="inherit">
              <Link to="/aboutus">
                <Typography className={classes.aboutUsText}>ABOUT US</Typography>
              </Link>
            </Button>
            <Typography className={classes.title}>
              <Link to="/">{this.props.title}</Link>
            </Typography>
            {this.props.itemsInCart.length > 0 ? cartIcon : null}
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
                <Button disableRipple className={classes.checkoutContainer} color="inherit">
                  <Link to="/checkout">
                    <Typography className={classes.checkoutTitle}>CHECKOUT</Typography>
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </SwipeableDrawer>
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
)(withStyles(Style)(Navbar));
