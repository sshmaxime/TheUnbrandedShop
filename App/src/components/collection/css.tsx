import { Theme, createStyles } from "@material-ui/core";

const Style = ({ breakpoints, spacing }: Theme) => createStyles({
  root: {
    textDecoration: "none",
    position: "relative",
    transition: "all 0.5s ease-in-out",
    cursor: "pointer",
    opacity: 1,
    [breakpoints.up("md")]: {
      "&:hover": {
        transform: "scale(1.03)"
      },
      "&:hover $title": {
        opacity: 1,
        padding: "10px"
      }
    },
  },
});

export default Style;
