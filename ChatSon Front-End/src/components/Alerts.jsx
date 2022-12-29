import { Alert, Snackbar, ThemeProvider } from "@mui/material";
import * as React from "react";
import { useEffect } from "react";
import { theme } from "../../theme/Themes";
import useAlertStore from "../stores/AlertStore";
import { borderRadiuosButton } from "../../theme/Themes";

export default function NotificationA(props) {
  const height = props.height != null ? props.height : {};
  const width = props.width != null ? props.width : "100%";


  const openAlert = useAlertStore((state) => state.open);
  const textAlert = useAlertStore((state) => state.text);
  const AlertChange = useAlertStore((state) => state.changeAlert);

  const openSnackRedux = openAlert;
  const SnackCodeRedux = textAlert;
  const [Text, setText] = React.useState("");
  const [Type, setType] = React.useState("info");

  const [count, setCount] = React.useState(0);
  const SnackSeverityRedux = () => {
    if (SnackCodeRedux == 200) {
      setType("success");
    } else if (SnackCodeRedux == 201) {
      setType("success");
    } else if (SnackCodeRedux == 204) {
      setType("warning");
    } else if (SnackCodeRedux == 400) {
      setType("error");
    } else if (SnackCodeRedux == 404) {
      setType("error");
    } else if (SnackCodeRedux == 403) {
      setType("error");
    } else if (SnackCodeRedux == 500) {
      setType("error");
    } else if (String(SnackCodeRedux).includes("Hello")) {
      setType("info");
    } else if (String(SnackCodeRedux).includes("failed")) {
      setType("error");
    } else if (String(SnackCodeRedux).includes("Error")) {
      setType("error");
    } else {
      setType("info");
    }
  };

  const SnackText = () => {
    if (SnackCodeRedux == 200) {
      setText("Success");
    } else if (SnackCodeRedux == 201) {
      setText("Success");
    } else if (SnackCodeRedux == 204) {
      setText("Nothing Found");
    } else if (SnackCodeRedux == 400) {
      setText("Bad Request");
    } else if (SnackCodeRedux == 403) {
      setText(" Forbidden");
    } else if (SnackCodeRedux == 404) {
      setText("404");
    } else if (SnackCodeRedux == 500) {
      setText("Failed");
    } else if (SnackCodeRedux == "Hello") {
      setText("");
    } else if (String(SnackCodeRedux).includes("failed")) {
      setText(SnackCodeRedux);
    } else if (String(SnackCodeRedux).includes("Error")) {
      setText("Error");
    } else {
      setText("");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    SnackText();
    SnackSeverityRedux();
  });

  // useEffect(() => {
  return (
    <ThemeProvider theme={theme}>
      <Snackbar
        open={openSnackRedux}
        autoHideDuration={5000}
        onClose={() => AlertChange("")}
      >
        <Alert
          onClose={() => AlertChange("")}
          severity={Type}
          variant="standard"
          sx={{
            width: width,
            height: height,
            borderRadius: borderRadiuosButton,
          }}
        >
          {SnackCodeRedux} {Text}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
