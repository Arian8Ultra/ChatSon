import { Center } from "@chakra-ui/react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { borderRadiuos, theme } from "../../theme/Themes";
import Navbar from "../components/Navbar";
import PagesMainBox from "../components/PagesMainBox";
import SideBarMain from "../components/SideBar";
import useSideBarStore from "../stores/SideBarStore";
import HomePage from "./Home/HomePage";

export default function MainFrame() {
  let open = useSideBarStore((state) => state.open);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <SideBarMain />
      <PagesMainBox open={open}>
        <Box
          py={1}
          sx={{
            mt: "100px",
            mx: 1,
            borderRadius: 2,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            bgcolor: "rgba(255,255,255,0.1)",
            fontSize: 35,
            fontWeight: 700,
          }}
          bgcolor={"white"}
        >
          Home
        </Box>
        <Box
          sx={{
            display: "flex",
            mx: 1,
            p: 3,
            borderRadius: 2,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            bgcolor: "rgba(255,255,255,0.2)",
          }}
        >
          <CssBaseline />
          <HomePage />
        </Box>
      </PagesMainBox>
    </ThemeProvider>
  );
}