import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import React from "react";
import {
  primary,
  primaryDark,
  primaryLight,
  secondaryYellow,
  secondaryYellowDark,
  secondaryYellowLight,
} from "./Colors";


export const theme= createTheme({
  typography:{
    fontFamily:'Comfortaa,cursive',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
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
  direction: "ltr",
});


export const borderRadiuos = 4; /* 4 */
export const borderRadiuosMenu = 4; /* 4 */
export const borderRadiuosTextField = 50; /* 50 */
export const borderRadiuosButton = 4; /* 180 */
