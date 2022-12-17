import { Center } from "@chakra-ui/react";
import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { GlassBackground, GlassBackgroundLight, GlassPrimary, primary } from "../../theme/Colors";
import usePageStore from "../stores/PageStore";

function BottomNavButton({ name, link, func, icon, height, width, ...rest }) {
  const changePageName = usePageStore((state) => state.changePageName);
  const pageName = usePageStore((state) => state.pageName);
  const text = name;
  const navigate = useNavigate();


  const handleClick = () => {
    changePageName(text);
    console.log(text);
    if (link != null) {
      navigate(`${link}`);
    }
    if(func!=null){
        func()
    }
  };


  const IconColor = () => {
    if (pageName == text && name!=null) {
      return primary;
    }
    return "white";
  };
  const BackgroundColor = () => {
    if (pageName == text && name!=null) {
      return GlassBackgroundLight;
    }
    return "transparent";
  };


  return (
    <Center height={"100%"}>
      <IconButton onClick={handleClick} sx={{ color: IconColor , backgroundColor:BackgroundColor}}>
        {icon}
      </IconButton>
    </Center>
  );
}

export default BottomNavButton;
