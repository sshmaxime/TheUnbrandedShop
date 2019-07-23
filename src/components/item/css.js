const Style = theme => ({
  root: {
    textDecoration: "none",
    position: "relative",
    transition: "all 0.5s ease-in-out",
    cursor: "pointer",
    opacity: 1,
    [theme.breakpoints.up("md")]: {
      "&:hover": {
        transform: "scale(1.05)"
      },
      "&:hover $title": {
        opacity: 1,
        padding: "10px"
      }
    },
    "&:disabled": {
      transform: "scale(1.05)"
    }
  },
  rootDisabled: {
    textDecoration: "none",
    position: "relative",
    transition: "all 0.5s ease-in-out",
    cursor: "default",
    opacity: 1
  },
  title: {
    opacity: 0,
    fontFamily: "fullpack",
    fontSize: "0.8em",
    fontWeight: 900,
    textAlign: "center",
    letterSpacing: "5px",
    textDecoration: "none",
    transition: "all 0.5s ease-in-out",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    msTransform: "translate(-50%, -50%)",
    backgroundColor: "white",
    cursor: "pointer",
    width: "50%"
  },
  titleDisabled: {
    fontFamily: "fullpack",
    fontSize: "0.8em",
    fontWeight: 900,
    textAlign: "center",
    letterSpacing: "5px",
    textDecoration: "none",
    transition: "all 0.5s ease-in-out",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    msTransform: "translate(-50%, -50%)",
    backgroundColor: "black",
    color: "white",
    width: "100%",
    padding: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.5em",
      padding: "5px"
    }
  },
  image: {
    height: "0",
    paddingTop: "100%",
    backgroundSize: "contain",
    transition: "all 0.5s ease-in-out"
  },
  imageDisabled: {
    height: "0",
    paddingTop: "100%",
    backgroundSize: "contain",
    filter: "grayscale(100%)",
    transition: "all 0.5s ease-in-out"
  }
});

export default Style;
