// Description: This component is used to display the chat card in the chat page
// importing the necessary components and hooks from react and material-ui
import { Center, Image } from "@chakra-ui/react";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import {
  Avatar,
  Box,
  Card, Grid,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { GlassBackgroundDark, primary, Red, Yellow } from "../../theme/Colors";
import { borderRadiuos } from "../../theme/Themes";

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
  likeNum,
  id,
  ...rest
}) {

  // function to change the color of the border
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

  // getting the navigate function from react-router-dom
  const navigate = useNavigate()

  // function to handle the click event of like button
  const [Like, SetLike] = React.useState(liked != null ? liked : false);

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
            <Box sx={{ mb: "30px" }}>
              <Center cursor={'pointer'} onClick={()=>navigate(`/App/Profile/${name}`)}>
                <Avatar src={profileImage != null ? profileImage : ""} />
              </Center>
            </Box>
            <Box sx={{ mb: "60px" }}>
              <Center>
                <Typography textAlign={"center"}>{likeNum != null ? likeNum : 0}</Typography>
                <FavoriteRoundedIcon />
              </Center>
            </Box>
            <Box sx={{ position: "absolute", bottom: 10,left:20, mt: "50px" }}>
              <IconButton onClick={() => SetLike(!Like)}>
                <Center>
                  {Like ? (
                    <FavoriteRoundedIcon
                      sx={{ width: "35px", height: "35px", color: primary }}
                    />
                  ) : (
                    <FavoriteBorderRoundedIcon
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
            <Box>
              <Center cursor={'pointer'} onClick={()=>navigate(`/App/Profile/${name}`)}>
                <Avatar
                  src={profileImage != null ? profileImage : ""}
                  sx={{ width: "35px", height: "35px" }}
                />
              </Center>
            </Box>
            <Center>
              <Box sx={{ mb: "50px",mt:'20px' }}>
                <Center>
                  <Typography textAlign={"center"}>{likeNum != null ? likeNum : 0}</Typography>
                  <FavoriteRoundedIcon />
                </Center>
              </Box>
            </Center>
            <Box sx={{ position: "absolute", bottom: 10, mt: "50px", left:10 }}>
              <Center>
                <IconButton onClick={() => SetLike(!Like)}>
                  <Center>
                    {Like ? (
                      <FavoriteRoundedIcon
                        sx={{ width: "35px", height: "35px", color: primary }}
                      />
                    ) : (
                      <FavoriteBorderRoundedIcon
                        sx={{ width: "35px", height: "35px" }}
                      />
                    )}
                  </Center>
                </IconButton>
              </Center>
            </Box>
          </Box>
        </Grid>
        <Grid item xxs={10} xs={10} sm={11}>
          <Stack py={0}>
            <Box mb={1} py={2}>
              <Grid container px={1}>
                <Grid item xs={6} sm={6} md={6} lg={4} sx={{ display: "flex" }}>
                  <Box height={"100%"}>
                    <Center height={"100%"} pl={15} onClick={()=>navigate(`/App/Profile/${name}`)} cursor={'pointer'}>
                      <Typography textAlign={"left"} variant={'h5'} sx={{ display: { xs: "none", sm: "flex" } }}>
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
