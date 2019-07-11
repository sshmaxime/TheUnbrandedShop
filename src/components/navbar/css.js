const Style = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2)
  },
  navbar: {
    backgroundColor: "white",
    boxShadow: "none",
    position: "relative",
    paddingRight: "5vw",
    paddingLeft: "5vw",
    paddingTop: "15px",
    paddingBottom: "20px"
  },
  title: {
    position: "absolute",
    fontFamily: "bar",
    letterSpacing: "5px",
    fontSize: "4em",
    "& > a": {
      textDecoration: "none",
      color: "black"
    },
    "& a:focus": {
      outline: "none"
    }
  },
  normalTitle: {
    [theme.breakpoints.down("sm")]: {
      display: "None"
    }
  },
  reducedTitle: {
    [theme.breakpoints.up("md")]: {
      display: "None"
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
    fontSize: "1em",
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
  cartMenu: {
    width: "450px",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },
  cartTitle: {
    paddingTop: "15px",
    paddingBottom: "20px",
    textAlign: "center",
    fontFamily: "bar",
    fontSize: "4em",
    "& > a": {
      textDecoration: "none",
      color: "black"
    },
    "& a:focus": {
      outline: "none"
    },
    borderBottom: "2px solid black"
  },
  cartItem: {
    width: "100%",
    height: "170px",
    backgroundColor: "#FBFCFC",
    borderBottom: "1px solid black",
    [theme.breakpoints.down("sm")]: {
      height: "150px"
    }
  },
  cartItemImg: {
    height: "170px",
    width: "40%",
    borderRight: "1px solid black",
    [theme.breakpoints.down("sm")]: {
      height: "150px"
    }
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
    fontFamily: "fullpack",
    fontSize: "1em",
    textAlign: "left",
    padding: "7px"
  },
  cartItemPrice: {
    position: "absolute",
    fontFamily: "fullpack",
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
    fontSize: "1em",
    fontWeight: 900,
    letterSpacing: "3px",
    fontFamily: "fullpack"
  },
  checkout: {
    textAlign: "center",
    padding: "5px",
    "& a": {
      textDecoration: "none"
    }
  },
  checkoutContainer: {
    "& a": {
      textDecoration: "none"
    },
    "& a:focus": {
      outline: "none"
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
