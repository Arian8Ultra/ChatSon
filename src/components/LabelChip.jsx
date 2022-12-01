import { Center } from "@chakra-ui/react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { borderRadiuosButton, borderRadiuosMenu } from "../../theme/Themes";
import { Green, primary, primaryDark, primaryLight, Red } from "../../theme/Colors";

export function LabelChip(props) {
  const text = props.text != null ? props.text : "text";
  const link = props.link != null ? props.link : "";
  const disabled = props.disabled != null ? props.disabled : false;
  const fontSize = props.fontSize != null ? props.fontSize : 16;
  const height = props.height != null ? props.height : {};
  const width = props.width != null ? props.width : "100%";
  const backgroundColor = props.backgroundColor != null ? props.backgroundColor : "";
  const hoverColor = props.hoverColor != null ? props.hoverColor : "white";
  const position = props.position != null ? props.position : {};
  const bottom = props.bottom != null ? props.bottom : {};
  const right = props.right != null ? props.right : {};
  const top = props.top != null ? props.top : {};
  const left = props.left != null ? props.left : {};
  const margin = props.margin != null ? props.margin : {};
  const mx = props.mx != null ? props.mx : {};
  const my = props.my != null ? props.my : {};
  const value = props.value != null ? props.value : 0;
  const color = props.color != null ? props.color : "";
  const borderRadius = props.borderRadius != null ? props.borderRadius : borderRadiuosButton;

  const handleProgressColor = () => {
    if (value == 100) {
      return Green;
    } else if (value < 25) {
      return Red;
    }
    return primaryDark;
  };

  return (
    <Box
      border={2}
      borderRadius={borderRadius}
      borderColor={color == "" ? handleProgressColor : color}
      sx={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
        fontSize: fontSize,
        position: position,
        bottom: bottom,
        left: left,
        right: right,
        top: top,
        m: margin,
        mx: mx,
        my: my,
      }}
    >
      <Center height={"100%"}>
        <Typography color={color == "" ? handleProgressColor : color} fontSize={fontSize}>
          {text}
        </Typography>
      </Center>
    </Box>
  );
}

export function LabelChipFill(props) {
  const text = props.text != null ? props.text : "text";
  const link = props.link != null ? props.link : "";
  const disabled = props.disabled != null ? props.disabled : false;
  const fontSize = props.fontSize != null ? props.fontSize : "2vmin";
  const height = props.height != null ? props.height : {};
  const width = props.width != null ? props.width : {};
  const minWidth = props.minWidth != null ? props.minWidth : {};
  const minHeight = props.minHeight != null ? props.minHeight : {};
  const maxWidth = props.maxWidth != null ? props.maxWidth : {};
  const maxHeight = props.maxHeight != null ? props.maxHeight : {};
  const textColor = props.textColor != null ? props.textColor : primaryLight;
  const backgroundColor = props.backgroundColor != null ? props.backgroundColor : primaryDark;
  const hoverColor = props.hoverColor != null ? props.hoverColor : primary;
  const position = props.position != null ? props.position : {};
  const bottom = props.bottom != null ? props.bottom : {};
  const right = props.right != null ? props.right : {};
  const top = props.top != null ? props.top : {};
  const left = props.left != null ? props.left : {};
  const margin = props.margin != null ? props.margin : 0;
  const padding = props.padding != null ? props.padding : 1;
  const borderRadius = props.borderRadius != null ? props.borderRadius : borderRadiuosButton;
  const boxShadow = props.boxShadow != null ? props.boxShadow : {};
  const icon = props.icon != null ? props.icon : "";

  function fn() {
    return props.fun();
  }
  const navigate = useNavigate();

  const handleClick = () => {
    if (props.fun != null) {
      fn();
    }
    if (props.link != null) {
      navigate(`${link}`);
    }
  };

  return (
    <Box
      variant='contained'
      minWidth={minWidth}
      minHeight={minHeight}
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
        minWidth: minWidth,
        minHeight: minHeight,
        maxWidth: maxWidth,
        maxHeight: maxHeight,
        p: padding,
        boxShadow: boxShadow,
        display: { xs: "none",md:"block", lg: "block" }
      }}
      onClick={handleClick}
    >
      <Center height={"100%"}>
        <Typography color={textColor} fontSize={fontSize} textAlign='center' fontWeight={"bold"}>
          {text}
        </Typography>
        {icon}
      </Center>
    </Box>
  );
}
export function LabelChipFillBig(props) {
  const text = props.text != null ? props.text : "text";
  const link = props.link != null ? props.link : "";
  const disabled = props.disabled != null ? props.disabled : false;
  const fontSize = props.fontSize != null ? props.fontSize : "3vmin";
  const height = props.height != null ? props.height : {};
  const width = props.width != null ? props.width : {};
  const minWidth = props.minWidth != null ? props.minWidth : {};
  const minHeight = props.minHeight != null ? props.minHeight : {};
  const maxWidth = props.maxWidth != null ? props.maxWidth : {};
  const maxHeight = props.maxHeight != null ? props.maxHeight : {};
  const textColor = props.textColor != null ? props.textColor : primaryLight;
  const backgroundColor = props.backgroundColor != null ? props.backgroundColor : primaryDark;
  const hoverColor = props.hoverColor != null ? props.hoverColor : primary;
  const position = props.position != null ? props.position : {};
  const bottom = props.bottom != null ? props.bottom : {};
  const right = props.right != null ? props.right : {};
  const top = props.top != null ? props.top : {};
  const left = props.left != null ? props.left : {};
  const margin = props.margin != null ? props.margin : 0;
  const padding = props.padding != null ? props.padding : 1;
  const borderRadius = props.borderRadius != null ? props.borderRadius : borderRadiuosButton;
  const boxShadow = props.boxShadow != null ? props.boxShadow : {};
  const icon = props.icon != null ? props.icon : "";
  const display = props.display != null ? props.display : "block";

  function fn() {
    return props.fun();
  }
  const navigate = useNavigate();

  const handleClick = () => {
    if (props.fun != null) {
      fn();
    }
    if (props.link != null) {
      navigate(`${link}`);
    }
  };

  return (
    <Box
      variant='contained'
      minWidth={minWidth}
      minHeight={minHeight}
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
        mx:2,
        minWidth: minWidth,
        minHeight: minHeight,
        maxWidth: maxWidth,
        maxHeight: maxHeight,
        p: padding,
        boxShadow: boxShadow,
        display: { xs: "block", md:"none", lg: "none" },
      }}
      onClick={handleClick}
    >
      <Center height={"100%"}>
        <Typography color={textColor} fontSize={fontSize} textAlign='center' fontWeight={"bold"}>
          {text}
        </Typography>
        {icon}
      </Center>
    </Box>
  );
}
