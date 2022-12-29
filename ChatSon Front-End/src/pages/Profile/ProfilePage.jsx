import { Box, Grid, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Logo from "../../../Images/ChatSonLogo.svg";
import testImage from "../../../Images/testImage.jpg";
import ChatFeed from "../../components/ChatFeed";
import MyChatCard from "../../components/MyChatCard";
import ProfileInfoCardMWFollowButton from "../../components/ProfileInfoCardMWFollowButton";
import ProfileInfoCardWFollowButton from "../../components/ProfileInfoCardWFollowButton";
import usePageStore from "../../stores/PageStore";
import useSideBarStore from "../../stores/SideBarStore";
export default function ProfilePage() {
  const changeDrawerWidth = useSideBarStore((state) => state.changeDrawerWidth);
  const changePageName = usePageStore((state) => state.changePageName);
  let { Username } = useParams();
  useEffect(() => {
    changePageName("Profile");
    changeDrawerWidth(2);
  }, []);
  return (
    <Box width={"100%"}>
      <Grid container sx={{ display: { xs: "none", md: "flex" } }} spacing={2}>
        <Grid item lg={3}>
          <Stack spacing={2}>
            <ProfileInfoCardWFollowButton/>
            
          </Stack>
        </Grid>
        <Grid item lg={9}>
        <MyChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this shit'
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <MyChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this shit'
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <MyChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this shit'
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <MyChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this shit'
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
        </Grid>
      </Grid>
      <Grid container sx={{ display: { xs: "flex", md: "none" } }} spacing={2}>
        <Grid item xs={12}>
          <Stack spacing={2}>
            <ProfileInfoCardMWFollowButton/>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={2}>
            <MyChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this shit'
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <MyChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this shit'
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <MyChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this shit'
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <MyChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this shit'
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
