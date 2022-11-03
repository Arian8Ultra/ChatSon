import { createTheme } from "@mui/material/styles";
import React from "react";
import {
  primary,
  primaryDark,
  primaryLight,
  secondaryYellow,
  secondaryYellowDark,
  secondaryYellowLight,
} from "./Colors";


export const theme = createTheme({
  typography: {
    fontFamily: "Vazirmatn,sans-serif",
  },
  palette: {
    mode:"dark",
    primary: {
      main: primary,
    },
    secondary: {
      main: secondaryYellow,
      light: secondaryYellowLight,
      dark: secondaryYellowDark,
    },
  },
  direction: "rtl",
});

export const borderRadiuos = 4; /* 4 */
export const borderRadiuosMenu = 4; /* 4 */
export const borderRadiuosTextField = 50; /* 50 */
export const borderRadiuosButton = 100; /* 180 */
