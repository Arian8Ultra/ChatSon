import { Center } from "@chakra-ui/react";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import { backgroundC, primary, primaryDark } from "../../../theme/Colors";
import { borderRadiuos, theme } from "../../../theme/Themes";

export default function LoginPage() {
  return (
    <ThemeProvider theme={theme}>
      <Center w={"100vmax"} h={"100vmin"} justifyItems={"center"}>
        <Container
          maxWidth='xs'
          sx={{
            bgcolor: backgroundC,
            borderRadius: borderRadiuos,
            padding: 5,
            boxShadow: 5,
            margin: 20,
            justifySelf: "center",
          }}
        >
          <Outlet />
        </Container>
      </Center>
    </ThemeProvider>
  );
}
