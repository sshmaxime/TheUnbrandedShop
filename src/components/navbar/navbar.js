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

const testData = [
  {
    imgUrl:
      "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
    title: "Crzy",
    price: 299.99,
    info: [["Manufacturer", "Supreme"], ["Material", "100% Cotton"]]
  },
  {
    imgUrl:
      "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
    title: "Crdedzy",
    price: 0,
    info: "histo"
  }
];

class Navbar extends Component {
  state = {
    displayCart: false
  };
  toggleCart = () => {
    this.setState(state => {
      return { displayCart: !state.displayCart };
    });
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
            {testData.length > 0 ? cartIcon : null}
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          onOpen={() => {}}
          anchor="right"
          open={this.state.displayCart}
          onClose={this.toggleCart}
        >
          <div
            className={classes.cartMenu}
            role="presentation"
            onClick={this.toggleCart}
            onKeyDown={this.toggleCart}
          >
            <div className={classes.cartTitle}>CART</div>
            {testData.map((item, index) => (
              <div key={index} className={classes.cartItem}>
                <img className={classes.cartItemImg} alt="" src={item.imgUrl} />
                <div className={classes.cartItemContent}>
                  <Typography className={classes.cartItemTitle}>{item.title}</Typography>
                  <div className={classes.cartItemPrice}>
                    <Typography className={classes.cartItemPricePrice}>{item.price}</Typography>
                    <EuroIcon />
                  </div>
                </div>
              </div>
            ))}
            <div className={classes.checkout}>
              <Button disableRipple className={classes.checkoutContainer} color="inherit">
                <Link to="/checkout">
                  <Typography className={classes.checkoutTitle}>CHECKOUT</Typography>
                </Link>
              </Button>
            </div>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

export default withStyles(Style)(Navbar);
