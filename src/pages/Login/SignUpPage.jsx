import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import axios from "axios";
import * as React from "react";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";
import LinkButton from "../../components/LinkButton";
import TextInputNormalBig from "../../components/TextInputNormalBig";
import TextInputWSelector from "../../components/TextInputWSelector";
import TextInputWSelectorBig from "../../components/TextInputWSelectorBig";
import { SignInUser, SignUpUser } from "../../Services/API";
import { theme } from "../../../theme/Themes";
import useAlertStore from "../../stores/AlertStore";
import useUserSotre from "../../stores/UserStore";
import { primary } from "../../../theme/Colors";
import { Stack } from "@mui/system";
import { Center } from "@chakra-ui/react";

export default function SignUpPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      Fname: data.get("Fname"),
      Lname: data.get("Fname"),
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const navigate = useNavigate();

  const handleOnClick = useCallback(
    () => navigate("/Client/Projects", { replace: true }),
    [navigate],
  );

  const [myErrorE, setMyErrorE] = React.useState(false);
  const [ErrorHelperE, setHelperE] = React.useState("");

  const [myErrorP, setMyErrorP] = React.useState(false);
  const [ErrorHelperP, setHelperP] = React.useState("");

  const [myErrorFN, setMyErrorFN] = React.useState(false);
  const [ErrorHelperFN, setHelperFN] = React.useState("");

  const [myErrorLN, setMyErrorLN] = React.useState(false);
  const [ErrorHelperLN, setHelperLN] = React.useState("");

  const [UsernameError, setUsernameError] = React.useState(false);
  const [UsernameErrorHelperText, setUsernameErrorHelperText] = React.useState("");

  const [PasswordError, setPasswordError] = React.useState(false);
  const [PasswordErrorHelperText, setPasswordErrorHelperText] = React.useState("");

  const [FnameError, setFnameError] = React.useState(false);
  const [FnameErrorHelperText, setFnameErrorHelperText] = React.useState("");

  const [LnameError, setLnameError] = React.useState(false);
  const [LnameErrorHelperText, setLnameErrorHelperText] = React.useState("");

  const [PersonIDError, setPersonIDError] = React.useState(false);
  const [PersonIDErrorHelperText, setPersonIDErrorHelperText] = React.useState("");

  const [Username, setUsername] = React.useState();
  const [Password, setPassword] = React.useState();
  const [Fname, setFname] = React.useState();
  const [Lname, setLname] = React.useState();
  const [Role, setRole] = React.useState();

  const handleClick = () => {
    if (Username == null) {
      setUsernameError(true);
      setUsernameErrorHelperText("Enter your desiger UserName");
      console.log("username is null");
    } else {
      setUsernameError(false);
      setUsernameErrorHelperText("");
    }

    if (Password == null) {
      setPasswordError(true);
      setPasswordErrorHelperText("Enter Password");
      console.log("password is null");
    } else if (String(Password).length >= 6) {
      setPasswordError(true);
      setPasswordErrorHelperText("طول مرز عبور میبایست بیشتر از 6 باشد");
    } else {
      setPasswordError(false);
    }

    if (Fname == null) {
      setFnameError(true);
      setFnameErrorHelperText("First Name is null");
      console.log("First Name is null");
    } else {
      setFnameError(false);
    }

    if (Lname == null) {
      setLnameError(true);
      setLnameErrorHelperText("Last Name is null");
      console.log("Last Name is null");
    } else {
      setLnameError(false);
    }
    console.warn("signing up");
    handleAxios();
  };

  const signIn = useUserSotre((state) => state.signIn);
  const AlertChange = useAlertStore((state) => state.changeAlert);

  useEffect(() => {
    document.title = "Signing Up";
  });

  const onFail = () => {
    setUsernameError(true);
    setUsernameErrorHelperText("نام کاربری اشتباه است");
    setIcon("");
    setPasswordError(true);
    setPasswordErrorHelperText("رمز عبور اشتباه است");
  };

  const onSuccess = () => {
    setTimeout(() => {
      console.log("signed Up");
      handleOnClick();
    }, 500);
  };

  const SignIn = () => {
    SignInUser(Username, Password, null, signIn, null, AlertChange);
  };
  const handleAxios = () => {
    SignUpUser(
      String(Username),
      String(Password),
      String(Fname),
      String(Lname),
      SignIn,
      onFail,
      AlertChange,
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: 2,
          px:4,
        }}
      >
        <Stack spacing={3} width='100%' justifyContent={"center"} justifyItems={"center"}>
          <Center width={'30%'}>
            <BackButton fullWidth={false} />
          </Center>

          <Typography textAlign={"center"} variant='h5' sx={{ textShadow: 1 }}>
            Creating new Account
          </Typography>
          <TextInputNormalBig
            id='usernameTextInput'
            label='UserName'
            type='text'
            idNum='1'
            value={""}
            error={UsernameError}
            helperText={UsernameErrorHelperText}
            autoComplete='username'
            fullWidth
            getText={setUsername}
          />
          <TextInputNormalBig
            id='FnameTextInput'
            label='First Name'
            type='text'
            idNum='1'
            value={""}
            error={FnameError}
            helperText={FnameErrorHelperText}
            autoComplete='name'
            fullWidth
            getText={setFname}
          />
          <TextInputNormalBig
            id='LnameTextInput'
            label='Last Name'
            type='text'
            idNum='1'
            value={""}
            error={LnameError}
            helperText={LnameErrorHelperText}
            autoComplete='Last Name'
            fullWidth
            getText={setLname}
          />
          <TextInputNormalBig
            id='passwordTextInput'
            label='Password'
            type='password'
            idNum='1'
            value={""}
            error={PasswordError}
            helperText={PasswordErrorHelperText}
            autoComplete='password'
            fullWidth
            getText={setPassword}
          />
          <Center>
            <LinkButton text='Creat Account' fun={() => handleClick()} />
          </Center>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
