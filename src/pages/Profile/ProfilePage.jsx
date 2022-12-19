import { Center } from "@chakra-ui/react";
import { Avatar, Box, Card, Container, Divider, Grid, Stack, Typography } from "@mui/material";
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
import MyChatCard from "../../components/MyChatCard";
import IButton from "../../components/IButton";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import usePageStore from "../../stores/PageStore";
import { useParams } from "react-router-dom";
export default function ProfilePage() {
  const changeDrawerWidth = useSideBarStore((state) => state.changeDrawerWidth);
  const changePageName = usePageStore((state) => state.changePageName);
  let { Username } = useParams();
  useEffect(() => {
    changePageName("Profile");
    changeDrawerWidth(2);
  }, []);
  return (
    <Box width={"100%"}>
      <Grid container sx={{ display: { xs: "none", md: "flex" } }} spacing={2}>
        <Grid item lg={3}>
          <Stack spacing={2}>
            <Card
              sx={{
                width: "100%",
                borderRadius: borderRadiuos,
                p: 2,
                backgroundColor: GlassBackgroundDark,
                backdropFilter: "blur(5px)",
                border: 0,
                display: "flex",
              }}
            >
              <Stack width={"100%"}>
                <Container sx={{ display: "flex", p: 2 }}>
                  <Center height={"100%"} width={"min-content"} p={2}>
                    <Avatar sx={{ width: "100px", height: "100px" }} />
                  </Center>

                  <Center height={"100%"} p={2} ml={"10%"}>
                    <Stack spacing={2}>
                      <Typography variant='h5' textAlign={"left"}>
                        {Username}
                      </Typography>
                      <Typography variant='subtitle1' textAlign={"left"}>
                        FirstName LastName
                      </Typography>
                    </Stack>
                  </Center>
                </Container>

                <Divider sx={{ width: "100%", borderColor: primary }} />

                <Center p={5}>
                  <Center height={"100%"} p={2}>
                    <Stack width={"100%"} spacing={4} direction={"row"}>
                      <Typography variant='subtitle1' textAlign={"left"}>
                        Posts : #
                      </Typography>
                      <Typography variant='subtitle1' textAlign={"left"}>
                        Likes : #
                      </Typography>
                      <Typography variant='subtitle1' textAlign={"left"}>
                        Followers : #
                      </Typography>
                    </Stack>
                  </Center>
                </Center>
                <Center width={"100%"} my={5}>
                  <LinkButton
                    text='follow'
                    fullWidth
                    variant={"outlined"}
                    textColor={primary}
                    hoverColor={GlassBackground}
                  />
                </Center>
              </Stack>
              <IButton
                icon={<SettingsRoundedIcon />}
                height={"100%"}
                pageTitle={"Profile"}
                link={"/App/Profile"}
              />
            </Card>
          </Stack>
        </Grid>
        <Grid item lg={9}>
          <Stack spacing={2}>
            <MyChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this shit'
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <MyChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this shit'
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <MyChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this shit'
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <MyChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this shit'
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <MyChatCard official='news' />
            <MyChatCard official='danger' />
          </Stack>
        </Grid>
      </Grid>
      <Grid container sx={{ display: { xs: "flex", md: "none" } }} spacing={2}>
        <Grid item xs={12}>
          <Stack spacing={2}>
            <Card
              sx={{
                width: "100%",
                borderRadius: borderRadiuos,
                p: 2,
                backgroundColor: GlassBackgroundDark,
                backdropFilter: "blur(5px)",
                border: 0,
                display: "flex",
              }}
            >
              <Stack width={"100%"}>
                <Container sx={{ display: "flex", p: 2 }}>
                  <Center height={"100%"} width={"min-content"} p={2}>
                    <Avatar sx={{ width: "100px", height: "100px" }} />
                  </Center>

                  <Center height={"100%"} p={2} ml={"10%"}>
                    <Stack spacing={2}>
                      <Typography variant='h5' textAlign={"left"}>
                        {Username}
                      </Typography>
                      <Typography variant='subtitle1' textAlign={"left"}>
                        FirstName LastName
                      </Typography>
                    </Stack>
                  </Center>
                </Container>

                <Divider sx={{ width: "100%", borderColor: primary }} />

                <Center p={5}>
                  <Center height={"100%"} p={2}>
                    <Stack width={"100%"} spacing={4} direction={"row"}>
                      <Typography variant='subtitle1' textAlign={"left"}>
                        Posts : #
                      </Typography>
                      <Typography variant='subtitle1' textAlign={"left"}>
                        Likes : #
                      </Typography>
                      <Typography variant='subtitle1' textAlign={"left"}>
                        Followers : #
                      </Typography>
                    </Stack>
                  </Center>
                </Center>
              </Stack>
              <IButton
                icon={<SettingsRoundedIcon />}
                height={"100%"}
                pageTitle={"Profile"}
                link={"/App/Profile"}
              />
            </Card>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={2}>
            <MyChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this shit'
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <MyChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this shit'
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <MyChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this shit'
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <MyChatCard
              name={"Arian Rezaei"}
              date='1/1/1401'
              time={"7:30"}
              message='this is a test for this shit'
              ChatImage={testImage}
              profileImage={Logo}
              official='chatSon'
            />
            <MyChatCard official='news' />
            <MyChatCard official='danger' />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
