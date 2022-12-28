import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Stack } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/system";
import * as React from "react";
import { GlassBackground, primary } from "../../theme/Colors";
import { borderRadiuos } from "../../theme/Themes";
import useNewChatDrawerStore from "../stores/NewChatDrawerStore";
import LinkButton from "./LinkButton";
import TextInputNormal from "./TextInputNormal";
import UploadButton from "./UploadButton";

export function NewChatDrawer() {
  let openChatDrawer = useNewChatDrawerStore((state) => state.open);
  let changeChatDrawer = useNewChatDrawerStore((state) => state.changeSideBar);
  return <Drawer
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
          rows={15} />
      </Box>

      <Box mt={2} mb={2}>
        <UploadButton
          text='Add Image'
          borderRadius={borderRadiuos}
          icon={<ImageRoundedIcon />}
          backgroundColor='white' />
      </Box>

      <Box width={"90%"} position='fixed' left={0} bottom={20} ml='5%'>
        <LinkButton
          text='Send'
          borderRadius={borderRadiuos}
          icon={<SendRoundedIcon />}
          fullWidth={true} />
      </Box>
    </Stack>
  </Drawer>;
}
