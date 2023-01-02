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
import useUserStore from "../../stores/UserStore";
import { GetCurrentUserProfile, GetProfileByUsername } from "../../Services/API";
import LinkButton from "../../components/LinkButton";

export default function MyChatSonPage() {
  const changeDrawerWidth = useSideBarStore((state) => state.changeDrawerWidth);
  const [profile, setProfile] = React.useState("");
  const changePageName = usePageStore((state) => state.changePageName);
  const navigate = useNavigate();
  const token = useUserStore((state) => state.Token);
  const UserName = useUserStore((state) => state.UserName);
  const [chatList, setChatList] = React.useState([]);
  const onFail = () => {};
  const onSuccess = () => {};

  useEffect(() => {
    changePageName("My ChatSon");
    changeDrawerWidth(2);
    GetCurrentUserProfile(onSuccess, onFail, token, setProfile);
    console.warn(profile);
  }, []);
  return (
    <Box width={"100%"}>
      <Grid container sx={{ display: { xs: "none", md: "flex" } }} spacing={2}>
        <Grid item lg={3}>
          <Stack spacing={2}>
            
            <ProfileInfoCard
              UserName={profile.username}
              name={profile.name != null ? profile.name : ""}
            />
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

              {profile.following != null
              ? JSON.parse(profile.following)
                  .reverse()
                  .map(
                    (
                      item, //following
                    ) => (
                      <ProfileInfoCard
                        UserName={item.username}
                        name={item.name != null ? item.name : ""}
                      />
                    ),
                  )
              : ""}
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
            {chatList.map((item) =>
              item.username == UserName ? (
                <MyChatCard
                  name={"Arian Rezaei"}
                  date='1/1/1401'
                  time={"7:30"}
                  message='this is a test for this'
                  ChatImage={testImage}
                  profileImage={Logo}
                  official='chatSon'
                />
              ) : (
                ""
              ),
            )}

            {profile.tweets != null
              ? JSON.parse(profile.tweets)
                  .reverse()
                  .map((item) => (
                    <MyChatCard
                      name={item.username}
                      date='1/1/1401'
                      time={"7:30"}
                      message={item.content}
                      ChatImage={item.image != null ? item.image : ""}
                      profileImage={Logo}
                      official='chatSon'
                    />
                  ))
              : ""}
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
          {profile.tweets != null
              ? JSON.parse(profile.tweets)
                  .reverse()
                  .map((item) => (
                    <MyChatCard
                      name={item.username}
                      date='1/1/1401'
                      time={item.date}
                      message={item.content}
                      ChatImage={item.image != null ? item.image : ""}
                      profileImage={Logo}
                      official='chatSon'
                    />
                  ))
              : ""}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
