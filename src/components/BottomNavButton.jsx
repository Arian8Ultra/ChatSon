import { Center } from "@chakra-ui/react";
import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { primary } from "../../theme/Colors";
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


  return (
    <Center height={"100%"}>
      <IconButton onClick={handleClick} sx={{ color: IconColor }}>
        {icon}
      </IconButton>
    </Center>
  );
}

export default BottomNavButton;
