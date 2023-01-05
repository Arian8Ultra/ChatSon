import { Box, Card, Divider, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../Images/ChatSonLogo.svg";
import testImage from "../../../Images/testImage.jpg";
import { GlassBackgroundDark, primary } from "../../../theme/Colors";
import { borderRadiuos } from "../../../theme/Themes";
import MyChatCard from "../../components/MyChatCard";
import ProfileCard from "../../components/ProfileCard";
import ProfileInfoCard from "../../components/ProfileInfoCard";
import ProfileInfoCardMobile from "../../components/ProfileInfoCardMobile";
import { GetCurrentUser, GetCurrentUserChats } from "../../Services/API";
import usePageStore from "../../stores/PageStore";
import useSideBarStore from "../../stores/SideBarStore";
import useUserStore from "../../stores/UserStore";

export default function MyChatSonPage() {
  const changeDrawerWidth = useSideBarStore((state) => state.changeDrawerWidth);
  const [profile, setProfile] = React.useState("");
  const changePageName = usePageStore((state) => state.changePageName);
  const navigate = useNavigate();
  const token = useUserStore((state) => state.Token);
  const UserName = useUserStore((state) => state.UserName);
  const [chatList, setChatList] = React.useState([]);
  const [peopleList, setPeopleList] = React.useState([]);

  const onFail = () => {};
  const onSuccess = () => {
    const onFailChats = () => {};
    const onSuccessChats = () => {};
    GetCurrentUserChats(onSuccessChats, onFailChats, setChatList,token);
    console.log(chatList);
  };

  useEffect(() => {
    changePageName("My ChatSon");
    changeDrawerWidth(2);
    GetCurrentUser(onSuccess, onFail, token, setProfile);
    console.log(chatList);
    if (profile.following != null) {
      setPeopleList(JSON.parse(profile.following));
    }
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
                {peopleList.map((item) => {
                  <ProfileCard username={item} onClick={() => navigate(`/App/Profile/${item}`)} />;
                })}
                {/* <ProfileCard
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
                /> */}
              </Stack>
            </Card>
          </Stack>
        </Grid>
        <Grid item lg={9}>
          <Stack spacing={2}>
            {chatList.map((item) =>
              item.username == UserName ? (
                <MyChatCard
                  name={item.username}
                  date={item.date}
                  message={item.content}
                  likeNum={item.likeCount}
                />
              ) : (
                ""
              ),
            )}

            
          </Stack>
        </Grid>
      </Grid>
      <Grid container sx={{ display: { xs: "flex", md: "none" } }} spacing={2}>
        <Grid item xs={12}>
          <Stack spacing={2}>
            <ProfileInfoCardMobile
              UserName={profile.username}
              name={profile.name != null ? profile.name : ""}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={2}>
          {chatList.map((item) =>
              item.username == UserName ? (
                <MyChatCard
                  name={item.username}
                  date={item.date}
                  message={item.content}
                  likeNum={item.likeCount}
                />
              ) : (
                ""
              ),
            )}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
