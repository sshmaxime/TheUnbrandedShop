import { Theme, createStyles } from "@material-ui/core";

const Style = ({ breakpoints, spacing }: Theme) => createStyles({
  root: {
    marginTop: "20px",
    marginBottom: "20px",
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
  item: {
    padding: "10px",
    borderRadius: "5px",
    border: "5px solid black"
  },
  itemTitle: {
    fontFamily: "fullpack",
    borderRadius: "5px",
    textAlign: "center",
    fontSize: "1.3em",
    marginTop: "20px",
    padding: "5px",
    letterSpacing: "5px",
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
    transitionDuration: "2s",
    [breakpoints.down("xs")]: {
      height: "300px"
    }
  },
  itemImgSmall: {
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.5)"
    },
    width: "100%",
    borderRadius: "5px",
  },
  informationTitle: {
    fontFamily: "blader",
    fontSize: "1.5em",
    borderBottom: "2px solid black",
    marginBottom: "15px"
  },
  informationDataTitle: {
    fontFamily: "SourceCodePro",
    fontSize: "1em",
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
    top: "30px",
    letterSpacing: "-1px"
  },
  buyButton: {
    backgroundColor: "#f50023",
    color: "white",
    paddingTop: "5px",
    paddingBottom: "5px",
    letterSpacing: "-0.5px",
    paddingRight: "10px",
    paddingLeft: "10px",
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
    color: "black",
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingRight: "5px",
    paddingLeft: "5px",
    fontSize: "1.3em",
    letterSpacing: "-0.5px",
    fontFamily: "monospace",
    transition: "all 0.5s ease-in-out",
  },
  displayNoneDownMd: {
    [breakpoints.down("sm")]: {
      display: "none"
    },
  }
});

export default Style;
