import React, { Component } from "react";
import { withStyles, AppBar, Toolbar, Typography, IconButton, Button } from "@material-ui/core";
import Style from "./css.js";
import ShoppingBasketLogo from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

class Navbar extends Component {
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
            <IconButton className={classes.cart} color="inherit">
              <Link to="/checkout">
                <ShoppingBasketLogo className={classes.cartLogo} />
              </Link>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(Style)(Navbar);
