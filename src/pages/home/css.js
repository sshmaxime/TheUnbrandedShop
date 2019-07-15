const Style = theme => ({
  root: {
    // transition: "all 0.5s ease-in-out"
  },
  showcaseItem: {
    backgroundColor: "#E5E7E9",
    height: "500px",
    width: "900px",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    msTransform: "translate(-50%, -50%)"
  },
  showcaseContainer: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    msTransform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  showcaseContainerHidden: {
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  showcaseImg: {
    height: "500px"
  },
  showcaseInfo: {
    [theme.breakpoints.down("sm")]: {}
  },
  showcaseInfoTitle: {
    fontFamily: "fullpack",
    fontSize: "1.6em",
    letterSpacinWg: "5px",
    textAlign: "center",
    padding: "10px"
  },
  showcaseInfoPrice: {
    position: "absolute",
    fontSize: "1.5em",
    fontWeight: 900,
    letterSpacing: "1px",
    fontFamily: "caesar",
    bottom: "0%",
    right: "0%",
    transform: "translate(-50%, -50%)",
    msTransform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center"
  },
  showcaseInfoInfoTitle: {
    fontSize: "2em",
    fontFamily: "monospace",
    paddingBottom: "10px"
  },
  showcaseInfoInfoContent: {
    fontFamily: "monospace",
    fontSize: "1em",
    paddingBottom: "20px"
  },
  addToCart: {
    backgroundColor: "#f50023",
    color: "white",
    paddingTop: "2px",
    paddingBottom: "2px",
    paddingRight: "5px",
    paddingLeft: "5px",
    fontSize: "1.2em",
    fontFamily: "monospace",
    transition: "all 0.5s ease-in-out",
    "&:hover": {
      backgroundColor: "#f50023",
      transform: "scale(1.01)",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.5)"
    }
  }
});

export default Style;
