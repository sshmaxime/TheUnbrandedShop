import { Theme, createStyles } from "@material-ui/core";
import imageCover from '../../assets/cover.jpg';

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
  imgDiv: {
    borderRadius: "5px",
    position: "relative",
    height: "calc(60vh - 20px - 100px - 20px)",
    backgroundImage: `url(${imageCover})`,
    backgroundPosition: "65% 35%",
    backgroundSize: "cover",
    marginBottom: "20px",
    [breakpoints.down("sm")]: {
      backgroundPosition: "70% 35%",
    },
  },
  shopButton: {
    position: "absolute",
    fontSize: "1.5em",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    msTransform: "translate(-50%, -50%)",
    fontFamily: "nobar",
    letterSpacing: "-5px",
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    cursor: "pointer",
    textAlign: "center",
    transition: "all 0.5s ease-in-out",
    borderRadius: "4px",
    [breakpoints.up("md")]: {
      "&:hover": {
        transform: "translate(-50%, -50%) scale(1.05)",
        msTransform: "translate(-50%, -50%) scale(1.05)",
      },
    },
    [breakpoints.down("xs")]: {
      width: "40%",
      fontSize: "1.2em",
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
    fontSize: "4em",
    letterSpacing: "-8px",
    fontFamily: "bar",
    textAlign: "center",
    margin: "0 auto",
    [breakpoints.down("md")]: {
      width: "80%",
    },
  },
  textTitle: {
    fontSize: "2em",
    letterSpacing: "-10px",
    textAlign: "center",
    fontFamily: "nobar",
    borderRadius: "5px",
    padding: "10px",
  },
  text: {
    fontSize: "1em",
    lineHeight: "1.5em",
    letterSpacing: "-1px",
    textAlign: "center",
    fontFamily: "SourceCodePro",
  },
  arrowDownDiv: {
    position: "absolute",
    bottom: "2%",
    left: "50%",
  },
  arrowDown: {
    fontSize: "2em",
    color: "white",
    transform: "translate(-50%, 0)",
    msTransform: "translate(-50%, 0)",
    [breakpoints.down("sm")]: {
      color: "white",
    },
    [breakpoints.down("xs")]: {
      color: "black",
    },
  },
  container: {
    marginTop: "15px",
    marginBottom: "30px",
  },
});

export default Style;
