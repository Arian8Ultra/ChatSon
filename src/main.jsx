import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { theme } from "../theme/Themes";
import "./index.css";
import LoginPage from "./pages/Login/LoginPage";
import MyRouter from "./routes/MyRouter"
import 'vite/modulepreload-polyfill'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MyRouter />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
