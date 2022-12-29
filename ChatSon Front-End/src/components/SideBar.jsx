// Description: This is the main component of the side bar. It contains the drawer and the new chat drawer.
import { ChatOutlined, HomeOutlined, LocalFireDepartmentOutlined, PeopleAltOutlined } from "@mui/icons-material";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { GlassBackground, GlassBackgroundLight, primary } from "../../theme/Colors";
import { theme } from "../../theme/Themes";
import useNewChatDrawerStore from "../stores/NewChatDrawerStore";
import useSideBarStore from "../stores/SideBarStore";
import DrawerItem from "./DrawerItem";
import { NewChatDrawer } from "./NewChatDrawer";

function SideBarMain() {
  // getting the state and the actions from the store
  // defining the width of the drawer
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
            backdropFilter: "blur(8px)",
            display: { xs: "none", sm: "block" },
          },
        }}
        PaperProps={{
          sx: {
            backgroundColor: GlassBackground,
            border: 0,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            borderLeft: 0,
            ml: 2,
            borderColor: primary,
          },
        }}
        BackdropProps={{
          sx: {
            display: { xs: "block", lg: "none" },
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <Toolbar />
        <List sx={{ mt: "-60px", mx: 0, px: 1 }}>
          <DrawerItem text='Home' icon={<HomeOutlined />} activeIcon={<HomeRoundedIcon/>} link='Home' />
          <DrawerItem text='Head To Head' icon={<PeopleAltOutlined />} activeIcon={<PeopleAltRoundedIcon/>} link='HeadToHead' />
          <DrawerItem text='My ChatSon' icon={<ChatOutlined />} activeIcon={<ChatRoundedIcon/>} link='MyChatSon' />
          <DrawerItem text='Trendings' icon={<LocalFireDepartmentOutlined />} activeIcon={<LocalFireDepartmentRoundedIcon/>} link='Trendings' />
        </List>
      </Drawer>
    </ThemeProvider>
  );
}
export default SideBarMain;

