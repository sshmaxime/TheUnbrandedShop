import React, { Component } from "react";
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Drawer,
  SwipeableDrawer
} from "@material-ui/core";
import Style from "./css.js";
import ShoppingBasketLogo from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

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

    return (
      <div className={classes.root}>
        <AppBar className={classes.navbar} position="static">
          <Toolbar style={{ padding: 0 }}>
            <Button className={classes.aboutUs} color="inherit">
              <Typography className={classes.aboutUsText}>
                <Link to="/aboutus">ABOUT US</Link>
              </Typography>
            </Button>
            <Typography className={classes.title}>
              <Link to="/">{this.props.title}</Link>
            </Typography>
            <IconButton className={classes.cart} onClick={this.toggleCart}>
              <ShoppingBasketLogo className={classes.cartLogo} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer anchor="right" open={this.state.displayCart} onClose={this.toggleCart}>
          <div
            className={classes.cartMenu}
            role="presentation"
            onClick={this.toggleCart}
            onKeyDown={this.toggleCart}
          >
            <div className={classes.cartItem}>Item1</div>
            <div className={classes.cartItem}>Item2</div>
            <div>hello</div>
            <Divider />
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

export default withStyles(Style)(Navbar);
