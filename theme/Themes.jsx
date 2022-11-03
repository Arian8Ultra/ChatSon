import { createTheme } from "@mui/material/styles";
import React from "react";
import {
  primary,
  primary2,
  primaryDark,
  primaryDark2,
  primaryLight,
  primaryLight2,
  secondaryYellow,
  secondaryYellowDark,
  secondaryYellowLight,
} from "./Colors";


export const theme2 = createTheme({
  typography: {
    fontFamily: "Vazirmatn,sans-serif",
  },
  palette: {
    primary: {
      main: primary2,
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
