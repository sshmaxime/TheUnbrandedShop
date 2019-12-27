import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Style from "./css.js";
import ItemList from "../../components/itemList/itemList";
import { connect } from "react-redux";
import ACTIONS from "../../redux/actions";

class Home extends Component {
  state = {
    items: null
  };

  constructor(props) {
    super(props);
    this.props.setRoute("/");
  }

  componentDidMount() {
    this.props.storeRecord.subscribe(this.updateStore, true);
  }

  updateStore = newStore => {
    console.log(newStore.items)
    this.setState({
      items: newStore.items
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setRoute: route => dispatch(ACTIONS.setRoute(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Style)(Home));
