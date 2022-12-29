// Description: This component is used to display the profile information of the user in the profile page of the user and the profile page of other users as well with a follow button
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

export default function ProfileInfoCardWFollowButton({
  UserName,
  FirstName,
  LastName,
  Posts,
  Likes,
  Followers,
  Followed,
}) {
  const [followed, setFollowed] = React.useState(Followed);

  //handle follow button
  const handleFollow = () => {
    console.log("Followed");
    setFollowed(!followed);
  };
  return (
    <Accordion elevation={0} sx={{ backgroundColor: "transparent" }} expanded={followed}>
      <AccordionSummary sx={{ p: 0 }}>
        <CustomCard>
          <Stack width={"100%"}>
            <Container sx={{ display: "flex", p: 2 }}>
              <Center height={"100%"} width={"min-content"} p={2}>
                <Avatar sx={{ width: "100px", height: "100px" }} />
              </Center>

              <Center height={"100%"} p={2} ml={"10%"}>
                <Stack spacing={2}>
                  <Typography variant='h5' textAlign={"left"}>
                    {UserName != null ? UserName : "Username"}
                  </Typography>
                  <Typography variant='subtitle1' textAlign={"left"}>
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
              <IButton
                icon={<SettingsRoundedIcon />}
                pageTitle={"Profile Settings"}
                link={"/App/Profile Settings"}
                position='absolute'
                right={10}
              />
            </Container>

            <Divider sx={{ width: "100%", borderColor: primary }} />

            <Center p={5}>
              <Center height={"100%"}>
                <Stack width={"100%"} spacing={2} direction={"row"}>
                  <Typography variant='subtitle1' textAlign={"left"}>
                    Posts : {Posts != null ? Posts : "#Posts"}
                  </Typography>
                  <Typography variant='subtitle1' textAlign={"center"}>
                    Likes : {Likes != null ? Likes : "#Likes"}
                  </Typography>
                  <Typography variant='subtitle1' textAlign={"end"}>
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
