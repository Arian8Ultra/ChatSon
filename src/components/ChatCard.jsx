import { Center, Image } from "@chakra-ui/react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { borderColor } from "@mui/system";
import React from "react";
import { primary, Red, Yellow } from "../../theme/Colors";
import { borderRadiuos } from "../../theme/Themes";
import Logo from "../../Images/ChatSonLogo.svg";
import DBtable from "../../Images/DBtable.png";

export default function ChatCard({
  name,
  date,
  time,
  message,
  checked,
  profileImage,
  color,
  ChatImage,
  official,

  ...rest
}) {
  const borderColor = () => {
    switch (official) {
      case "chatSon":
        return primary;
      case "news":
        return Yellow;
      case "danger":
        return Red;
      default:
        return "rgba(255,255,255,0.03)";
    }
  };

  return (
    <Card
      sx={{
        borderRadius: borderRadiuos,
        borderLeft: 4,
        borderColor: borderColor(),
      }}
    >
      <Grid container  xs={12} sm={12} md={12} lg={12} >
        <Grid item xs={2} sm={2} md={2} lg={1}  maxWidth='60px'>
          <Box p={2} height='100%' bgcolor='rgba(255,255,255,0.03)'>
            <Center>
              <Avatar src={profileImage != null ? profileImage : ""} />
            </Center>
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={11}>
          <Stack py={0}>
            <Box mb={1} py={2}>
              <Grid container px={1}>
                <Grid item xs={6} sm={6} md={6} lg={4} sx={{ display: "flex" }}>
                  <Box height={"100%"}>
                    <Center height={"100%"} pl={15}>
                      <Typography textAlign={"left"}>{name != null ? name : "Name"}</Typography>
                    </Center>
                  </Box>
                </Grid>

                <Grid item  xs={2} sm={2} md={2} lg={6}></Grid>

                <Grid item xs={2} sm={2} md={2} lg={1}>
                  <Center height={"100%"}>
                    <Typography mx={2} textAlign={"end"} color='gray'>
                      {date != null ? date : "Date"}
                    </Typography>
                  </Center>
                </Grid>

                <Grid item xs={2} sm={2} md={2} lg={1}>
                  <Center height={"100%"}>
                    <Typography mx={2} textAlign={"end"} color='gray'>
                      {time != null ? time : "Time"}
                    </Typography>
                  </Center>
                </Grid>
              </Grid>
            </Box>

            <CardContent>
              <Typography textAlign={"left"} px={5}>
                {message != null ? message : "Text"}
              </Typography>
            </CardContent>
            <Box p={5} display={ChatImage == null ? "none" : {}}>
              <Center>
                <Image
                  borderRadius={10}
                  objectFit='contain'
                  src={ChatImage != null ? ChatImage : ""}
                />
              </Center>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}
