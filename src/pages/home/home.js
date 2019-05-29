import React, { Component } from "react";
import { withStyles, Typography, Divider, Button } from "@material-ui/core";
import Style from "./css.js";
import ItemList from "../../components/itemList/itemList";
import EuroIcon from "@material-ui/icons/EuroSymbol";
import AddCart from "@material-ui/icons/AddShoppingCart";
import createDeepstream from "deepstream.io-client-js";

class Home extends Component {
  constructor(props) {
    super(props);

    this.ds = createDeepstream("0.0.0.0:6020");
    this.client = this.ds.login();
    this.store = this.ds.record.getRecord("store");

    this.store.subscribe(data => {
      this.setState({
        items: data.items,
        isReady: true
      });
    });
  }
  state = {
    isShowcaseOn: false,
    showcaseItem: null,
    items: null,
    isReady: false
  };

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
  }

  closeShowcase = () => {
    this.setState(_ => ({
      isShowcaseOn: false
    }));
  };

  escFunction = event => {
    if (event.keyCode === 27) {
      this.closeShowcase();
    }
  };

  handleClickOnItem = event => {
    const itemIndex = event.currentTarget.getAttribute("index");
    this.setState(state => ({
      isShowcaseOn: !state.isShowcaseOn,
      showcaseItem: state.items[itemIndex]
    }));
    console.log(this.state.items[itemIndex]);
    event.preventDefault();
  };

  isShowcaseOn(classes) {
    return (
      <React.Fragment>
        <div className={classes.showcaseContainer} onClick={this.closeShowcase} />
        <div className={classes.showcaseItem}>
          <img className={classes.showcaseImg} alt="" src={this.state.showcaseItem.imgUrl} />
          <div className={classes.showcaseInfo}>
            <Typography className={classes.showcaseInfoTitle}>
              {this.state.showcaseItem.title}
            </Typography>
            <Divider />
            <div className={classes.showcaseInfoPrice}>
              <div className={classes.showcaseInfoPricePrice}>{this.state.showcaseItem.price}</div>
              <EuroIcon className={classes.showcaseInfoPriceLogo} />
            </div>
            <Typography className={classes.showcaseInfoInfoTitle}>Information:</Typography>
            <div className={classes.showcaseInfoInfoContent}>
              {this.state.showcaseItem.info.map((info, index) => (
                <div key={index}>
                  <span style={{ fontWeight: "bold" }}>{info[0]}</span>
                  <span>: </span>
                  <span>{info[1]}</span>
                </div>
              ))}
            </div>
            <Button variant="contained" className={classes.addToCart}>
              <AddCart />
              Add To Cart
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  render() {
    const { classes } = this.props;
    if (this.state.isReady)
      return (
        <div className={classes.root}>
          <ItemList items={this.state.items} handleFunction={this.handleClickOnItem} />
          {this.state.isShowcaseOn ? this.isShowcaseOn(classes) : null}
        </div>
      );
    return null;
  }
}

export default withStyles(Style)(Home);
