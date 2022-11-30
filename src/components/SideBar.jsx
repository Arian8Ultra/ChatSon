import FolderCopyRoundedIcon from "@mui/icons-material/FolderCopyRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TableChartIcon from "@mui/icons-material/TableChart";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { theme } from "../../theme/Themes";
import useSideBarStore from "../stores/SideBarStore";
import DrawerItem, { DrawerItemRight } from "./DrawerItem";
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import HistoryToggleOffRoundedIcon from '@mui/icons-material/HistoryToggleOffRounded';
import { primaryLight } from "../../theme/Colors";
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';

/* 

Space For Me

 */

function SideBarMain(props) {
  const drawerWidth = "13vmax";
  let open = useSideBarStore((state)=> state.open)



  return (
    <ThemeProvider theme={theme}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'}
        }}
        PaperProps={{
          sx: { backgroundColor:  "rgba(255,255,255,0.02)", border:0 },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Toolbar />
        <List sx={{ mt: -0, mx: 0, px:1 }}>
          <DrawerItem text='Home' icon={<HomeRoundedIcon />} link='Home' />
          <DrawerItem text='My Chats' icon={<ChatRoundedIcon />} link='' />
          {/* <DrawerItem text='Explore More' icon={<ExploreRoundedIcon />} link='' /> */}
        </List>
      </Drawer>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'}
        }}
        PaperProps={{
          sx: { backgroundColor: "rgba(255,255,255,0.01)", border:0, borderLeft:1, borderColor:primaryLight },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <Toolbar />
        <List sx={{ mt: 0, mx: 0, px:1 }}>
          <DrawerItemRight text='Trendings' icon={<LocalFireDepartmentRoundedIcon />} link='Home' />
          <DrawerItemRight text='History' icon={<HistoryToggleOffRoundedIcon />} link='' />
          <DrawerItemRight text='People' icon={<PeopleAltRoundedIcon />} link='' />
        </List>
      </Drawer>
    </ThemeProvider>
  );
}
export default SideBarMain;
