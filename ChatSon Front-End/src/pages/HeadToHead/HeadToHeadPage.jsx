import { Center } from "@chakra-ui/react";
import QrCode2RoundedIcon from "@mui/icons-material/QrCode2Rounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Box, Grid, IconButton, ThemeProvider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { GlassBackground, GlassPrimaryLight, primary, primaryDark } from "../../../theme/Colors.js";
import { borderRadiuos, borderRadiuosButton, theme } from "../../../theme/Themes.jsx";
import { Message } from "../../Classes/Message.js";
import CustomCard from "../../components/CustomCard.jsx";
import ChatBubble from "../../components/ChatBubble.jsx";
import IButton from "../../components/IButton.jsx";
import MyModal from "../../components/MyModal.jsx";
import ProfileCard from "../../components/ProfileCard.jsx";
import TextInputNormal from "../../components/TextInputNormal.jsx";
import useModalStore from "../../stores/ModalStore.jsx";
import ChatFeed from "../../components/ChatFeed.jsx";
export default function HeadToHeadPage() {
  const [QRmodalOpen, setQRmodalOpen] = React.useState(false);
  const openQRModal = useModalStore((state) => state.openQRmodal);
  const changeQRModal = useModalStore((state) => state.changeQRmodal);
  const m1= new Message("Hello this is a test for head to head chat that we have added to this messenger","Arian","10:50","","My","")
  const m2= new Message("Hello this is a test for head to head chat that we have added to this messenger","Arian","10:50","","","")
  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <CustomCard>
          <Center width={"100%"}>
            <Typography>Your Public ID is : #ID</Typography>
            <Box sx={{ position: "absolute", right: 10 }}>
              <IconButton onClick={() => changeQRModal("http://www.chatson.ir")}>
                <QrCode2RoundedIcon />
              </IconButton>
            </Box>
          </Center>
        </CustomCard>

        <Grid container spacing={1} mt={1}>
          <Grid item xs={12} lg={5}>
            <CustomCard>
              <Stack width={"100%"} spacing={1}>
                <Center width={"100%"}>
                  <Typography variant='h5' sx={{ color: primary }}>
                    People
                  </Typography>
                </Center>
                <Box height={"61vmin"} sx={{ scrollBehavior: "inside", overflow: "auto" }}>
                  <Stack spacing={1} sx={{ borderRadius: borderRadiuos }}>
                    <ProfileCard username={"Arian"} backgroundColor={GlassBackground} />
                    <ProfileCard
                      username={"Mohammad"}
                      color='red'
                      backgroundColor={GlassBackground}
                    />
                    <ProfileCard
                      username={"Ali"}
                      color='yellow'
                      backgroundColor={GlassBackground}
                    />
                    <ProfileCard
                      username={"Reza"}
                      color='green'
                      backgroundColor={GlassBackground}
                    />
                  </Stack>
                </Box>
              </Stack>
            </CustomCard>
          </Grid>
          <Grid item xs={"none"} lg={7} display={{ xs: "none", md: "flex" }}>
            <CustomCard>
              {/* <Stack
                spacing={1}
                width={"100%"}
                height={"59vmin"}
                px={1}
                sx={{ scrollBehavior: "inside", overflow: "auto" }}
              >
                <ChatBubble
                  Text={
                    "Hello this is a test for head to head chat that we have added to this messenger"
                  }
                  SenderName={"Arian"}
                />
              </Stack> */}

              <ChatFeed Messages={[m1,m2,m2]}/>

              <Box
                width={"100%"}
                sx={{
                  position: "absolute",
                  bottom: 0,
                  px:2,
                  py:1,
                  backgroundColor: GlassBackground,
                  right: 0,
                }}
                display={"flex"}
              >
                <Box width={"85%"}>
                  <TextInputNormal width={"100%"} />
                </Box>
                <Box
                  width={"15%"}
                  sx={{
                    borderRadius: borderRadiuosButton,
                  }}
                >
                  <Center height={"100%"}>
                    <IButton
                      color={primary}
                      backgroundColor={GlassPrimaryLight}
                      height='50px'
                      width={"50px"}
                      icon={<SendRoundedIcon sx={{ color: primaryDark }} />}
                    />
                  </Center>
                </Box>
              </Box>
            </CustomCard>
          </Grid>
        </Grid>
      </Stack>
      <MyModal isOpen={QRmodalOpen} onClose={setQRmodalOpen}></MyModal>
    </ThemeProvider>
  );
}
