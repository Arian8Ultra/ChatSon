import { Center } from "@chakra-ui/react";
import { AppBar, Box, Container, IconButton, Menu, Stack, Toolbar } from "@mui/material";
import React, { useCallback } from "react";
import { primary, primaryDark, primaryLight } from "../../theme/Colors";
import { borderRadiuosButton, borderRadiuosMenu } from "../../theme/Themes";
import { LabelChipFill } from "./LabelChip";
import NavbarMenuButton from "./NavbarMenuButton";

export default function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState();
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
          <Stack width={"100%"} direction={"row"} sx={{ flexGrow: 1, mx: 5 }}></Stack>

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
