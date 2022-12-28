import { Center } from "@chakra-ui/react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  GlassBackgroundLight,
  GlassPrimary,
  GlassPrimaryLight,
  primary,
  primaryDark,
  primaryGradient,
  primaryLight,
} from "../../theme/Colors";
import { borderRadiuos, borderRadiuosButton, borderRadiuosMenu } from "../../theme/Themes";
import useNewChatDrawerStore from "../stores/NewChatDrawerStore";
import useNewChatModalStore from "../stores/NewChatModalStore";
import usePageStore from "../stores/PageStore";
import useSideBarStore from "../stores/SideBarStore";
import { LabelChipFill, LabelChipFillBig } from "./LabelChip";
import NavbarMenuButton from "./NavbarMenuButton";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import { BottomNav } from "./BottomNav";

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
            left: "2.25vmax",
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
                  <Typography
                    color={primaryLight}
                    fontSize={"4vmin"}
                    fontWeight={700}
                    sx={{
                      background: primaryGradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    ChatSon
                  </Typography>
                </Center>
              </Stack>

              <Box sx={{ px: 1 }}>
                <Center height={"70px"}>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr: -3 }}>
                    <LabelChipFill
                      text={"Arian" + " " + "Rezaei"}
                      textColor='white'
                      backgroundColor={primaryLight}
                      minWidth='10vmax'
                      maxWidth='20vmax'
                      borderRadius={borderRadiuosButton}
                      boxShadow={0}
                    />
                    <LabelChipFillBig
                      text={"Arian" + " " + "Rezaei"}
                      textColor='white'
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

      {/* Bottom Navbar for mobile and small screens */}
      {BottomNav(handleOpenUserMenuB, changeChatDrawer, anchorElUserB, handleCloseUserMenuB)}
    </Box>
  );
}

