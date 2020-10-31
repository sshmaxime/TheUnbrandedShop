import { Theme, createStyles } from "@material-ui/core";

const Style = ({ breakpoints, spacing }: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: "white",
    boxShadow: "none",
    position: "relative",
    paddingTop: "5px",
    paddingBottom: "5px",

    [breakpoints.up("lg")]: {
      paddingLeft: "18vw",
      paddingRight: "18vw"
    },
    [breakpoints.down("lg")]: {
      paddingLeft: "15vw",
      paddingRight: "15vw"
    },
    [breakpoints.down("md")]: {
      paddingLeft: "10vw",
      paddingRight: "10vw"
    },
    [breakpoints.down("sm")]: {
      paddingLeft: "5vw",
      paddingRight: "5vw"
    },
  },
  title: {
    position: "absolute",
    fontFamily: "bar",
    letterSpacing: "-5px",
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
    [breakpoints.down("sm")]: {
      display: "None"
    }
  },
  reducedTitle: {
    fontFamily: "barnotext",
    [breakpoints.up("md")]: {
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
    boxShadow: "none",
    height: "100px",
    width: "400px",
    paddingTop: "12px",
    [breakpoints.down("xs")]: {
      width: "100vw",
    }
  },
  cartTitle: {
    paddingBottom: "16px",
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
    [breakpoints.down("sm")]: {
      height: "150px"
    }
  },
  cartItemImg: {
    height: "170px",
    width: "40%",
    borderRight: "1px solid black",
    [breakpoints.down("sm")]: {
      height: "150px"
    }
  },
  cartItemContent: {
    height: "100%",
    width: "59%",
    display: "inline-block",
    position: "relative",
    verticalAlign: "top"
  },
  cartItemTitle: {
    position: "absolute",
    left: 0,
    fontFamily: "SourceCodePro",
    fontSize: "1.1em",
    textAlign: "left",
    padding: "7px",
    [breakpoints.down("xs")]: {
      fontSize: "1em"
    }
  },
  cartItemSize: {
    position: "absolute",
    left: 0,
    color: "grey",
    fontFamily: "SourceCodePro",
    fontSize: "1.1em",
    textAlign: "left",
    marginTop: "30px",
    padding: "7px",
    letterSpacing: "-1px",
    [breakpoints.down("xs")]: {
      fontSize: "1em"
    }
  },
  cartItemPrice: {
    position: "absolute",
    fontFamily: "SourceCodePro",
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
    fontSize: "1.1em",
    paddingTop: "5px",
    fontFamily: "SourceCodePro"
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
  },
  closeCartIcon: {
    position: "absolute",
    minWidth: 0,
    right: 10,
    top: 18,
    padding: 0,
    transition: "all 0.5s ease-in-out",
    "& svg": {
      fontSize: "50px"
    },
    "&:hover": {
      backgroundColor: "#FFF",
      transform: "scale(1.2)"
    }
  }
});

export default Style;
