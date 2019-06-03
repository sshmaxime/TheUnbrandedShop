const Style = theme => ({
  root: {
    marginLeft: "10%",
    marginRight: "10%",
    position: "relative"
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
    width: "100%",
    margin: "0 auto",
    marginTop: "20px",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "10px"
  },

  cartItem: {
    width: "100%",
    height: "200px",
    backgroundColor: "#FBFCFC",
    borderBottom: "1px solid black"
  },
  cartItemImg: {
    height: "200px",
    width: "200px",
    borderRight: "1px solid black"
  },
  cartItemContent: {
    height: "100%",
    width: "calc(99% - 200px)",
    display: "inline-block",
    position: "relative",
    verticalAlign: "top"
  },
  cartItemTitle: {
    position: "absolute",
    left: 0,
    fontFamily: "monospace",
    fontSize: "1.5em",
    textAlign: "center",
    padding: "10px"
  },
  cartItemPrice: {
    position: "absolute",
    right: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    padding: "10px"
  },
  cartItemDelete: {
    position: "absolute",
    left: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    padding: "10px"
  },
  cartItemDeleteLogo: {
    minWidth: 0,
    padding: 0
  },
  cartItemDeleteIcon: {
    minWidth: 0,
    padding: 0
  },
  cartItemPricePrice: {
    fontSize: "1.2em",
    fontWeight: 900,
    letterSpacing: "1px",
    fontFamily: "caesar"
  },
  totalPrice: {
    display: "flex",
    alignItems: "center",
    padding: "20px"
  },
  buttonNavigate: {
    position: "absolute",
    bottom: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    padding: "20px"
  },
  buttonNext: {
    color: "white",
    backgroundColor: "black"
  },
  buttonBack: {
    marginRight: "10px",
    color: "black"
  },

  formItem: {
    marginRight: "15px"
  },
  formCountry: {
    marginRight: "15px",
    width: "200px"
  },
  formAddress: {
    marginRight: "15px",
    width: "300px"
  }
});

export default Style;
