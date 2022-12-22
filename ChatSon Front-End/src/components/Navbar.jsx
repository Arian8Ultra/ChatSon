import { Center } from "@chakra-ui/react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import MenuIcon from "@mui/icons-material/Menu";
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
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  GlassBackground,
  GlassBackgroundLight,
  GlassPrimary,
  GlassPrimaryLight,
  primary,
  primaryDark,
  primaryLight,
} from "../../theme/Colors";
import { borderRadiuos, borderRadiuosButton, borderRadiuosMenu } from "../../theme/Themes";
import useNewChatDrawerStore from "../stores/NewChatDrawerStore";
import useNewChatModalStore from "../stores/NewChatModalStore";
import usePageStore from "../stores/PageStore";
import useSideBarStore from "../stores/SideBarStore";
import BottomNavButton from "./BottomNavButton";
import { LabelChipFill, LabelChipFillBig } from "./LabelChip";
import NavbarMenuButton from "./NavbarMenuButton";
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';

export default function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState();
  const [anchorElUserB, setAnchorElUserB] = React.useState();
  const changeModal = useNewChatModalStore((state) => state.changeModal);
  const navigate = useNavigate();
  let changePageName = usePageStore((state) => state.changePageName);

  const handleClick = (link, text) => {
    if (text != null) {
      document.title = text;
      changePageName(text);
    }
    navigate(`${link}`);
  };

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
  let openChatDrawer = useNewChatDrawerStore((state) => state.open);
  const changeChatDrawer = useNewChatDrawerStore((state) => state.changeSideBar);

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
            top: "10px",
            left: "2vmax",
            width: "95vmax",
            borderRadius: borderRadiuos,
            backgroundColor: GlassBackgroundLight,
            backdropFilter: "blur(6px)",
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
                  sx={{ mt: "60px" }}
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
                      backgroundColor: GlassBackgroundLight,
                      borderRadius: borderRadiuosMenu,
                      backdropFilter: "blur(6px)",
                    },
                  }}
                >
                  <NavbarMenuButton name='Profile Settings' link='Profile Settings' />
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
                    icon={<HomeRoundedIcon sx={{ width: "90%", height: "35px" }} />}
                  />
                </Center>
              </Grid>
              <Grid item xs={2.25}>
                <Center height={"100%"}>
                  <BottomNavButton
                    name={"My ChatSon"}
                    link={"MyChatSon"}
                    icon={<ChatRoundedIcon sx={{ width: "90%", height: "35px" }} />}
                  />
                </Center>
              </Grid>

              <Grid item xs={3}></Grid>

              <Grid item xs={2.25}>
                <Center height={"100%"}>
                  <BottomNavButton
                    name={"Trendings"}
                    link={"Trendings"}
                    icon={<LocalFireDepartmentRoundedIcon sx={{ width: "90%", height: "35px" }} />}
                  />
                </Center>
              </Grid>
              <Grid item xs={2.25}>
                <Center height={"100%"}>
                  <IconButton onClick={handleOpenUserMenuB}>
                    <AccountCircleRoundedIcon
                      sx={{ color: "white", width: "90%", height: "35px" }}
                    />
                  </IconButton>
                </Center>
              </Grid>
            </Grid>

            <Center position={"fixed"} width={"100%"} left={0} height={0} rounded>
              <IconButton
                onClick={changeChatDrawer}
                sx={{
                  backgroundColor: "rgba(0,0,0,0.01)",
                  padding: 0,
                  backdropFilter: "blur(9px)",
                }}
              >
                <AddCircleRoundedIcon sx={{ color: primary, width: "100%", height: "90px" }} />
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
                  backgroundColor: GlassBackgroundLight,
                  borderRadius: borderRadiuosMenu,
                },
              }}
            >
              <NavbarMenuButton name='Profile Settings' link='Profile Settings' />
              <NavbarMenuButton name='Sign Out' link='/' />
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
}
