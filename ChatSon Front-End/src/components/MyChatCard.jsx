// Description: This component is used to show the chat card in the chat page or the chat list
import { Center, Image } from "@chakra-ui/react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { borderColor } from "@mui/system";
import React from "react";
import { GlassBackgroundDark, primary, Red, Yellow } from "../../theme/Colors";
import { borderRadiuos } from "../../theme/Themes";
import Logo from "../../Images/ChatSonLogo.svg";
import DBtable from "../../Images/DBtable.png";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import AutoDirectionProvider from "react-with-direction/dist/AutoDirectionProvider";

export default function MyChatCard({
  name,
  date,
  time,
  message,
  checked,
  profileImage,
  color,
  ChatImage,
  official,
  liked,
  likeNum,
}) {

  // function to change the color of the border according to the official prop
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

  // returning the card component
  return (
    <Card
      sx={{
        borderRadius: borderRadiuos,
        borderTop: 0,
        borderColor: borderColor(),
        backgroundColor: GlassBackgroundDark,
        backdropFilter: "blur(10px)",
      }}
    >
      <Grid container>
        <Grid item xxs={2} xs={2} sm={1} sx={{ borderRight: 3, borderColor: borderColor() }}>
          <Box
            p={2}
            height='100%'
            bgcolor='rgba(255,255,255,0.03)'
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Box sx={{ mb: "50px" }}>
              <Center>
                <Avatar src={profileImage != null ? profileImage : ""} />
              </Center>
            </Box>
            <Box sx={{ mt: "50px" }}>
              <Center>
                <Typography textAlign={"center"}>{likeNum != null ? likeNum : 0}</Typography>
                <FavoriteRoundedIcon />
              </Center>
            </Box>
          </Box>

          <Box
            p={2}
            height='100%'
            bgcolor='rgba(255,255,255,0.03)'
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <Box>
              <Center>
                <Avatar
                  src={profileImage != null ? profileImage : ""}
                  sx={{ width: "25px", height: "25px" }}
                />
              </Center>
            </Box>
            <Center>
              <Box sx={{ mt: "50px" }}>
              <Center>
                  <Typography textAlign={"center"} fontSize={'15px'}>{likeNum != null ? likeNum : 0}</Typography>
                  <FavoriteRoundedIcon sx={{ width: "20px", height: "20px", color: primary }} />
                </Center>
              </Box>
            </Center>
          </Box>
        </Grid>
        <Grid item xxs={10} xs={10} sm={11}>
          <Stack py={0}>
            <Box mb={1} py={2}>
              <Grid container px={1}>
                <Grid item xs={6} sm={6} md={6} lg={4} sx={{ display: "flex" }}>
                  <Box height={"100%"}>
                    <Center height={"100%"} pl={15}>
                      <Typography textAlign={"left"} sx={{ display: { xs: "none", sm: "flex" } }}>
                        {name != null ? name : "Name"}
                      </Typography>
                      <Typography
                        textAlign={"left"}
                        sx={{ display: { xs: "flex", sm: "none" } }}
                        fontSize={"0.9em"}
                        variant='subtitle1'
                      >
                        {name != null ? name : "Name"}
                      </Typography>
                    </Center>
                  </Box>
                </Grid>

                <Grid item xs={1} sm={1} md={1} lg={6}></Grid>

                <Grid item xs={5} sm={5} md={5} lg={2}>
                  <Center height={"100%"}>
                    <Typography
                      mx={2}
                      textAlign={"end"}
                      color='gray'
                      sx={{ display: { xs: "none", sm: "flex" } }}
                    >
                      {date != null ? date : "Date"}
                    </Typography>
                    <Typography
                      mx={2}
                      textAlign={"end"}
                      color='gray'
                      fontSize={"0.8em"}
                      sx={{ display: { xs: "flex", sm: "none" } }}
                    >
                      {date != null ? date : "Date"}
                    </Typography>
                  </Center>
                </Grid>
              </Grid>
            </Box>
              <Typography textAlign={"left"} px={5}>
                {message != null ? message : "Text"}
              </Typography>

            <Box p={2} display={ChatImage == null ? "none" : {}}>
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
