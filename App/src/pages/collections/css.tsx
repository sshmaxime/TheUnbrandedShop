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
  title: {
    fontSize: "1.6em",
    color: "black",
    letterSpacing: "-5px",
    marginTop: "25px",
    marginBottom: "25px",
    fontFamily: "nobar",
    textAlign: "center",
    margin: "0 auto",
    [breakpoints.down("md")]: {
      marginTop: "10px",
      marginBottom: "15px",
    }
  },
});

export default Style;
