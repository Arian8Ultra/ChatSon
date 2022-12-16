import { Center } from "@chakra-ui/react";
import { Avatar, Box, Card, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ChatCard from "../../components/ChatCard";
import LinkButton from "../../components/LinkButton";
import useNewChatModalStore from "../../stores/NewChatModalStore";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import {
  GlassBackground,
  GlassBackgroundDark,
  primary,
  primaryDark,
  primaryLight,
} from "../../../theme/Colors";
import useSideBarStore from "../../stores/SideBarStore";
import { borderRadiuos } from "../../../theme/Themes";
import testImage from "../../../Images/testImage.jpg";
import Logo from "../../../Images/ChatSonLogo.svg";

export default function MyChatsPage() {
  const changeDrawerWidth = useSideBarStore((state) => state.changeDrawerWidth);

  useEffect(() => {
    changeDrawerWidth(10);
  }, []);
  return (
    <Box width={"100%"}>
      <Grid container sx={{ display: { xs: "none", md: "flex" } }} spacing={2}>
        <Grid item lg={3}>
          <Stack spacing={2}>
            <Card
              sx={{
                width: "100%",
                height: "20vmin",
                borderRadius: borderRadiuos,
                p: 2,
                backgroundColor: GlassBackgroundDark,
                backdropFilter: "blur(5px)",
                border: 0,
                display: "flex",
              }}
            >
              <Center height={"100%"} width={"min-content"} p={2}>
                <Avatar sx={{ width: "100px", height: "100px" }} />
              </Center>
              <Center height={"100%"} p={2} ml={"10%"}>
                <Stack spacing={2}>
                  <Typography variant='h5' textAlign={"left"}>
                    UserName
                  </Typography>
                  <Typography variant='subtitle1' textAlign={"left"}>
                    UserName
                  </Typography>
                </Stack>
              </Center>
            </Card>
          </Stack>
        </Grid>
        <Grid item lg={9}>
          <Stack spacing={2}>
            <ChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this shit'
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <ChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this shit'
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <ChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this shit'
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <ChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this shit'
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <ChatCard official='news' />
            <ChatCard official='danger' />
          </Stack>
        </Grid>
      </Grid>
      <Grid container sx={{ display: { xs: "flex", md: "none" } }} spacing={2}>
        <Grid item xs={12}>
          <Stack spacing={2}>
            <Card
              sx={{
                width: "100%",
                height: "20vmin",
                borderRadius: borderRadiuos,
                p: 2,
                backgroundColor: GlassBackgroundDark,
                backdropFilter: "blur(5px)",
                border: 0,
                display: "flex",
              }}
            >
              <Center height={"100%"} width={"min-content"} p={2}>
                <Avatar sx={{ width: "80px", height: "80px" }} />
              </Center>
              <Center height={"100%"} p={2} ml={"10%"}>
                <Stack spacing={2}>
                  <Typography variant='h5' textAlign={"left"}>
                    UserName
                  </Typography>
                  <Typography variant='subtitle1' textAlign={"left"}>
                    UserName
                  </Typography>
                </Stack>
              </Center>
            </Card>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={2}>
            <ChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this shit'
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <ChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this shit'
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <ChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this shit'
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <ChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this shit'
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <ChatCard official='news' />
            <ChatCard official='danger' />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
