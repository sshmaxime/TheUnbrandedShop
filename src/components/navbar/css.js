const Style = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing.unit * 5
  },
  navbar: {
    backgroundColor: "white",
    boxShadow: "none",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      paddingRight: "130px",
      paddingLeft: "130px"
    },
    height: "65px"
  },
  title: {
    position: "absolute",
    fontFamily: "bar",
    letterSpacing: "5px",
    fontSize: "3.5em",
    textAlign: "center",
    left: "50%",
    transform: "translate(-50%, 0)",
    "& > a": {
      textDecoration: "none",
      color: "black"
    },
    "& a:focus": {
      outline: "none"
    }
  },
  cart: {
    position: "absolute",
    color: "black",
    right: 0,
    padding: 0,
    transition: "all 0.5s ease-in-out",
    "&:hover": {
      backgroundColor: "#FFF",
      transform: "scale(1.2)"
    },
    "& a": {
      textDecoration: "none",
      color: "black"
    },
    "& a:focus": {
      outline: "none"
    }
  },
  cartLogo: {
    fontSize: "1.5em"
  },
  aboutUs: {
    position: "absolute",
    color: "black",
    left: 0,
    padding: 0,
    "& a": {
      textDecoration: "none"
    },
    "& a:focus": {
      outline: "none"
    }
  },
  aboutUsText: {
    fontFamily: "fullpack",
    fontSize: "1.5em",
    backgroundColor: "#FFF",
    transition: "all 0.5s ease-in-out",
    "&:hover": {
      backgroundColor: "#FFF",
      transform: "scale(1.2)"
    },
    "& > a": {
      textDecoration: "none",
      color: "black"
    }
  },
  cartTitle: {
    textAlign: "center",
    fontFamily: "bar",
    letterSpacing: "0px",
    fontSize: "3em",
    paddingTop: "5px",
    height: "60px",
    "& > a": {
      textDecoration: "none",
      color: "black"
    },
    "& a:focus": {
      outline: "none"
    },
    borderBottom: "2px solid black"
  },
  cartMenu: {
    width: "400px"
  },
  cartItem: {
    width: "100%",
    height: "170px",
    backgroundColor: "#FBFCFC",
    border: "1px solid black"
  },
  cartItemImg: {
    height: "100%",
    width: "45%",
    borderRight: "1px solid black"
  },
  cartItemContent: {
    height: "100%",
    width: "50%",
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
  cartItemPricePrice: {
    fontSize: "1.2em",
    fontWeight: 900,
    letterSpacing: "1px",
    fontFamily: "caesar"
  },
  checkout: {
    textAlign: "center",
    padding: "5px"
  },
  checkoutContainer: {
    "& a": {
      textDecoration: "none"
    }
  },
  checkoutTitle: {
    fontFamily: "fullpack",
    fontSize: "1.1em",
    paddingRight: "15px",
    paddingLeft: "15px",
    paddingTop: "5px",
    paddingBottom: "5px",
    borderRadius: "5px",
    color: "white",
    backgroundColor: "#f50023",
    letterSpacing: "5px",
    transition: "all 0.5s ease-in-out"
  }
});

export default Style;
