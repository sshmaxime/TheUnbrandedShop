import React, { Component } from "react";
import { withStyles, Typography, Divider, Button } from "@material-ui/core";
import Style from "./css.js";
import ItemList from "../../components/itemList/itemList";
import EuroIcon from "@material-ui/icons/EuroSymbol";
import AddCart from "@material-ui/icons/AddShoppingCart";

const tileData = [
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
  },
  {
    imgUrl:
      "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
    title: "Crdedzy",
    price: 0,
    info: "histo"
  },
  {
    imgUrl:
      "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
    title: "Crdedzy",
    price: 0,
    info: "histo"
  }
];

class Home extends Component {
  state = {
    showcaseItem: false,
    currentItem: tileData[0]
  };

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
  }

  closeShowcase = () => {
    this.setState(_ => ({
      showcaseItem: false
    }));
  };
  escFunction = event => {
    if (event.keyCode === 27) {
      this.closeShowcase();
    }
  };

  handleClickOnItem = event => {
    this.setState(state => ({
      showcaseItem: !state.showcaseItem
    }));
    event.preventDefault();
  };

  showcaseItem(classes) {
    return (
      <React.Fragment>
        <div className={classes.showcaseContainer} onClick={this.closeShowcase} />
        <div className={classes.showcaseItem}>
          <img className={classes.showcaseImg} alt="" src={this.state.currentItem.imgUrl} />
          <div className={classes.showcaseInfo}>
            <Typography className={classes.showcaseInfoTitle}>
              {this.state.currentItem.title}
            </Typography>
            <Divider />
            <div className={classes.showcaseInfoPrice}>
              <div className={classes.showcaseInfoPricePrice}>{this.state.currentItem.price}</div>
              <EuroIcon className={classes.showcaseInfoPriceLogo} />
            </div>
            <Typography className={classes.showcaseInfoInfoTitle}>Information:</Typography>
            <div className={classes.showcaseInfoInfoContent}>
              {this.state.currentItem.info.map((info, index) => (
                <div key={index}>
                  <span style={{ fontWeight: "bold" }}>{info[0]}</span>
                  <span>: </span>
                  <span>{info[0]}</span>
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
    return (
      <div className={classes.root}>
        <ItemList items={tileData} handleFunction={this.handleClickOnItem} />
        {this.state.showcaseItem ? this.showcaseItem(classes) : null}
      </div>
    );
  }
}

export default withStyles(Style)(Home);
