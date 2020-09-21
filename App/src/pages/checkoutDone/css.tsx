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
  invoice: {
    padding: "20px",
    textAlign: "center"
  }
});

export default Style;
