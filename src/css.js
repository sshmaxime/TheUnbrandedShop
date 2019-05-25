const Style = theme => ({
  root: {
    backgroundColor: "#FBFCFC",
    height: "100vh"
  },
  app: {
    [theme.breakpoints.up("md")]: {
      paddingRight: "130px",
      paddingLeft: "130px"
    }
  }
});

export default Style;
