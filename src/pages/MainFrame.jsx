import { Center, ChakraProvider, Image } from "@chakra-ui/react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import {
  GlassBackground,
  GlassBackgroundLight,
  primary,
  primaryDark,
  primaryGradient,
  primaryLight,
} from "../../theme/Colors";
import { borderRadiuos, theme } from "../../theme/Themes";
import Navbar from "../components/Navbar";
import { NewChatDrawer } from "../components/NewChatDrawer";
import PagesMainBox from "../components/PagesMainBox";
import SideBarMain from "../components/SideBar";
import usePageStore from "../stores/PageStore";
import useSideBarStore from "../stores/SideBarStore";
import HomePage from "./Home/HomePage";
import LogoImage from "../../Images/Zan-Zendegi-Azadi.jpg";

export default function MainFrame() {
  let open = useSideBarStore((state) => state.open);
  const drawerWidth = useSideBarStore((state) => state.drawerWidth);
  const pageName = usePageStore((state) => state.pageName);
  const changeDrawerWidth = useSideBarStore((state) => state.changeDrawerWidth);

  useEffect(() => {
    document.title = pageName;
    if (pageName == "My ChatSon" || pageName =="Profile") {
      changeDrawerWidth(2);
    } else {
      changeDrawerWidth(20);
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <SideBarMain />
      <PagesMainBox
        open={open}
        dw={parseInt(drawerWidth)}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Box
          sx={{
            display: "flex",
            mx: 1,
            mt: "100px",
            p: 3,
            pt:1,
            borderRadius: borderRadiuos,
            bgcolor: GlassBackgroundLight,
            backdropFilter: "blur(5px)",
            borderTop: 0,
            borderColor: primary,
            fontSize: "3vmin",
            color: primary,
            display: { xs: "none", sm: "block" },
          }}
        >
          <Stack>
            <Box
              sx={{
                fontSize: "4vmin",
                fontWeight:800,
                color: primary,
                my:1
              }}
            >
              {pageName}
            </Box>
            <CssBaseline />
            <Outlet />
          </Stack>
        </Box>
      </PagesMainBox>

      <Box
        py={1}
        sx={{
          mt: "10px",
          mx: 1,
          borderRadius: borderRadiuos,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          bgcolor: primaryLight,
          bgcolor: GlassBackgroundLight,
          backdropFilter: "blur(5px)",
          borderTop: 0,
          borderColor: primary,
          fontSize: "1.6em",
          color: primary,
          display: { xs: "block", sm: "none" },
        }}
      >
        {pageName}
      </Box>
      <Box
        sx={{
          display: "flex",
          p: 3,
          mx: 1,
          mb: "90px",
          borderRadius: borderRadiuos,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          bgcolor: GlassBackgroundLight,
          backdropFilter: "blur(5px)",
          display: { xs: "block", sm: "none" },
        }}
      >
        <CssBaseline />
        <Outlet />
      </Box>
      <NewChatDrawer/>

    </ThemeProvider>
  );
}
