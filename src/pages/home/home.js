import React, { Component } from "react";
import { withStyles, Typography, Divider, Button } from "@material-ui/core";
import Style from "./css.js";
import ItemList from "../../components/itemList/itemList";
import EuroIcon from "@material-ui/icons/EuroSymbol";
import AddCart from "@material-ui/icons/AddShoppingCart";
import { connect } from "react-redux";
import ACTIONS from "../../redux/actions";

class Home extends Component {
  constructor(props) {
    super(props);

    // Get item from server and store them in the state
    const items = this.props.store.get("items");
    this.state.items = items;

    document.addEventListener("keydown", this.escFunction, false);
  }

  state = {
    isShowcaseOn: false,
    showcaseItem: null,
    items: null
  };

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
    event.preventDefault();
  };
  handleClickAddToCart = () => {
    console.log(this.state.showcaseItem);
    this.props.addItemToCart(this.state.showcaseItem);
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
            <Button
              variant="contained"
              className={classes.addToCart}
              onClick={this.handleClickAddToCart}
            >
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
    return (
      <div className={classes.root}>
        <ItemList items={this.state.items} handleFunction={this.handleClickOnItem} />
        {this.state.isShowcaseOn ? this.isShowcaseOn(classes) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  store: state.remoteData.get("store"),
  isReady: state.isReady
});

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(ACTIONS.addItemToCart(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Style)(Home));
