import React from "react";
import CustomCard from "../../components/CustomCard.jsx";
import { Center, ChakraProvider } from "@chakra-ui/react";
import { Box, Grid, IconButton, ThemeProvider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { GlassBackground, GlassPrimary, GlassPrimaryLight, primary, primaryDark } from "../../../theme/Colors.js";
import QrCode2RoundedIcon from "@mui/icons-material/QrCode2Rounded";
import { borderRadiuos, borderRadiuosButton, borderRadiuosTextField, theme } from "../../../theme/Themes.jsx";
import ProfileCard from "../../components/ProfileCard.jsx";
import TextInputNormal from "../../components/TextInputNormal.jsx";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import IButton from "../../components/IButton.jsx";
import QRCode from "react-qr-code";
import MyModal from "../../components/MyModal.jsx";
import useModalStore from "../../stores/ModalStore.jsx";
export default function HeadToHeadPage() {
  const [QRmodalOpen, setQRmodalOpen] = React.useState(false);
  const openQRModal = useModalStore((state) => state.openQRmodal);
  const changeQRModal = useModalStore((state) => state.changeQRmodal);
  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <CustomCard>
          <Center width={"100%"}>
            <Typography>Your Public ID is : #ID</Typography>
            <Box sx={{ position: "absolute", right: 10 }}>
              <IconButton onClick={() => changeQRModal('http://www.chatson.ir')}>
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
                    <ProfileCard username={"Arian"} backgroundColor={GlassBackground} />
                    <ProfileCard username={"Arian"} backgroundColor={GlassBackground} />
                    <ProfileCard username={"Arian"} backgroundColor={GlassBackground} />
                    <ProfileCard username={"Arian"} backgroundColor={GlassBackground} />
                    <ProfileCard username={"Arian"} backgroundColor={GlassBackground} />
                    <ProfileCard username={"Arian"} backgroundColor={GlassBackground} />
                    <ProfileCard username={"Arian"} backgroundColor={GlassBackground} />
                    <ProfileCard username={"Arian"} backgroundColor={GlassBackground} />
                  </Stack>
                </Box>
              </Stack>
            </CustomCard>
          </Grid>
          <Grid item xs={"none"} lg={7} display={{ xs: "none", md: "flex" }}>
            <CustomCard>
              <QRCode value='http://www.chatson.ir' />

              <Box width={"85%"} sx={{ position: "absolute", bottom: 10 }}>
                <TextInputNormal width={"100%"} />
              </Box>
              <Box width={"10%"} sx={{ position: "absolute", bottom: 15, right: 10,borderRadius: borderRadiuosButton }}>
                <Center height={"100%"}>
                  <IButton color={primary} backgroundColor={GlassPrimaryLight} height='50px' width={'50px'} icon={<SendRoundedIcon sx={{ color: primaryDark }} />} />
                </Center>
              </Box>
            </CustomCard>
          </Grid>
        </Grid>
      </Stack>
        <MyModal isOpen={QRmodalOpen} onClose={setQRmodalOpen}></MyModal>
    </ThemeProvider>
  );
}
