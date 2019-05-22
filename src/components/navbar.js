import React, { Component } from "react";
import { withStyles, AppBar, Toolbar, Typography } from "@material-ui/core";

const styles = {
  Navbar: {
    backgroundColor: "transparent"
  },
  Navbar_title: {
    color: "black"
  }
};

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar className={classes.Navbar}>
          <Toolbar>
            <Typography className={classes.Navbar_title} variant="h4">
              {this.props.title}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
