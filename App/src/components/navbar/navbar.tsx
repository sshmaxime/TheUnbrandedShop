import React, { FunctionComponent, useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IAppState } from '../../store/reducers';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  SwipeableDrawer, withStyles, WithStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ShoppingBasketLogo from "@material-ui/icons/ShoppingBasket";
import Style from "./css"
import EuroIcon from "@material-ui/icons/EuroSymbol";
import DeleteIcon from "@material-ui/icons/RemoveShoppingCart";
import CloseIcon from "@material-ui/icons/CloseOutlined";
import { store } from '../../store';

interface props extends WithStyles<typeof Style> {
  normalTitle: string,
  reducedTitle: string,
}

const defaultState = (): {
  openDrawer: boolean,
} => {
  return {
    openDrawer: false,
  }
}

const Navbar: FunctionComponent<props> = ({ normalTitle, reducedTitle, classes }) => {
  const [state, setState] = useState(defaultState())
  const { storeState } = useSelector((state: IAppState) => state);
  const dispatch = useDispatch();

  const toggleDrawer = () => {
    setState({
      ...state,
      openDrawer: !state.openDrawer
    })
  }

  var oldNb: Number = storeState.itemsInCart.length;
  useEffect(() => {
    store.subscribe(() => {
      if (storeState.itemsInCart.length > oldNb) {
        setState({
          ...state,
          openDrawer: true
        })
      }
      oldNb = storeState.itemsInCart.length
    })
  }, [])

  const removeItem = (event: any) => {
    if (storeState.itemsInCart.length == 1) {
      setState({
        ...state,
        openDrawer: false
      })
    }
    dispatch({ type: "REMOVE_ITEM", payload: event.currentTarget.getAttribute("data-index") })
  };

  const cartIcon = (
    <IconButton disableRipple className={classes.cart} onClick={() => { toggleDrawer() }}>
      <ShoppingBasketLogo className={classes.cartLogo} />
    </IconButton>
  );
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar style={{ padding: 0 }}>
          <Typography className={classes.title}>
            <Link className={classes.normalTitle} to="/">
              {normalTitle}
            </Link>
            <Link className={classes.reducedTitle} to="/">
              {reducedTitle}
            </Link>
          </Typography>
          {cartIcon}
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        onOpen={() => { }}
        anchor="right"
        open={state.openDrawer}
        onClose={toggleDrawer}
      >
        <div className={classes.cartMenu} role="presentation">
          <Button className={classes.closeCartIcon} onClick={toggleDrawer}>
            <CloseIcon />
          </Button>
          <div className={classes.cartTitle}>CART</div>
          {storeState.itemsInCart.map((item, index) => (
            <div key={index} className={classes.cartItem}>
              <img className={classes.cartItemImg} alt="" src={item.model.imgUrl[0]} />
              <div className={classes.cartItemContent}>
                <Typography className={classes.cartItemTitle}>{item.id}</Typography>
                <Typography className={classes.cartItemSize}>Size: {item.size}</Typography>
                <div className={classes.cartItemPrice}>
                  <Typography className={classes.cartItemPricePrice}>{item.model.price}</Typography>
                  <EuroIcon />
                </div>
                <div className={classes.cartItemDelete}>
                  <Button style={{ minWidth: 0, padding: 0 }}>
                    <DeleteIcon
                      data-index={index}
                      className={classes.cartItemDeleteIcon}
                      onClick={removeItem}
                    />
                  </Button>
                </div>
              </div>
            </div>
          ))}
          {storeState.itemsInCart.length === 0 ? null : (
            <div className={classes.checkout}>
              <Link to="/checkout">
                <Button
                  disableRipple
                  className={classes.checkoutContainer}
                  color="inherit"
                  onClick={toggleDrawer}
                >
                  <Typography className={classes.checkoutTitle}>CHECKOUT</Typography>
                </Button>
              </Link>
            </div>
          )}
        </div>
      </SwipeableDrawer>

    </div >
  )
}

export default withStyles(Style)(Navbar);