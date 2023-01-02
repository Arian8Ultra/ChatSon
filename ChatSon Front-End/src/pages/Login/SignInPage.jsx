import { Avatar, Box, CssBaseline, Divider, Typography } from "@mui/material";
import { Stack, ThemeProvider } from "@mui/system";
import React from "react";
import TextInputNormal from "../../components/TextInputNormal";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  GlassBackground,
  GlassBackgroundDark,
  primary,
  primaryGradient,
} from "../../../theme/Colors";
import { Center, Spacer } from "@chakra-ui/react";
import LinkButton from "../../components/LinkButton";
import { theme } from "../../../theme/Themes";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import ChatSonLogo from "../../../Images/ChatSonLogoYP.svg";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useAlertStore from "../../stores/AlertStore";
import useUserStore from "../../stores/UserStore";
import { SignInUser, SignUpUser } from "../../Services/API";

export default function SignInPage() {
  const [Username, setUserName] = React.useState();
  const [Password, setPassword] = React.useState();
  const [UsernameError, setUsernameError] = React.useState(false);
  const [UsernameErrorHelperText, setUsernameErrorHelperText] = React.useState("");
  const [PasswordError, setPasswordError] = React.useState(false);
  const [PasswordErrorHelperText, setPasswordErrorHelperText] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();
  const AlertChange = useAlertStore((state) => state.changeAlert);
  const signIn = useUserStore((state) => state.signIn);


  const handleAPI = () => {
    setLoading(true);
    const onSuccess = () => {
      setLoading(false);

      setTimeout(() => {
        handleNavigate();
      }, 500);
    };

    const onFail = () => {
      setUsernameError(true);
      setUsernameErrorHelperText("Wrong Username");
      setPasswordError(true);
      setPasswordErrorHelperText("Wrong Password");
      setLoading(false);
    };

    setTimeout(() => {
      SignInUser(Username, Password, onSuccess, signIn, onFail, AlertChange);
    }, 500);
  };

  const handleAnonSignIn = () => {
    setLoading(true);
    const onSuccess = () => {
      setLoading(false);

      setTimeout(() => {
        handleNavigate();
      }, 500);
    };

    const onFail = () => {
      setUsernameError(true);
      setUsernameErrorHelperText("Wrong Username");
      setPasswordError(true);
      setPasswordErrorHelperText("Wrong Password");
      setLoading(false);
    };
    const anonUserName=String('Anon'+Math.floor(Math.random() * 1000000000));
    const anonPassword=String('Anon'+Math.floor(Math.random() * 1000000000));
    const SignIn = () => {
      SignInUser(anonUserName, anonPassword, onSuccess, signIn, null, AlertChange);
    };
    setTimeout(() => {
      SignUpUser(
        String(anonUserName),
        String(anonPassword),
        String(''),
        String(''),
        String(anonUserName+'@email.anon'),
        SignIn,
        onFail,
        AlertChange,
      );
    }, 500);
  };


  const handleNavigate = useCallback(() => navigate("/App/Home", { replace: true }), [navigate]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: 4,
        }}
      >
        <Stack spacing={3} width='100%' justifyContent={"center"} justifyItems={"center"}>
          <Center>
            <Avatar
              sx={{
                background: "transparent",
                width: "60px",
                height: "60px",
                border: 0,
              }}
              src={ChatSonLogo}
            ></Avatar>
          </Center>
          <Typography textAlign={"center"} variant='h5' sx={{ textShadow: 1 }}>
            Sign In
          </Typography>

          <TextInputNormal
            label={"Username"}
            getText={setUserName}
            error={UsernameError}
            helperText={UsernameErrorHelperText}
            autoComplete='username'
          />
          <TextInputNormal
            label={"Password"}
            type='password'
            getText={setPassword}
            error={PasswordError}
            helperText={PasswordErrorHelperText}
            autoComplete='password'
          />
          <Divider />
          <Center>
            <LinkButton text={"Sign In"} fun={handleAPI} gradient={primaryGradient} />
          </Center>
          <Center>
            <LinkButton
              text={"Anonymouse Sign In"}
              icon={<PersonOutlineRoundedIcon />}
              fun={handleAnonSignIn}
              gradient={primaryGradient}
            />
          </Center>
          <Center>
            <LinkButton
              text={"Sign Up"}
              link={"SignUp"}
              hoverColor={GlassBackground}
              variant={"text"}
            />
          </Center>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
