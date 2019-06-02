import React, { Component } from "react";
import Style from "./css.js";
import { withStyles } from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Checkout extends Component {
  state = {
    steps: ["Review order", "Shipping", "Payment"],
    activeStep: 0
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  getStepContent = (classes, step) => {
    switch (step) {
      case 0:
        return (
          <div className={classes.step}>
            <div>hey</div>
          </div>
        );
      case 1:
        return (
          <div className={classes.step}>
            <div>hey</div>
          </div>
        );
      case 2:
        return (
          <div className={classes.step}>
            <div>hey</div>
          </div>
        );
      default:
        return (
          <div className={classes.step}>
            <div>hey</div>
          </div>
        );
    }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };
  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Stepper className={classes.stepper} activeStep={this.state.activeStep}>
          {this.state.steps.map((label, index) => {
            return (
              <Step key={index}>
                <StepLabel
                  StepIconProps={{
                    classes: {
                      root: classes.icon,
                      active: classes.activeIcon,
                      completed: classes.completedIcon
                    }
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {this.state.activeStep === this.state.steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you're finished
              </Typography>
              <Button onClick={this.handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              {this.getStepContent(classes, this.state.activeStep)}
              <div>
                <Button
                  disabled={this.state.activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}
                >
                  {this.state.activeStep === this.state.steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(Style)(Checkout);
