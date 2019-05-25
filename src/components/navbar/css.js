const Style = theme => ({
  root: {
    flexGrow: 1
  },
  navbar: {
    backgroundColor: "white",
    boxShadow: "none",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      paddingRight: "130px",
      paddingLeft: "130px"
    }
  },
  title: {
    position: "absolute",
    fontFamily: "takasih",
    fontSize: "3em",
    fontWeight: 900,
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
    padding: 0
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
    },
    "& a:focus": {
      outline: "none"
    }
  }
});

export default Style;
