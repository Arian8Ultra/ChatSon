import { Avatar, Box, CssBaseline, Divider, Typography } from "@mui/material";
import { Stack, ThemeProvider } from "@mui/system";
import React from "react";
import TextInputNormal from "../../components/TextInputNormal";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { primary } from "../../../theme/Colors";
import { Center, Spacer } from "@chakra-ui/react";
import LinkButton from "../../components/LinkButton";
import { theme } from "../../../theme/Themes";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";

export default function SignInPage() {
  const [Username, setUserName] = React.useState();
  const [Password, setPassword] = React.useState();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px:4,
        }}
      >
        <Stack spacing={3} width='100%' justifyContent={"center"} justifyItems={"center"}>
          <Center>
            <Avatar
              sx={{
                background: primary,
                width: "60px",
                height: "60px",
              }}
              src=''
            >
              <LockOutlinedIcon />
            </Avatar>
          </Center>
          <Typography>Sign In</Typography>

          <TextInputNormal label={"Username"} getText={setUserName} />
          <TextInputNormal label={"Password"} type='password' getText={setPassword} />
          <Divider/>
          <Center>
            <LinkButton text={"Sign In"} width={"50%"} />
          </Center>
          <Center>
            <LinkButton
              text={"Anonymouse Sign In"}
              width={"100%"}
              icon={<PersonOutlineRoundedIcon />}
            />
          </Center>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
