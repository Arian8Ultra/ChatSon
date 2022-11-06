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
import DrawerItem from "./DrawerItem";



/* 

Space For Me

 */

function SideBarMain(props) {
  let open = useSideBarStore((state)=> state.open)
  const drawerWidth = "12vmax";



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
          sx: { backgroundColor: "transparent", border:0 },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Toolbar />
        <List sx={{ mt: -0, mx: 0 }}>
          <DrawerItem text='Home' icon={<HomeRoundedIcon />} link='Home' />
          <DrawerItem text='My Chats' icon={<FolderCopyRoundedIcon />} link='' />
          <DrawerItem text='More' icon={<TableChartIcon />} link='' />
        </List>
      </Drawer>
    </ThemeProvider>
  );
}
export default SideBarMain;
