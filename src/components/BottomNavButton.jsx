// This component is used to create the bottom navigation buttons
// importing the necessary components and hooks from react and material-ui
import { Center } from "@chakra-ui/react";
import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  primaryLight
} from "../../theme/Colors";
import usePageStore from "../stores/PageStore";

function BottomNavButton({ name, link, func, icon, activeIcon, height, width, ...rest }) {
  // getting the navigate function from react-router-dom
  const changePageName = usePageStore((state) => state.changePageName);
  const pageName = usePageStore((state) => state.pageName);
  const text = name;
  const navigate = useNavigate();

  // function to handle the click event
  const handleClick = () => {
    changePageName(text);
    console.log(text);
    if (link != null) {
      navigate(`${link}`);
    }
    if (func != null) {
      func();
    }
  };
  // function to change the color of the icon
  const IconColor = () => {
    if (pageName == text && name != null) {
      return primaryLight;
    }
    return "white";
  };
  // returning the button component
  return (
    <Center height={"100%"}>
      <IconButton onClick={handleClick} sx={{ color: IconColor }}>
        {pageName == text && name != null ? activeIcon : icon}
      </IconButton>
    </Center>
  );
}

export default BottomNavButton;
