import { Center } from "@chakra-ui/react";
import { Avatar, Card, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { GlassBackgroundDark, primary } from "../../theme/Colors";
import { borderRadiuos } from "../../theme/Themes";
import IButton from "./IButton";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import CustomCard from "./CustomCard";

export default function ProfileInfoCard({UserName,FirstName,LastName,Posts,Likes,Followers}) {
  return (
    <CustomCard
    >
      <Stack width={"100%"}>
        <Container sx={{ display: "flex", p: 2 }}>
          <Center height={"100%"} width={"min-content"} p={2}>
            <Avatar sx={{ width: "100px", height: "100px" }} />
          </Center>

          <Center height={"100%"} p={2} ml={"10%"}>
            <Stack spacing={2}>
              <Typography variant='h5' textAlign={"left"}>
                {UserName!=null ? UserName : 'Username'}
              </Typography>
              <Typography variant='subtitle1' textAlign={"left"}>
                {FirstName!=null ? FirstName : 'FirstName'} {LastName!=null ? LastName : 'LastName'}
              </Typography>
            </Stack>
          </Center>
        </Container>

        <Divider sx={{ width: "100%", borderColor: primary }} />

        <Center p={5}>
          <Center height={"100%"} p={2}>
            <Stack width={"100%"} spacing={2} direction={"row"}>
              <Typography variant='subtitle1' textAlign={"left"}>
                Posts : {Posts!=null ? Posts : '#Posts'}
              </Typography>
              <Typography variant='subtitle1' textAlign={"center"}>
                Likes : {Likes!=null ? Likes : '#Likes'}
              </Typography>
              <Typography variant='subtitle1' textAlign={"end"}>
                Followers : {Followers!=null ? Followers : '#Followers'}
              </Typography>
            </Stack>
          </Center>
        </Center>
      </Stack>
      <IButton
        icon={<SettingsRoundedIcon />}
        height={"100%"}
        pageTitle={"Profile Settings"}
        link={"/App/Profile Settings"}
      />
    </CustomCard>
  );
}
