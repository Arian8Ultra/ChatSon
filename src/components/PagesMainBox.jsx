import { styled } from "@mui/material/styles";
import { memo } from "react";

const drawerWidth = "20vmax";
const halfDrawerWidth = "10vmax";

const MainBox = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: halfDrawerWidth,
    marginRight: halfDrawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: drawerWidth,
      marginRight: drawerWidth,
    }),
  }),
);
export default memo(MainBox);
