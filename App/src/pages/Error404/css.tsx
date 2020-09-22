import { Theme, createStyles } from "@material-ui/core";

const Style = ({ breakpoints, spacing }: Theme) => createStyles({
  root: {
    margin: "0 auto",
    paddingLeft: "40vw",
    paddingRight: "40vw",
    marginTop: "20px",
    marginBottom: "20px",
    [breakpoints.down("lg")]: {
      paddingLeft: "30vw",
      paddingRight: "30vw",
    },
    [breakpoints.down("md")]: {
      paddingLeft: "20vw",
      paddingRight: "20vw",
    },
    [breakpoints.down("sm")]: {
      paddingLeft: "5vw",
      paddingRight: "5vw"
    }
  },
  hello: {
    fontFamily: "nobar",
    textAlign: "center",
    fontSize: "1.6em",
    letterSpacing: "-8px",
    marginBottom: "25px"
  },
  thanku: {
    fontFamily: "SourceCodePro",
    paddingLeft: "10%",
    textAlign: "center",
    paddingRight: "10%",
    fontSize: "1em",
    marginBottom: "20px",
  },

  invoice: {
    margin: "0 auto",
    padding: "20px",
  },

});

export default Style;
