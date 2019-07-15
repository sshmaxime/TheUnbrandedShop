const Style = theme => ({
  root: {
    backgroundColor: "white",
    textDecoration: "none",
    position: "relative",
    transition: "all 0.5s ease-in-out",
    cursor: "pointer",
    opacity: 1,
    [theme.breakpoints.up("md")]: {
      "&:hover": {
        transform: "scale(1.05)"
      }
    },
    "&:hover $title": {
      opacity: 1,
      backgroundColor: "#f50023",
      padding: "10px"
    }
  },
  title: {
    opacity: 0,
    fontFamily: "fullpack",
    fontSize: "1em",
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
    cursor: "pointer"
  },
  image: {
    height: "0",
    paddingTop: "100%",
    backgroundSize: "contain"
  }
});

export default Style;
