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
    this.props.setRoute("/");

    // Load data from parent
    this.database = this.props.database;

    this.storeRecord = this.database.record.getRecord("store");
    this.storeRecord.subscribe(this.updateStore);

    // Set the comportment of the Escape keyboard key
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentDidMount() {
    console.log(this.props);
  }

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
  };

  componentWillUnmount() {
    this.storeRecord.discard();
  }

  state = {
    isShowcaseOn: false,
    showcaseItem: null,
    showcaseIndex: 0,
    items: null
  };

  updateShowcaseItem = item => {
    this.setState({
      showcaseItem: item
    });
  };

  closeShowcase = () => {
    this.setState(_ => ({
      isShowcaseOn: false,
      showcaseItem: null
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
      showcaseItem: state.items[itemIndex],
      showcaseIndex: itemIndex
    }));
    event.preventDefault();
  };
  handleClickAddToCart = () => {
    this.props.addItemToCart(this.state.showcaseItem);
    this.closeShowcase();
  };
  displayShowcase(classes) {
    return (
      <React.Fragment>
        <div className={classes.showcaseContainer} onClick={this.closeShowcase}>
          <div className={classes.showcaseItem}>
            <img className={classes.showcaseImg} alt="" src={this.state.showcaseItem.imgUrl} />
            <div className={classes.showcaseInfo}>
              <Typography className={classes.showcaseInfoTitle}>
                {this.state.showcaseItem.title}
              </Typography>
              <Divider />
              <div className={classes.showcaseInfoPrice}>
                <div className={classes.showcaseInfoPricePrice}>
                  {this.state.showcaseItem.price}
                </div>
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
        </div>
      </React.Fragment>
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ItemList items={this.state.items} handleFunction={this.handleClickOnItem} />
        {this.state.isShowcaseOn ? this.displayShowcase(classes) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isReady: state.isReady
});

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(ACTIONS.addItemToCart(item)),
  setRoute: route => dispatch(ACTIONS.setRoute(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Style)(Home));
