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
import DrawerItem, { DrawerItemBig, DrawerItemRight } from "./DrawerItem";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import HistoryToggleOffRoundedIcon from "@mui/icons-material/HistoryToggleOffRounded";
import { GlassBackground, GlassBackgroundLight, primary, primaryLight } from "../../theme/Colors";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import { ClickAwayListener, Grid, Stack, SwipeableDrawer, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { grey } from "@mui/material/colors";
import TextInputNormal from "./TextInputNormal";
import LinkButton from "./LinkButton";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import useNewChatModalStore from "../stores/NewChatModalStore";
import useNewChatDrawerStore from "../stores/NewChatDrawerStore";


/* 

Space For Me

 */

function SideBarMain() {
  const drawerWidth = "13vmax";
  let open = useSideBarStore((state) => state.open);
  let openChatDrawer = useNewChatDrawerStore((state) => state.open);
  let changeChatDrawer = useNewChatDrawerStore((state) => state.changeSideBar);
  let changeSideBar = useSideBarStore((state) => state.changeSideBar);

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
            backgroundColor: "rgba(255,255,255,0.1)",
            border: 0,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            borderLeft: 6,
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
          <DrawerItem text='Home' icon={<HomeRoundedIcon />} link='Home' />
          <DrawerItem text='My Chats' icon={<ChatRoundedIcon />} link='MyChats' />
          <DrawerItem text='Trendings' icon={<LocalFireDepartmentRoundedIcon />} link='Trendings' />
          <DrawerItem text='History' icon={<HistoryToggleOffRoundedIcon />} link='' />
          <DrawerItem text='People' icon={<PeopleAltRoundedIcon />} link='' />
        </List>
      </Drawer>

      <Drawer
        sx={{
          "height": "100%",
          "flexShrink": 0,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "90%",
            display: { xs: "block", sm: "block" },
          },
        }}
        PaperProps={{
          sx: {
            backgroundColor: GlassBackground,
            backdropFilter: "blur(8px)",
            border: 0,
            height: "85%",
            bottom: "10%",
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderTopLeftRadius: 20,
            borderLeft: 0,
            borderColor: primary,
            ml: "5%",
            mr: "5%",
            px: 5,
          },
        }}
        BackdropProps={{
          sx: {
            display: { xs: "block", lg: "block" },
            width:0,
            height:0
          },
        }}
        ModalProps={{
          sx: {
            display: { xs: "block", lg: "block" },
            width:0,
            height:0
          },
        }}
        variant='temporary'
        anchor='bottom'
        open={openChatDrawer}
        onClose={changeChatDrawer}
      >
        <Toolbar />
        <Stack direction='column' container>
          <Box>
            <TextInputNormal
              borderRadius={3}
              multiline={true}
              label={"body of the chat"}
              rows={15}
            />
          </Box>

          <Box mt={2} mb={2}>
            <LinkButton
              text='Add Image'
              borderRadius={borderRadiuos}
              icon={<ImageRoundedIcon />}
              backgroundColor='white'
            />
          </Box>

          <Box width={"90%"} position='fixed' left={0} bottom={20} ml='5%'>
            <LinkButton
              text='Send'
              borderRadius={borderRadiuos}
              icon={<SendRoundedIcon />}
              fullWidth={true}
            />
          </Box>
        </Stack>
      </Drawer>
    </ThemeProvider>
  );
}
export default SideBarMain;
