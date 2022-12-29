// Description: This component is used to show profile information in mobile version that use the accordion component to show the profile information in a collapsible way
import { Center } from "@chakra-ui/react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Card,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { GlassBackground, GlassBackgroundDark, primary } from "../../theme/Colors";
import { borderRadiuos } from "../../theme/Themes";
import IButton from "./IButton";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import CustomCard from "./CustomCard";
import ProfileCard from "./ProfileCard";
import LinkButton from "./LinkButton";

export default function ProfileInfoCardMWFollowButton({
  UserName,
  FirstName,
  LastName,
  Posts,
  Likes,
  Followers,
  PeopleList,
  Followed,
}) {

  const [followed, setFollowed] = React.useState(Followed);

  //handle follow button
  const handleFollow = () => {
    console.log("Followed");
    setFollowed(!followed);
  };
  return (
    <Accordion elevation={0} sx={{ backgroundColor: "transparent" }} expanded={followed} >
      <AccordionSummary sx={{ p: 0 }}>
        <CustomCard>
          <Stack width={"100%"}>
            <Stack sx={{ display: "block", p: 2 }}>
              <Center width={"100%"} p={2}>
                <Avatar sx={{ width: "70px", height: "70px" }} />
                <IButton
                  icon={<SettingsRoundedIcon />}
                  pageTitle={"Profile Settings"}
                  link={"/App/Profile Settings"}
                  position='absolute'
                  right={10}
                />
              </Center>

              <Center p={2}>
                <Stack spacing={2}>
                  <Typography variant='h6' textAlign={"center"}>
                    {UserName != null ? UserName : "Username"}
                  </Typography>
                  <Typography variant='subtitle2' textAlign={"center"}>
                    {FirstName != null ? FirstName : "FirstName"}{" "}
                    {LastName != null ? LastName : "LastName"}
                  </Typography>
                  <Center width={"100%"} my={5}>
                    <LinkButton
                      text={followed ? "Unfollow" : "Follow"}
                      fullWidth
                      variant={"outlined"}
                      textColor={primary}
                      hoverColor={GlassBackground}
                      fun={handleFollow}
                    />
                  </Center>
                </Stack>
              </Center>
            </Stack>

            <Divider sx={{ width: "100%", borderColor: primary }} />

            <Center p={5}>
              <Center height={"100%"}>
                <Stack width={"100%"} spacing={2} direction={"row"}>
                  <Typography variant='subtitle2' textAlign={"left"}>
                    Posts : {Posts != null ? Posts : "#Posts"}
                  </Typography>
                  <Typography variant='subtitle2' textAlign={"center"}>
                    Likes : {Likes != null ? Likes : "#Likes"}
                  </Typography>
                  <Typography variant='subtitle2' textAlign={"end"}>
                    Followers : {Followers != null ? Followers : "#Followers"}
                  </Typography>
                </Stack>
              </Center>
            </Center>
          </Stack>
        </CustomCard>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
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
            <ProfileCard username={"Arian"} onClick={() => navigate(`/App/Profile/${"Arian"}`)} />
            <ProfileCard username={"Hanieh"} onClick={() => navigate(`/App/Profile/${"Hanieh"}`)} />
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
      </AccordionDetails>
    </Accordion>
  );
}
