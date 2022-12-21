import { Center } from "@chakra-ui/react";
import { Box, Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import { backgroundC, GlassBackgroundLight, primary, primaryDark } from "../../../theme/Colors";
import { borderRadiuos, theme } from "../../../theme/Themes";
import backgroundImage from "../../../Images/background.svg";
export default function LoginPage() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }}>
        <Center
          w={"100vmax"}
          h={"100vmin"}
          justifyItems={"center"}
          backgroundImage={backgroundImage}
          backgroundRepeat='no-repeat'
          backgroundSize={"cover"}
        >
          <Container
            sx={{
              borderRadius: borderRadiuos,
              bgcolor: GlassBackgroundLight,
              backdropFilter: "blur(8px)",
              padding: 5,
              boxShadow: 5,
              margin: 20,
              justifySelf: "center",
              width: "22vmax",
            }}
          >
            <Outlet />
          </Container>
        </Center>
      </Box>

        <Box
          sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            backgroundAttachment:'fixed',
            backdropFilter: "blur(8px)",
            display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
          }}
        >
        <Box
        width={'100%'}
        height={'100%'}
          sx={{
            backdropFilter: "blur(10px)",
            display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
          }}
        >
          <Center w={"100vmax"} h={window.innerHeight} justifyItems={"center"}>
            <Outlet />
          </Center>
        </Box>
        </Box>
    </ThemeProvider>
  );
}
