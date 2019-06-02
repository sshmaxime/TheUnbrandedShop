const Style = theme => ({
  root: {
    marginLeft: "10%",
    marginRight: "10%"
  },
  stepper: {
    backgroundColor: "#FBFCFC"
  },
  icon: {
    "&$activeIcon": {
      color: "black",
      "& text": {
        fill: "white"
      }
    },
    "&$completedIcon": {
      color: "black"
    }
  },
  activeIcon: {},
  completedIcon: {},
  step: {
    width: "80%",
    height: "50vh",
    margin: "0 auto",
    marginTop: "20px",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "10px"
  }
});

export default Style;
