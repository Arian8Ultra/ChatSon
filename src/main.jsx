import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { theme } from "../theme/Themes";
import App from "./App";
import "./index.css";
import LoginPage from "./pages/Login/LoginPage";
import MyRouter from "../src/routes/MyRouter"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MyRouter />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);