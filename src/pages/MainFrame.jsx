import { Center } from "@chakra-ui/react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import { primaryLight } from "../../theme/Colors";
import { borderRadiuos, theme } from "../../theme/Themes";
import Navbar from "../components/Navbar";
import PagesMainBox from "../components/PagesMainBox";
import SideBarMain from "../components/SideBar";
import usePageStore from "../stores/PageStore";
import useSideBarStore from "../stores/SideBarStore";
import HomePage from "./Home/HomePage";

export default function MainFrame() {
  let open = useSideBarStore((state) => state.open);
  const pageName = usePageStore((state) => state.pageName);


  useEffect(()=>{
    document.title = pageName;
  })
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
            borderRadius: borderRadiuos,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            bgcolor: "rgba(255,255,255,0.1)",
            fontSize: 35,
            borderBottom:1,
            borderColor:primaryLight,
            color:primaryLight,
          }}
        >
          {pageName}
        </Box>
        <Box
          sx={{
            display: "flex",
            mx: 1,
            p: 3,
            borderRadius: borderRadiuos,
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
