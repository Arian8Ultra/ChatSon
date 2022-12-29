// Description: This is a button component that can be used in the application. It can be used to navigate to a specific page or to perform a function.
import { IconButton } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { borderRadiuosTextField } from "../../theme/Themes";
import { background } from "@chakra-ui/react";
import usePageStore from "../stores/PageStore";

export default function IButton({
  text,
  link,
  pageTitle,
  disabled,
  fontSize,
  height,
  width,
  minWidth,
  color,
  position,
  bottom,
  right,
  left,
  top,
  margin,
  mt,
  ml,
  mr,
  mb,
  padding,
  icon,
  borderRadius,
  boxShadow,
  hoverColor,
  backgroundColor,
  fun,
  textColor,
  ...rest
}) {
  // getting the navigate function from react-router-dom
  const navigate = useNavigate();
  // getting the page name from the page store
  // and the function to change the page name
  const pageName = usePageStore((state) => state.pageName);
  const changePageName = usePageStore((state) => state.changePageName);

  // function to handle the click event
  const handleClick = () => {
    if (fun != null) {
      fun();
    }
    if (pageTitle != null) {
      console.log(pageTitle != null ? pageTitle : "");
      document.title = pageTitle != null ? pageTitle : "";
      changePageName(pageTitle);
    }
    if (link != null) {
      navigate(`${link}`);
    }
  };

  
  return (
    // returning the button component
    <IconButton
      sx={{
        "backgroundColor": backgroundColor != null ? backgroundColor : {},
        "width": width != null ? width : {},
        "height": height != null ? height : {},
        "borderRadius": borderRadius != null ? borderRadius : borderRadiuosTextField,
        "bottom": bottom != null ? bottom : {},
        "left": left != null ? left : {},
        "right": right != null ? right : {},
        "top": top != null ? top : {},
        "m": margin != null ? margin : {},
        "mt": mt != null ? mt : {},
        "mr": mr != null ? mr : {},
        "ml": ml != null ? ml : {},
        "mb": mb != null ? mb : {},
        "color": textColor != null ? textColor : "white",
        "minWidth": minWidth != null ? minWidth : {},
        "position": position != null ? position : {},
        "padding": padding != null ? padding : {},
        "&:hover": {
          backgroundColor: hoverColor != null ? hoverColor : {},
        },
      }}
      onClick={handleClick}
      disabled={disabled != null ? disabled : false}
    >
      {icon != null ? icon : ""}
    </IconButton>
  );
}
