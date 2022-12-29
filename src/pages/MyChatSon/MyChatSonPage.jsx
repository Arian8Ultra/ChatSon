import { Center } from "@chakra-ui/react";
import { Avatar, Box, Card, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { GlassBackgroundDark, primary } from "../../../theme/Colors";
import useSideBarStore from "../../stores/SideBarStore";
import { borderRadiuos } from "../../../theme/Themes";
import testImage from "../../../Images/testImage.jpg";
import Logo from "../../../Images/ChatSonLogo.svg";
import MyChatCard from "../../components/MyChatCard";
import IButton from "../../components/IButton";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ProfileCard from "../../components/ProfileCard";
import usePageStore from "../../stores/PageStore";
import { useNavigate } from "react-router-dom";
import ProfileInfoCard from "../../components/ProfileInfoCard";
import ProfileInfoCardMobile from "../../components/ProfileInfoCardMobile";

export default function MyChatSonPage() {
  const changeDrawerWidth = useSideBarStore((state) => state.changeDrawerWidth);

  const changePageName = usePageStore((state) => state.changePageName);
  const navigate = useNavigate();

  useEffect(() => {
    changePageName("My ChatSon");
    changeDrawerWidth(2);
  }, []);
  return (
    <Box width={"100%"}>
      <Grid container sx={{ display: { xs: "none", md: "flex" } }} spacing={2}>
        <Grid item lg={3}>
          <Stack spacing={2}>
            <ProfileInfoCard />
            <Card
              sx={{
                width: "100%",
                borderRadius: borderRadiuos,
                p: 2,
                backgroundColor: GlassBackgroundDark,
                backdropFilter: "blur(5px)",
                border: 0,
              }}
            >
              <Typography variant='h5'>People</Typography>
              <Divider sx={{ width: "100%", borderColor: primary, my: 1 }} />

              <Stack width={"100%"} spacing={1}>
                <ProfileCard
                  username={"Arian"}
                  onClick={() => navigate(`/App/Profile/${"Arian"}`)}
                />
                <ProfileCard
                  username={"Hanieh"}
                  onClick={() => navigate(`/App/Profile/${"Hanieh"}`)}
                />
                <ProfileCard
                  username={"Parinaz"}
                  onClick={() => navigate(`/App/Profile/${"Parinaz"}`)}
                />
                <ProfileCard
                  username={"Nilofar"}
                  onClick={() => navigate(`/App/Profile/${"Nilofar"}`)}
                />
              </Stack>
            </Card>
          </Stack>
        </Grid>
        <Grid item lg={9}>
          <Stack spacing={2}>
            <MyChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this'
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <MyChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this  '
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <MyChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this  '
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <MyChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this  '
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <MyChatCard official='news' />
            <MyChatCard official='danger' />
          </Stack>
        </Grid>
      </Grid>
      <Grid container sx={{ display: { xs: "flex", md: "none" } }} spacing={2}>
        <Grid item xs={12}>
          <Stack spacing={2}>
            <ProfileInfoCardMobile />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={2}>
            <MyChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this  '
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <MyChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this  '
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <MyChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this  '
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <MyChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this  '
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <MyChatCard official='news' />
            <MyChatCard official='danger' />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
