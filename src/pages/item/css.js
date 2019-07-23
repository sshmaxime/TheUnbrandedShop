const Style = theme => ({
  root: {
    paddingLeft: "25%",
    paddingRight: "25%",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "10%",
      paddingRight: "10%"
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0%",
      paddingRight: "0%"
    }
  },
  item: {
    padding: "10px",
    border: "5px solid black"
  },
  itemTitle: {
    fontFamily: "fullpack",
    textAlign: "center",
    fontSize: "2em",
    marginTop: "20px",
    padding: "5px",
    letterSpacing: "20px",
    backgroundColor: "black",
    color: "white",
    [theme.breakpoints.down("md")]: {
      fontSize: "2em"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2em"
    }
  },
  itemImgContainer: {
    textAlign: "center",
    backgroundColor: "white",
    width: "100%"
  },
  itemImg: {
    height: "400px",
    [theme.breakpoints.down("xs")]: {
      height: "300px"
    }
  },
  informationTitle: {
    fontFamily: "blader",
    fontSize: "1.5em",
    borderBottom: "2px solid black",
    marginBottom: "15px"
  },
  informationDataTitle: {
    fontFamily: "SourceCodePro",
    fontSize: "1.1em",
    fontWeight: "900"
  },
  informationDataContent: {
    fontFamily: "SourceCodePro",
    fontSize: "0.9em"
  },
  numberItemLeft: {
    textAlign: "left",
    fontFamily: "SourceCodePro",
    position: "relative",
    top: "30px"
  },
  buyButton: {
    backgroundColor: "#f50023",
    color: "white",
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingRight: "5px",
    paddingLeft: "5px",
    fontSize: "1.3em",
    fontFamily: "monospace",
    transition: "all 0.5s ease-in-out",
    "&:hover": {
      backgroundColor: "#f50023",
      transform: "scale(1.03)",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.5)"
    },
    "&:disabled": {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "black"
    }
  },
  returnButton: {
    marginLeft: "5px",
    backgroundColor: "black",
    color: "white",
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingRight: "5px",
    paddingLeft: "5px",
    fontSize: "1.3em",
    fontFamily: "monospace",
    transition: "all 0.5s ease-in-out",
    "&:hover": {
      transform: "scale(1.03)",
      backgroundColor: "black",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.5)"
    }
  }
});

export default Style;
