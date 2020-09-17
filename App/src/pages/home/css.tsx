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
    }
  },
  imgDiv: {
    borderRadius: "5px",
    position: "relative",
    height: "calc(100vh - 20px - 100px - 20px)",
    overflow: "hidden",
    marginBottom: "20px",
    [breakpoints.down("md")]: {
      display: "None"
    }
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
    transition: "all 0.5s ease-in-out",
    borderRadius: "5px",
    [breakpoints.up("md")]: {
      "&:hover": {
        transform: "translate(-50%, -50%) scale(1.05)",
        msTransform: "translate(-50%, -50%) scale(1.05)",
      },
    },
  },
});

export default Style;
