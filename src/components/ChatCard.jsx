import { Center, Image } from "@chakra-ui/react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
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
  liked,
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

  const [Like, SetLike] = React.useState(liked != null ? liked : false);

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
            <Box height={"80%"} sx={{mb:'50px'}}>
              <Center>
                <Avatar src={profileImage != null ? profileImage : ""} />
              </Center>
            </Box>
            <Box sx={{position:'absolute', bottom:10,mt:'50px'}}>
              <IconButton onClick={() => SetLike(!Like)}>
                <Center>
                  {Like ? (
                    <FavoriteRoundedIcon
                      src={profileImage != null ? profileImage : ""}
                      sx={{ width: "35px", height: "35px", color: primary }}
                    />
                  ) : (
                    <FavoriteBorderRoundedIcon
                      src={profileImage != null ? profileImage : ""}
                      sx={{ width: "35px", height: "35px" }}
                    />
                  )}
                </Center>
              </IconButton>{" "}
            </Box>
          </Box>

          <Box
            p={2}
            height='100%'
            bgcolor='rgba(255,255,255,0.03)'
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <Box height={"80%"}>
              <Center>
                <Avatar
                  src={profileImage != null ? profileImage : ""}
                  sx={{ width: "35px", height: "35px" }}
                />
              </Center>
            </Box>
            <Center height={"20%"}>
              <IconButton onClick={() => SetLike(!Like)}>
                <Center>
                  {Like ? (
                    <FavoriteRoundedIcon
                      src={profileImage != null ? profileImage : ""}
                      sx={{ width: "35px", height: "35px", color: primary }}
                    />
                  ) : (
                    <FavoriteBorderRoundedIcon
                      src={profileImage != null ? profileImage : ""}
                      sx={{ width: "35px", height: "35px" }}
                    />
                  )}
                </Center>
              </IconButton>
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
                      >
                        {name != null ? name : "Name"}
                      </Typography>
                    </Center>
                  </Box>
                </Grid>

                <Grid item xs={1} sm={1} md={1} lg={6}></Grid>

                <Grid item xs={2.5} sm={2.5} md={2.5} lg={1}>
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

                <Grid item xs={2.5} sm={2.5} md={2.5} lg={1}>
                  <Center height={"100%"}>
                    <Typography
                      mx={2}
                      textAlign={"end"}
                      color='gray'
                      sx={{ display: { xs: "none", sm: "flex" } }}
                    >
                      {time != null ? time : "Time"}
                    </Typography>
                    <Typography
                      mx={2}
                      textAlign={"end"}
                      color='gray'
                      fontSize={"0.8em"}
                      sx={{ display: { xs: "flex", sm: "none" } }}
                    >
                      {time != null ? time : "Time"}
                    </Typography>
                  </Center>
                </Grid>
              </Grid>
            </Box>

            <Typography textAlign={"left"} px={5}>
              {message != null ? message : "Text"}
            </Typography>
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
