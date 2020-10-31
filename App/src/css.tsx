import { Theme, createStyles } from "@material-ui/core";

const Style = ({ breakpoints, spacing }: Theme) => createStyles({
  marquee: {
    fontSize: "0.8em",
    fontFamily: "headbd",
    padding: "10px"
  },
});

export default Style;
