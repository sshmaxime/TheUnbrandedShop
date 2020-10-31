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
