import { Theme, createStyles } from "@material-ui/core";

const Style = ({ breakpoints, spacing }: Theme) => createStyles({
  root: {
    backgroundColor: "white",
    boxShadow: "none",
    position: "relative",
    paddingTop: "20px",
    paddingBottom: "20px",
    fontFamily: "SourceCodePro",
    fontSize: "0.8em",

    paddingRight: "10vw",
    paddingLeft: "10vw",
    [breakpoints.down("sm")]: {
      paddingLeft: "5vw",
      paddingRight: "5vw"
    }
  },
  divider: {
    height: "3px",
    marginTop: "20px",
    backgroundColor: "black",
    marginRight: "10vw",
    marginLeft: "10vw",
    [breakpoints.down("sm")]: {
      marginRight: "5vw",
      marginLeft: "5vw"
    }
  },
  endTitle: {
    textAlign: "right",
    [breakpoints.down("sm")]: {
      marginTop: "10px",
      textAlign: "left",
    }
  }
});

export default Style;
