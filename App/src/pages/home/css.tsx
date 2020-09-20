import { Theme, createStyles } from "@material-ui/core";

const Style = ({ breakpoints, spacing }: Theme) => createStyles({
  root: {
    paddingRight: "10vw",
    paddingLeft: "10vw",
    marginTop: "20px",
    marginBottom: "20px",
    [breakpoints.down("sm")]: {
      paddingLeft: "5vw",
      paddingRight: "5vw"
    },
  },
  imgDiv: {
    borderRadius: "5px",
    position: "relative",
    height: "calc(100vh - 20px - 100px - 20px)",
    overflow: "hidden",
    marginBottom: "20px",
    [breakpoints.down("md")]: {
    },
  },
  shopButton: {
    position: "absolute",
    fontSize: "1.5em",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    msTransform: "translate(-50%, -50%)",
    fontFamily: "blader",
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    cursor: "pointer",
    textAlign: "center",
    transition: "all 0.5s ease-in-out",
    borderRadius: "5px",
    [breakpoints.up("md")]: {
      "&:hover": {
        transform: "translate(-50%, -50%) scale(1.05)",
        msTransform: "translate(-50%, -50%) scale(1.05)",
      },
    },
    [breakpoints.down("xs")]: {
      width: "50%",
    },
  },
  Title: {
    fontSize: "1.8em",
    marginTop: "25px",
    marginBottom: "50px",
    fontFamily: "vintv",
    textAlign: "center",
    margin: "0 auto",
    [breakpoints.down("md")]: {
      width: "80%",
    },
  },
  TitleSoft: {
    fontSize: "3.5em",
    letterSpacing: "-10px",
    fontFamily: "nobar",
    textAlign: "center",
    margin: "0 auto",
    [breakpoints.down("md")]: {
      width: "80%",
    },
  },
  text: {
    fontSize: "1em",
    lineHeight: "1.5em",
    letterSpacing: "-1px",
    textAlign: "center",
    fontFamily: "SourceCodePro",
    paddingRight: "5%",
    paddingLeft: "5%",
    [breakpoints.down("sm")]: {
      paddingLeft: "1%",
      paddingRight: "1%"
    },
  },
  arrowDownDiv: {
    position: "absolute",
    bottom: "2%",
    left: "50%",
  },
  arrowDown: {
    fontSize: "2.5em",
    color: "white",
    transform: "translate(-50%, 0)",
    msTransform: "translate(-50%, 0)",
  },
  firstContainer: {
    marginTop: "10px",
  },
  container: {
    marginTop: "50px",
  },
});

export default Style;
