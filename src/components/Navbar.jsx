import { Center } from "@chakra-ui/react";
import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  Menu,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useCallback } from "react";
import { GlassBackground, primary, primaryDark, primaryLight } from "../../theme/Colors";
import { borderRadiuos, borderRadiuosButton, borderRadiuosMenu, theme } from "../../theme/Themes";
import { LabelChipFill, LabelChipFillBig } from "./LabelChip";
import NavbarMenuButton from "./NavbarMenuButton";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import MenuIcon from "@mui/icons-material/Menu";
import useSideBarStore from "../stores/SideBarStore";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import useNewChatModalStore from "../stores/NewChatModalStore";

export default function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState();
  const [anchorElUserB, setAnchorElUserB] = React.useState();
  const changeModal = useNewChatModalStore((state) => state.changeModal);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenUserMenuB = (event) => {
    setAnchorElUserB(event.currentTarget);
  };
  const handleCloseUserMenuB = () => {
    setAnchorElUserB(null);
  };

  let open = useSideBarStore((state) => state.open);
  const changeDrawer = useSideBarStore((state) => state.changeSideBar);

  return (
    <Box>
      <Box sx={{ display: { xs: "none", sm: "flex" } }}>
        <AppBar
          position='fixed'
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            height: "70px",
            maxHeight: "70px",
            minHeight: "70px",
          }}
        >
          <Container maxWidth=''>
            <Toolbar disableGutters>
              {
                <IconButton
                  color='inherit'
                  aria-label='open drawer'
                  edge='start'
                  onClick={changeDrawer}
                  sx={{ color: primaryLight }}
                >
                  {!open ? <MenuIcon /> : <ArrowForwardIosRoundedIcon />}
                </IconButton>
              }

              <Stack width={"100%"} direction={"row"} sx={{ flexGrow: 1, mx: 5 }}>
                <Center height={"100%"}>
                  <Typography color={primaryLight} fontSize={"4vmin"} fontWeight={700}>
                    ChatSon
                  </Typography>
                </Center>
              </Stack>

              <Box sx={{ px: 1 }}>
                <Center height={"70px"}>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr: -3 }}>
                    <LabelChipFill
                      text={"Arian" + " " + "Rezaei"}
                      textColor='#242424'
                      backgroundColor={primaryLight}
                      minWidth='10vmax'
                      maxWidth='20vmax'
                      borderRadius={borderRadiuosButton}
                      boxShadow={0}
                    />
                    <LabelChipFillBig
                      text={"Arian" + " " + "Rezaei"}
                      textColor='#242424'
                      backgroundColor={primaryLight}
                      minWidth='10vmax'
                      maxWidth='20vmax'
                      borderRadius={borderRadiuosButton}
                      boxShadow={0}
                    />
                  </IconButton>
                </Center>

                <Menu
                  sx={{ mt: "50px", ml: "10px" }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                  PaperProps={{
                    sx: {
                      backgroundColor: primaryLight,
                      borderRadius: borderRadiuosMenu,
                    },
                  }}
                >
                  <NavbarMenuButton name='Profile' link='Profile' width='8.5vmax' />
                  <NavbarMenuButton name='Sign Out' link='/' />
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>

      <Box sx={{ display: { xs: "flex", sm: "none" } }}>
        <AppBar
          position='fixed'
          color='primary'
          sx={{
            width: '90%',
            left: (window.innerWidth * 1) / 20,
            borderRadius: borderRadiuos,
            backgroundColor: GlassBackground,
            backdropFilter: "blur(8px)",
            top: "auto",
            bottom: 10,
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
            <Toolbar disableGutters>
              <Grid container my={0} mx={0} >
                <Grid item xs={2.25}>
                  <Center height={"100%"}>
                    <IconButton onClick={changeDrawer}>
                      <HomeRoundedIcon sx={{ color: primary, width:  "90%", height: "35px" }} />
                    </IconButton>
                  </Center>
                </Grid>
                <Grid item xs={2.25}>
                  <Center height={"100%"}>
                    <IconButton onClick={changeDrawer}>
                      <ChatRoundedIcon sx={{ color: primary, width: "90%", height: "35px" }} />
                    </IconButton>
                  </Center>
                </Grid>

                <Grid item xs={3} ></Grid>

                <Grid item xs={2.25}>
                  <Center height={"100%"}>
                    <IconButton onClick={changeDrawer}>
                      <LocalFireDepartmentRoundedIcon
                        sx={{ color: primary, width:  "90%", height: "35px" }}
                      />
                    </IconButton>
                  </Center>
                </Grid>
                <Grid item xs={2.25}>
                  <Center height={"100%"}>
                    <IconButton onClick={handleOpenUserMenuB}>
                      <AccountCircleRoundedIcon
                        sx={{ color: primary, width: "90%", height: "35px" }}
                      />
                    </IconButton>
                  </Center>
                </Grid>
              </Grid>

              <Center position={'fixed'} width={'100%'} left={0}height={0}>
                <IconButton onClick={changeModal}>
                  <AddCircleRoundedIcon
                    sx={{ color: primary , width: "100%",height:'90px'
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
                    backgroundColor: primaryLight,
                    borderRadius: borderRadiuosMenu,
                  },
                }}
              >
                <NavbarMenuButton name='Profile' link='Profile' width='8.5vmax' />
                <NavbarMenuButton name='Sign Out' link='/' />
              </Menu>
            </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
}
