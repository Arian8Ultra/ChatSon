import { Center } from "@chakra-ui/react";
import { Box, Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import { backgroundC, primary, primaryDark } from "../../../theme/Colors";
import { borderRadiuos, theme } from "../../../theme/Themes";

export default function LoginPage() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }}>
        <Center w={"100vmax"} h={"100vmin"} justifyItems={"center"}>
          <Container
            sx={{
              bgcolor: backgroundC,
              borderRadius: borderRadiuos,
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
      <Box sx={{ display: { xs: "flex", sm: "flex", md: "flex", lg: "none" } }}>
        <Center w={"100vmax"} h={window.innerHeight} justifyItems={"center"}>
          <Outlet />{" "}
        </Center>
      </Box>
    </ThemeProvider>
  );
}
