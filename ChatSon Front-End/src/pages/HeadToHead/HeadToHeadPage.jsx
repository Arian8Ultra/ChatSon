import { Center } from "@chakra-ui/react";
import QrCode2RoundedIcon from "@mui/icons-material/QrCode2Rounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Box, Grid, IconButton, ThemeProvider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import {
  GlassBackground, primary,
  primaryDark
} from "../../../theme/Colors.js";
import { borderRadiuos, borderRadiuosButton, theme } from "../../../theme/Themes.jsx";
import { Message } from "../../Classes/Message.js";
import ChatFeed from "../../components/ChatFeed.jsx";
import CustomCard from "../../components/CustomCard.jsx";
import IButton from "../../components/IButton.jsx";
import MyModal from "../../components/MyModal.jsx";
import ProfileCard from "../../components/ProfileCard.jsx";
import TextInputNormal from "../../components/TextInputNormal.jsx";
import useModalStore from "../../stores/ModalStore.jsx";

export default function HeadToHeadPage() {
  const [QRmodalOpen, setQRmodalOpen] = React.useState(false);
  const [UserName, setUserName] = React.useState("");
  const changeQRModal = useModalStore((state) => state.changeQRmodal);
  const m1 = new Message(
    "Hello this is a test for head to head chat that we have added to this messenger",
    "Arian",
    "10:50",
    "12/25/2022",
    "My",
    "",
  );
  const m2 = new Message(
    "Hello this is a test for head to head chat that we have added to this messenger",
    "Arian",
    "10:50",
    "12/25/2022",
    "",
    "",
  );
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
                    <ProfileCard
                      username={"Arian"}
                      backgroundColor={GlassBackground}
                      onClick={() => setUserName("Arian")}
                    />
                    <ProfileCard
                      username={"Mohammad"}
                      color='red'
                      backgroundColor={GlassBackground}
                      onClick={() => setUserName("Mohammad")}
                    />
                    <ProfileCard
                      username={"Ali"}
                      color='yellow'
                      backgroundColor={GlassBackground}
                      onClick={()=>setUserName('Ali')}

                    />
                    <ProfileCard
                      username={"Reza"}
                      color='green'
                      backgroundColor={GlassBackground}
                      onClick={()=>setUserName('Reza')}

                    />
                  </Stack>
                </Box>
              </Stack>
            </CustomCard>
          </Grid>
          <Grid item xs={"none"} lg={7} display={{ xs: "none", md: "flex" }}>
            <CustomCard>
              {UserName!='' ? <ChatFeed Messages={[m1, m2, m2,m1,m1,m2,m1,m2]} Username={UserName} height='59vmin' /> : ''}

              <Box
                width={"100%"}
                sx={{
                  position: "absolute",
                  bottom: 0,
                  px: 2,
                  py: 1,
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
                      backgroundColor={GlassBackground}
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
