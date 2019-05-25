const Style = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2
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
  showcaseImg: {
    backgroundColor: "green",
    height: "500px"
  },
  showcaseInfo: {
    position: "relative",
    display: "inline-block",
    verticalAlign: "top",
    width: "390px",
    height: "100%",
    paddingLeft: "10px"
  },
  showcaseInfoTitle: {
    fontFamily: "fullpack",
    fontSize: "1.6em",
    letterSpacing: "5px",
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
    "&:hover": {
      backgroundColor: "#f50023",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.5)"
    }
  }
});

export default Style;
