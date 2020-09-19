import { Theme, createStyles } from "@material-ui/core";

const Style = ({ breakpoints, spacing }: Theme) => createStyles({
  root: {
  },
  img: {
    paddingTop: "100%",
    backgroundSize: "contain",
    transition: "all 0.5s ease-in-out"
  }
});

export default Style;
