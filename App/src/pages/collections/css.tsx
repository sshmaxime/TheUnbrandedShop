import { Theme, createStyles } from "@material-ui/core";

const Style = ({ breakpoints, spacing }: Theme) => createStyles({
  root: {
    paddingRight: "10vw",
    paddingLeft: "10vw",
    marginBottom: "20px",
    [breakpoints.down("sm")]: {
      paddingLeft: "5vw",
      paddingRight: "5vw"
    }
  },
  title: {
    fontSize: "2em",
    letterSpacing: "-8px",
    marginBottom: "25px",
    marginTop: "10px",
    fontFamily: "nobar",
    textAlign: "center",
    margin: "0 auto",
    [breakpoints.down("md")]: {
      width: "80%",
    },
  },
});

export default Style;
