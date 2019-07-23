import React, { Component } from "react";
import { withStyles, CardMedia, Typography, Card } from "@material-ui/core";
import Style from "./css.js";
import { Link } from "react-router-dom";

class Item extends Component {
  state = {
    isAvailable: true
  };

  constructor(props) {
    super(props);

    var totalNumber = 0;
    for (var index = 0; this.props.size[index]; index++) {
      totalNumber += this.props.size[index][1];
    }

    this.state.isAvailable = totalNumber > 0 ? true : false;
  }

  componentWillReceiveProps(newProps) {
    var totalNumber = 0;
    for (var index = 0; newProps.size[index]; index++) {
      totalNumber += newProps.size[index][1];
    }

    const isAvailable = totalNumber > 0 ? true : false;

    if (this.state.isAvailable !== isAvailable) {
      this.setState({
        isAvailable: isAvailable
      });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Link to={this.state.isAvailable ? "/item" + this.props.id : ""}>
          <Card
            className={this.state.isAvailable ? classes.root : classes.rootDisabled}
            index={this.props.id}
          >
            <CardMedia
              className={this.state.isAvailable ? classes.image : classes.imageDisabled}
              image={this.props.imgUrl}
              disabled
            />
            <Typography className={this.state.isAvailable ? classes.title : classes.titleDisabled}>
              {this.state.isAvailable ? this.props.title : "Out Of Stock"}
            </Typography>
          </Card>
        </Link>
      </div>
    );
  }
}

export default withStyles(Style)(Item);
