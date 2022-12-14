import { styled } from "@mui/material/styles";
import { memo } from "react";
import useSideBarStore from "../stores/SideBarStore";

const drawerWidth = "15vmax";
const halfDrawerWidth = "10vmax";

const MainBox = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open, dw }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: dw!=null? `${dw-dw/4}vmax` : halfDrawerWidth,
    marginRight: dw!=null? `${dw-dw/4}vmax` : halfDrawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: dw!=null? `${dw}vmax` : drawerWidth,
      // marginRight: drawerWidth,
    }),
  }),
);
export default memo(MainBox);
