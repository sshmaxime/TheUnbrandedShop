import React, { Component } from "react";
import { withStyles, Typography, Divider, Button } from "@material-ui/core";
import Style from "./css.js";
import ItemList from "../../components/itemList/itemList";
import EuroIcon from "@material-ui/icons/EuroSymbol";
import AddCart from "@material-ui/icons/AddShoppingCart";
import { connect } from "react-redux";
import ACTIONS from "../../redux/actions";
import { Grid } from "@material-ui/core";

class Home extends Component {
  state = {
    isShowcaseOn: false,
    showcaseItem: null,
    showcaseIndex: 0,
    items: null
  };

  constructor(props) {
    super(props);
    this.props.setRoute("/");

    // Load data from parent
    this.database = this.props.database;

    this.storeRecord = this.database.record.getRecord("store");
    this.storeRecord.subscribe(this.updateStore);

    // Set the comportment of the Escape keyboard key
    document.addEventListener("keydown", this.escFunction, false);
  }

  handleShowcaseAtStartUp = () => {
    const itemID = this.props.location.match.params.id ? this.props.location.match.params.id : 0;
    for (var index = 0; index < this.state.items.length; index++) {
      if (this.state.items[index].id.toString() === itemID.toString()) {
        this.updateShowcaseItem(this.state.items[index]);
        this.displayShowcase();
      }
    }
  };

  // Util functions //
  updateItems = newItems => {
    this.setState({
      items: newItems
    });
  };

  IndexOfItemInStore = (listItems, id) => {
    if (listItems.length === 0) return null;

    for (var index = 0; index < listItems.length; index++) {
      if (listItems[index].id === id) {
        return index;
      }
    }
    return null;
  };

  updateStore = newStore => {
    this.updateItems(newStore.items);
    if (this.state.isShowcaseOn) {
      const index = this.IndexOfItemInStore(newStore.items, this.state.showcaseItem.id);
      if (index === null) {
        this.closeShowcase();
      } else {
        this.updateShowcaseItem(newStore.items[index]);
      }
    }
    this.handleShowcaseAtStartUp();
  };

  componentWillUnmount() {
    this.storeRecord.discard();
  }

  displayShowcase = () => {
    this.setState(_ => ({
      isShowcaseOn: true
    }));
    this.props.setRoute("/item");
  };

  updateShowcaseItem = item => {
    this.setState({
      showcaseItem: item
    });
  };

  closeShowcase = event => {
    if (event.target.id !== "container" && event.target.id !== "button" && event.keyCode !== 27)
      return;
    this.setState(_ => ({
      isShowcaseOn: false,
      showcaseItem: null
    }));
    this.props.setRoute("/");
  };
  escFunction = event => {
    if (event.keyCode === 27) {
      this.closeShowcase(event);
    }
  };
  handleClickOnItem = event => {
    const itemIndex = event.currentTarget.getAttribute("index");
    this.setState(state => ({
      showcaseItem: state.items[itemIndex],
      showcaseIndex: itemIndex
    }));
    this.displayShowcase();
    event.preventDefault();
  };
  handleClickAddToCart = event => {
    this.props.addItemToCart(this.state.showcaseItem);
    event.target.id = "button";
    this.closeShowcase(event);
  };
  showcase(classes) {
    return (
      <div className={classes.showcaseContainer} onClick={this.closeShowcase} id={"container"}>
        <Grid container className={classes.showcaseItem}>
          <Grid item xs={12} md={7}>
            <img className={classes.showcaseImg} alt="" src={this.state.showcaseItem.imgUrl} />
          </Grid>
          <Grid item xs={12} md={5} className={classes.showcaseInfo}>
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
          </Grid>
        </Grid>
      </div>
    );
  }

  render() {
    const { classes } = this.props;

    const showcase =
      this.state.isShowcaseOn === false || this.props.route === "/"
        ? null
        : this.state.isShowcaseOn
        ? this.showcase(classes)
        : null;

    return (
      <div className={classes.root}>
        <ItemList items={this.state.items} handleFunction={this.handleClickOnItem} />
        {showcase}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isReady: state.isReady,
  route: state.route
});

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(ACTIONS.addItemToCart(item)),
  setRoute: route => dispatch(ACTIONS.setRoute(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Style)(Home));
