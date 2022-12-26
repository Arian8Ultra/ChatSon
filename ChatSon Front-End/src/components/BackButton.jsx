import * as React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  primary,
  primaryDark,
  primaryGradient,
  primaryLight
} from "../../theme/Colors";
import { borderRadiuosButton } from "../../theme/Themes";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

export default function BackButton(props) {
  const text = props.text != null ? props.text : "";
  const link = props.link != null ? props.link : "";
  const disabled = props.disabled != null ? props.disabled : false;
  const fontSize = props.fontSize != null ? props.fontSize : 16;
  const height = props.height != null ? props.height : {};
  const width = props.width != null ? props.width : {};
  const textColor = props.textColor != null ? props.textColor : 'white';
  const backgroundColor = props.backgroundColor != null ? props.backgroundColor : primaryLight;
  const hoverColor = props.hoverColor != null ? props.hoverColor : primary;
  const position = props.position != null ? props.position : {};
  const bottom = props.bottom != null ? props.bottom : {};
  const right = props.right != null ? props.right : {};
  const top = props.top != null ? props.top : {};
  const left = props.left != null ? props.left : {};
  const margin = props.margin != null ? props.margin : {};
  const fullWidth = props.fullWidth != null ? props.fullWidth : false;
  const icon = props.icon != null ? props.icon : <ArrowForwardIosRoundedIcon />;
  const borderRadius = props.borderRadius != null ? props.borderRadius : borderRadiuosButton;
  const boxShadow = props.boxShadow != null ? props.boxShadow : {};
  const gradient = props.gradient != null ? props.gradient : primaryGradient;

  const navigate = useNavigate();

  return (
    <Button
      variant='contained'
      startIcon={icon}
      sx={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        color: textColor,
        backgroundColor: backgroundColor,
        fontSize: fontSize,
        position: position,
        bottom: bottom,
        left: left,
        right: right,
        top: top,
        m: margin,
        boxShadow:boxShadow,
        background: gradient,
        "&:hover": {
          backgroundColor: hoverColor,
          background: hoverColor,

        },
      }}
      onClick={() => navigate(-1)}
      fullWidth={fullWidth}
      disabled={disabled}
    >
        {text + " "} back
    </Button>
  );
}
