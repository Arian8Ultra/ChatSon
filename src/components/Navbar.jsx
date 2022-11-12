import { Center } from "@chakra-ui/react";
import { AppBar, Box, Container, IconButton, Menu, Stack, Toolbar, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { primary, primaryDark, primaryLight } from "../../theme/Colors";
import { borderRadiuosButton, borderRadiuosMenu } from "../../theme/Themes";
import { LabelChipFill } from "./LabelChip";
import NavbarMenuButton from "./NavbarMenuButton";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import MenuIcon from "@mui/icons-material/Menu";
import useSideBarStore from "../stores/SideBarStore";

export default function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState();
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let open = useSideBarStore((state)=> state.open)
  const changeDrawer = useSideBarStore((state)=> state.changeSideBar)


  return (
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
          
        { <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={changeDrawer}
              sx={{ color:primaryLight }}
            >
              {!open ? <MenuIcon /> : <ArrowForwardIosRoundedIcon />}
            </IconButton>}



          <Stack width={"100%"} direction={"row"} sx={{ flexGrow: 1, mx: 5 }}>
            <Typography color={primaryLight}  fontSize={30} fontWeight={700}>
              ChatSon
            </Typography>
          </Stack>

          <Box sx={{ px: 1 }}>
            <Center height={"70px"}>
              <IconButton
                onClick={handleOpenUserMenu}
                onMouseEnter={handleOpenUserMenu}
                sx={{ p: 0, mr: -3 }}
              >
                <LabelChipFill
                  text={"Arian" + " " + "Rezaei"}
                  textColor='#242424'
                  backgroundColor={primaryLight}
                  width='10vmax'
                  borderRadius={borderRadiuosButton}
                  boxShadow={0}
                />
              </IconButton>
            </Center>

            <Menu
              sx={{ mt: "65px", ml: "10px" }}
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
              <NavbarMenuButton name='Profile' link='' width='9.2vmax' />
              <NavbarMenuButton name='Sign Out' link='/' />
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}