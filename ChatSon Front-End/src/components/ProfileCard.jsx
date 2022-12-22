import { Center } from "@chakra-ui/react";
import { Avatar, Card, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { GlassBackgroundDark, primary } from "../../theme/Colors";
import { borderRadiuos } from "../../theme/Themes";

function ProfileCard({ username, profileImage }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: borderRadiuos,
        p: 2,
        backgroundColor: GlassBackgroundDark,
        backdropFilter: "blur(5px)",
        border: 0,
      }}
      onClick={() => navigate(`/App/Profile/${username}`)}
    >
      <Grid container width={"100%"}>
        <Grid item xs={2.5}>
          <Center>
            <Avatar src={profileImage != null ? profileImage : ""} />
          </Center>
        </Grid>
        <Grid item xs={0.5}>
          <Center height={"100%"} width={"max-content"}>
            <Divider orientation="vertical" sx={{ height: "100%", borderColor: primary }} />
          </Center>
        </Grid>
        <Grid item xs={9}>
          <Center height={"100%"} width={"max-content"}>
            <Typography>{username}</Typography>
          </Center>
        </Grid>
      </Grid>
    </Card>
  );
}

export default ProfileCard;