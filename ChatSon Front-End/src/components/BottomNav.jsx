// Description: This component is the bottom navigation bar for mobile devices
// importing the necessary components and hooks from react and material-ui
import { Center } from "@chakra-ui/react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import { AppBar, Box, Grid, IconButton, Menu, Toolbar } from "@mui/material";
import React from "react";
import { GlassBackground, primaryGradient } from "../../theme/Colors";
import { borderRadiuos, borderRadiuosMenu } from "../../theme/Themes";
import BottomNavButton from "./BottomNavButton";
import NavbarMenuButton from "./NavbarMenuButton";
import {
  AddCircleOutlineRounded,
  ChatOutlined,
  HomeOutlined,
  LocalFireDepartmentOutlined,
} from "@mui/icons-material";
import useUserStore from "../stores/UserStore";
// exporting the BottomNav component
export function BottomNav(
  handleOpenUserMenuB,
  changeChatDrawer,
  anchorElUserB,
  handleCloseUserMenuB,
) {
  const signOut = useUserStore((state) => state.signOut);

  // returning the JSX for the component
  return (
    <Box sx={{ display: { xs: "flex", sm: "none" } }}>
      <AppBar
        position='fixed'
        color='primary'
        sx={{
          width: "90%",
          left: (window.innerWidth * 1) / 20,
          borderRadius: borderRadiuos,
          backgroundColor: GlassBackground,
          backdropFilter: "blur(6px)",
          top: "auto",
          bottom: 20,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar disableGutters>
          <Grid container my={0} mx={0}>
            <Grid item xs={2.25}>
              <Center height={"100%"}>
                <BottomNavButton
                  name={"Home"}
                  link={"Home"}
                  icon={<HomeOutlined sx={{ width: "90%", height: "35px" }} />}
                  activeIcon={<HomeRoundedIcon sx={{ width: "90%", height: "35px" }} />}
                />
              </Center>
            </Grid>
            <Grid item xs={2.25}>
              <Center height={"100%"}>
                <BottomNavButton
                  name={"My ChatSon"}
                  link={"MyChatSon"}
                  icon={<ChatOutlined sx={{ width: "90%", height: "35px" }} />}
                  activeIcon={<ChatRoundedIcon sx={{ width: "90%", height: "35px" }} />}
                />
              </Center>
            </Grid>

            <Grid item xs={3}></Grid>

            <Grid item xs={2.25}>
              <Center height={"100%"}>
                <BottomNavButton
                  name={"Trendings"}
                  link={"Trendings"}
                  icon={<LocalFireDepartmentOutlined sx={{ width: "90%", height: "35px" }} />}
                  activeIcon={
                    <LocalFireDepartmentRoundedIcon sx={{ width: "90%", height: "35px" }} />
                  }
                />
              </Center>
            </Grid>
            <Grid item xs={2.25}>
              <Center height={"100%"}>
                <IconButton onClick={handleOpenUserMenuB}>
                  <AccountCircleRoundedIcon sx={{ color: "white", width: "90%", height: "35px" }} />
                </IconButton>
              </Center>
            </Grid>
          </Grid>

          <Center position={"fixed"} width={"100%"} left={0} height={0} rounded>
            <IconButton
              onClick={changeChatDrawer}
              sx={{
                padding: 0,
              }}
            >
              <AddCircleOutlineRounded
                sx={{
                  color: "white",
                  width: "80px",
                  height: "80px",
                  background: primaryGradient,
                  borderRadius: "100px",
                }}
              />
            </IconButton>
          </Center>

          <Menu
            anchorEl={anchorElUserB}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            keepMounted
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            open={Boolean(anchorElUserB)}
            onClose={handleCloseUserMenuB}
            PaperProps={{
              sx: {
                backgroundColor: GlassBackground,
                borderRadius: borderRadiuosMenu,
                backdropFilter: "blur(6px)",
              },
            }}
          >
            <NavbarMenuButton name='Profile Settings' link='Profile Settings' />
            <NavbarMenuButton name='Sign Out' link='/'  fun={signOut}  />
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
