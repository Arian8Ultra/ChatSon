import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Stack } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/system";
import * as React from "react";
import { GlassBackground, GlassBackgroundLight, primary } from "../../theme/Colors";
import { borderRadiuos, theme } from "../../theme/Themes";
import useNewChatDrawerStore from "../stores/NewChatDrawerStore";
import useSideBarStore from "../stores/SideBarStore";
import DrawerItem from "./DrawerItem";
import LinkButton from "./LinkButton";
import TextInputNormal from "./TextInputNormal";
import UploadButton from "./UploadButton";

function SideBarMain() {
  const drawerWidth = "13vmax";
  let open = useSideBarStore((state) => state.open);
  let openChatDrawer = useNewChatDrawerStore((state) => state.open);
  let changeChatDrawer = useNewChatDrawerStore((state) => state.changeSideBar);

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
            backgroundColor: GlassBackgroundLight,
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
          <DrawerItem text='Home' icon={<HomeRoundedIcon />} link='Home' />
          <DrawerItem text='Head To Head' icon={<PeopleAltRoundedIcon />} link='HeadToHead' />
          <DrawerItem text='My ChatSon' icon={<ChatRoundedIcon />} link='MyChatSon' />
          <DrawerItem text='Trendings' icon={<LocalFireDepartmentRoundedIcon />} link='Trendings' />
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
            width: 0,
            height: 0,
          },
        }}
        ModalProps={{
          sx: {
            display: { xs: "block", lg: "block" },
            width: 0,
            height: 0,
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
            <UploadButton
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
