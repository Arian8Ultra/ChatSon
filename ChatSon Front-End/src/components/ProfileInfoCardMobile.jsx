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
import { GlassBackgroundDark, primary } from "../../theme/Colors";
import { borderRadiuos } from "../../theme/Themes";
import IButton from "./IButton";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import CustomCard from "./CustomCard";
import ProfileCard from "./ProfileCard";

export default function ProfileInfoCardMobile({
  UserName,
  FirstName,
  LastName,
  Posts,
  Likes,
  Followers,
  PeopleList,
}) {
  return (
    <Accordion height={"100%"} elevation={0} sx={{ backgroundColor: "transparent", padding: 0 }}>
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
                </Stack>
              </Center>
              <IButton
                icon={<SettingsRoundedIcon />}
                height={"100%"}
                pageTitle={"Profile Settings"}
                link={"/App/Profile Settings"}
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
