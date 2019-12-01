import React, { Component } from "react";
import { withStyles, Grid, Typography, Button } from "@material-ui/core";
import Style from "./css.js";
import { connect } from "react-redux";
import ACTIONS from "../../redux/actions";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import _ from "lodash";
import Fade from "react-reveal/Fade";

class Item extends Component {
  state = {
    item: null,

    sizeRequested: "M"
  };

  constructor(props) {
    super(props);
    this.props.setRoute("/item");
  }

  componentDidMount() {
    this.props.storeRecord.subscribe(this.updateStore, true);
  }

  updateStore = newStore => {
    var updatedItem = null;

    for (var i = 0; newStore.items[i]; i++) {
      if (newStore.items[i].id.toString() === this.props.location.match.params.id) {
        updatedItem = newStore.items[i];
        break;
      }
    }

    this.setState({
      item: updatedItem
    });
  };

  handleClickAddToCart = () => {
    var item = _.cloneDeep(this.state.item);

    item.size = this.state.sizeRequested;

    this.props.addItemToCart(item);
    this.props.location.history.push("/");
  };

  handleClickReturnHome = () => {
    this.props.location.history.push("/");
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  getNumberOfItem = size => {
    var tmp = 0;
    this.state.item.size.forEach(element => {
      if (size === element[0]) tmp = element[1];
    });
    return tmp;
  };

  render() {
    const { classes } = this.props;

    if (!this.state.item) return <div>item not found</div>;

    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Fade delay={50}>
              <div className={classes.item}>
                <div style={{ boxShadow: "5px 4px 10px grey" }}>
                  <div className={classes.itemImgContainer}>
                    <img className={classes.itemImg} alt={""} src={this.state.item.imgUrl} />
                  </div>
                  <Typography className={classes.itemTitle}>{this.state.item.title}</Typography>
                </div>
              </div>
            </Fade>
          </Grid>

          <Grid item xs={12}>
            <Fade delay={100}>
              <div className={classes.item}>
                <Typography className={classes.informationTitle}>Information:</Typography>
                <div style={{ boxShadow: "5px 4px 10px grey", padding: "10px" }}>
                  {this.state.item.info.map((info, index) => (
                    <div key={index}>
                      <span className={classes.informationDataTitle}>{info[0] + ": "}</span>
                      <span className={classes.informationDataContent}>{info[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Fade>
          </Grid>

          <Grid item md={2} xs={6}>
            <Fade delay={150}>
              <TextField
                required
                id="standard-select-currency"
                select
                style={{ width: "100%" }}
                InputProps={{ style: { fontFamily: "SourceCodePro" } }}
                InputLabelProps={{ style: { fontFamily: "SourceCodePro" } }}
                label="Size"
                value={this.state.sizeRequested}
                rows="4"
                onChange={this.handleChange("sizeRequested")}
                margin="normal"
                variant="outlined"
              >
                {this.state.item.size.map(option => (
                  <MenuItem key={option[0]} value={option[0]}>
                    {option[0]}
                  </MenuItem>
                ))}
              </TextField>
            </Fade>
          </Grid>

          <Grid item md={4} xs={6}>
            <Fade delay={200}>
              <Typography className={classes.numberItemLeft}>
                {this.getNumberOfItem(this.state.sizeRequested)} item(s) left
              </Typography>
            </Fade>
          </Grid>

          <Grid item xs={12}>
            <Fade delay={250}>
              <div>
                <Button
                  className={classes.buyButton}
                  disabled={this.getNumberOfItem(this.state.sizeRequested) > 0 ? false : true}
                  onClick={this.handleClickAddToCart}
                >
                  ADD TO CART
                </Button>
                <Button className={classes.returnButton} onClick={this.handleClickReturnHome}>
                  RETURN
                </Button>
              </div>
            </Fade>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setRoute: route => dispatch(ACTIONS.setRoute(route)),
  addItemToCart: item => dispatch(ACTIONS.addItemToCart(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Style)(Item));
