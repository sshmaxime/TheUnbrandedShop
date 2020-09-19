import { Theme, createStyles } from "@material-ui/core";

const Style = ({ breakpoints, spacing }: Theme) => createStyles({
  root: {
    margin: "0 auto",
    paddingLeft: "20vw",
    paddingRight: "20vw",
    marginTop: "20px",
    marginBottom: "20px",
    [breakpoints.down("md")]: {
      paddingLeft: "25vw",
      paddingRight: "25vw",
    },
    [breakpoints.down("sm")]: {
      paddingLeft: "5vw",
      paddingRight: "5vw"
    }
  },
  item: {
    padding: "10px",
    borderRadius: "5px",
    border: "5px solid black"
  },
  itemTitle: {
    fontFamily: "fullpack",
    borderRadius: "10px",
    textAlign: "center",
    fontSize: "1.3em",
    marginTop: "20px",
    padding: "5px",
    letterSpacing: "3px",
    backgroundColor: "black",
    color: "white",
    [breakpoints.down("md")]: {
      fontSize: "2em"
    },
    [breakpoints.down("sm")]: {
      fontSize: "1.2em"
    }
  },
  itemImgContainer: {
    borderRadius: "5px",
    textAlign: "center",
    backgroundColor: "white",
    width: "100%"
  },
  itemImgContainerSmall: {
    borderRadius: "5px",
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    width: "100%"
  },
  itemImg: {
    height: "400px",
    [breakpoints.down("xs")]: {
      height: "300px"
    }
  },
  itemImgSmall: {
    width: "100%",
    borderRadius: "5px",
  },
  informationTitle: {
    fontFamily: "blader",
    fontSize: "1.7em",
    borderBottom: "2px solid black",
    marginBottom: "15px"
  },
  informationDataTitle: {
    fontFamily: "SourceCodePro",
    fontSize: "1.1em",
    fontWeight: 900
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
