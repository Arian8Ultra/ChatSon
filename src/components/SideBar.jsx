import FolderCopyRoundedIcon from "@mui/icons-material/FolderCopyRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TableChartIcon from "@mui/icons-material/TableChart";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { borderRadiuos, borderRadiuosButton, theme } from "../../theme/Themes";
import useSideBarStore from "../stores/SideBarStore";
import DrawerItem, { DrawerItemRight } from "./DrawerItem";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import HistoryToggleOffRoundedIcon from "@mui/icons-material/HistoryToggleOffRounded";
import { primary, primaryLight } from "../../theme/Colors";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import { SwipeableDrawer } from "@mui/material";

/* 

Space For Me

 */

function SideBarMain(props) {
  const drawerWidth = "13vmax";
  let open = useSideBarStore((state) => state.open);

  return (
    <ThemeProvider theme={theme}>
      <Drawer
        sx={{
          "width": drawerWidth,
          "height": "100%",
          "flexShrink": 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            height: "85vmin",
            top: "11vmin",
            boxSizing: "border-box",
            display: { xs: "none", lg: "flex" },
          },
        }}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(255,255,255,0.1)",
            border: 0,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            borderRight: 4,
            borderColor: primary,
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <Toolbar />
        <List sx={{ mt: "-60px", mx: 0, px: 1 }}>
          <DrawerItem text='Home' icon={<HomeRoundedIcon />} link='Home' />
          <DrawerItem text='My Chats' icon={<ChatRoundedIcon />} link='MyChats' />
          <DrawerItem text='Trendings' icon={<LocalFireDepartmentRoundedIcon />} link='Trendings' />
          <DrawerItem text='History' icon={<HistoryToggleOffRoundedIcon />} link='' />
          <DrawerItem text='People' icon={<PeopleAltRoundedIcon />} link='' />
        </List>
      </Drawer>

      <SwipeableDrawer
        sx={{
          "height": "100%",
          "flexShrink": 0,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            display: { xs: "flex", lg: "none" },
          },
        }}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(35,35,35)",
            border: 0,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            borderRight: 4,
            borderColor: primary,
          },
        }}
        BackdropProps={{
          sx: {
            display: { xs: "flex", lg: "none" },
          },
        }}
        ModalProps={{
          sx: {
            display: { xs: "flex", lg: "none" },
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <Toolbar />
        <List sx={{ mt: 0, mx: 0, px: 1 }}>
          <DrawerItem text='Home' icon={<HomeRoundedIcon />} link='Home' />
          <DrawerItem text='My Chats' icon={<ChatRoundedIcon />} link='MyChats' />
          <DrawerItem text='Trendings' icon={<LocalFireDepartmentRoundedIcon />} link='Trendings' />
          <DrawerItem text='History' icon={<HistoryToggleOffRoundedIcon />} link='' />
          <DrawerItem text='People' icon={<PeopleAltRoundedIcon />} link='' />
        </List>
      </SwipeableDrawer>
    </ThemeProvider>
  );
}
export default SideBarMain;
