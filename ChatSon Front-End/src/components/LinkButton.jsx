// Description: This is a button that links to another page and can be used to navigate to another page in the app or to an external link (like a website) or it can use to do functions like opening a dialog or a modal
import * as React from "react";
import { Button, ThemeProvider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Center } from "@chakra-ui/react";
import { primary, primaryDark, primaryGradient, primaryLight } from "../../theme/Colors";
import { borderRadiuosButton, borderRadiuosTextField, theme } from "../../theme/Themes";
import { display } from "@mui/system";
import { LoadingButton } from "@mui/lab";

export default function LinkButton(props) {
  // getting the props from the parent component

  const text = props.text != null ? props.text : "LinkButton";
  const link = props.link != null ? props.link : "";
  const pageTitle = props.pageTitle != null ? props.pageTitle : "";
  const disabled = props.disabled != null ? props.disabled : false;
  const fontSize = props.fontSize != null ? props.fontSize : 16;
  const height = props.height != null ? props.height : {};
  const width = props.width != null ? props.width : {};
  const minWidth = props.minWidth != null ? props.minWidth : {};
  const textColor = props.textColor != null ? props.textColor : "white";
  const backgroundColor = props.backgroundColor != null ? props.backgroundColor : primary;
  const hoverColor = props.hoverColor != null ? props.hoverColor : primary;
  const position = props.position != null ? props.position : {};
  const bottom = props.bottom != null ? props.bottom : {};
  const right = props.right != null ? props.right : {};
  const top = props.top != null ? props.top : {};
  const left = props.left != null ? props.left : {};
  const margin = props.margin != null ? props.margin : {};
  const mt = props.mt != null ? props.mt : {};
  const ml = props.ml != null ? props.ml : {};
  const mr = props.mr != null ? props.mr : {};
  const mb = props.mb != null ? props.mb : {};
  const padding = props.padding != null ? props.padding : {};
  const fullWidth = props.fullWidth != null ? props.fullWidth : false;
  const icon = props.icon != null ? props.icon : "";
  const Endicon = props.Endicon != null ? props.Endicon : "";
  const borderRadius = props.borderRadius != null ? props.borderRadius : borderRadiuosButton;
  const boxShadow = props.boxShadow != null ? props.boxShadow : {};
  const display = props.display != null ? props.display : {};
  const loading = props.loading != null ? props.loading : false;
  const variant = props.variant != null ? props.variant : "contained";
  const gradient = props.gradient != null ? props.gradient : primaryGradient;

  // function to do the action of the button
  function fn() {
    return props.fun();
  }

  // using the react router dom to navigate to another page
  const navigate = useNavigate();

  // function to handle the click event
  const handleClick = () => {
    if (props.fun != null) {
      fn();
    }
    if (props.pageTitle != null) {
      console.log(pageTitle);
      document.title = pageTitle;
    }
    if (props.link != null) {
      navigate(`${link}`);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <LoadingButton
        variant={variant}
        type={props.type}
        startIcon={icon}
        endIcon={Endicon}
        sx={{
          "width": width,
          "height": height,
          "borderRadius": borderRadius,
          "color": textColor,
          "backgroundColor": variant == "text" || variant == "outlined" ? "" : backgroundColor,
          "background": variant == "text" || variant == "outlined" ? "" : gradient,
          "fontSize": fontSize,
          "position": position,
          "bottom": bottom,
          "left": left,
          "right": right,
          "top": top,
          "m": margin,
          "mt": mt,
          "mr": mr,
          "ml": ml,
          "mb": mb,
          "minWidth": minWidth,
          "padding": padding,
          "boxShadow": boxShadow,
          "display": display,
          "fontWeight": 800,
          "&:hover": {
            backgroundColor: variant == "text" || variant == "outlined" ? "" : hoverColor,
            background: variant == "text" || variant == "outlined" ? "" : hoverColor,
            boxShadow: boxShadow,
          },
        }}
        onClick={handleClick}
        disabled={disabled}
        fullWidth={fullWidth}
        loading={loading}
      >
        <Center height={"100%"}>
          <Typography
            fontWeight={800}
            sx={{
              background: variant == "text" || variant == "outlined" ? gradient : '',
              backgroundClip: variant == "text" || variant == "outlined" ? 'text' : ''
            }}
          >
            {text}
          </Typography>
        </Center>
      </LoadingButton>
    </ThemeProvider>
  );
}
