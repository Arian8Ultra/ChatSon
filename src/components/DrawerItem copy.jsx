import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { primary, primaryDark, primaryLight, primaryLightTransparent } from "../theme/Colors";
import { borderRadiuosButton, lightTheme, theme } from "../theme/Themes";
import { useDispatch, useSelector } from "react-redux";
import usePageStore from "../ZuStore/PageStore";
import useThemeStore from "../ZuStore/ThemeStore";
import React from 'react'

export default function DrawerItem(props) {
  const text = props.text;
  const icon = props.icon;
  const link = props.link;
  const pageTitle = props.pageTitle != null ? props.pageTitle : "";
  let open = useSelector((state) => state.sideBar.value);

  const [count,setCount]= React.useState(0);
  //theme
  const zuTheme = useThemeStore((state) => state.Theme);
  const primary = useThemeStore((state) => state.primary);
  const primaryLight = useThemeStore((state) => state.primaryLight);
  const primaryDark = useThemeStore((state) => state.primaryDark);
  const primaryLightTransparent = useThemeStore((state) => state.primaryLightTransparent);
  const changeTheme = useThemeStore((state) => state.changeTheme);
  const themeName = useThemeStore((state) => state.themeName);
  
  const notZuTheme = () => {
    setCount(0)
    if (themeName == 'dark' && count ==0) {
      setCount(1)
      console.log("light");
      changeTheme(lightTheme)

    } else if(themeName == 'light' && count ==0){
      setCount(1)
      console.log("dark");
      changeTheme(theme)
    }
  };

  let changePageName = usePageStore((state) => state.changePageName);
  const pageName = usePageStore((state) => state.pageName);


  const navigate = useNavigate();
  const handleClick = () => {
    if (props.text != null) {
      document.title = text;
      changePageName(text)

    }
    navigate(`${link}`);
  };

  const backGround = () => {
    if (pageName == text) {
      return primary;
    }
    return "";
  };
  const textColor = () => {
    if (pageName == text) {
      return primaryDark;
    }
    return primary;
  };

  const hoverBackGround = () => {
    if (pageName == text) {
      return primary;
    }
    return primaryLightTransparent;
  };

  const borderLine = () => {
    if (pageName == text) {
      return 0;
    }
    return 0;
  };
  const borderRadius = () => {
    if (pageName == text) {
      return 50;
    }
    return 50;
  };

  return (
    <ListItem key={text} disablePadding sx={{ my: 1 }}>
      <ListItemButton
        sx={{
          height: "4.5vmin",
          borderTopRightRadius: borderRadius,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: borderRadius,
          backgroundColor: backGround,
          borderLeft: borderLine,
          borderBottom: borderLine,
          borderTop: borderLine,
          borderColor: primary,
          minHeight:'45px',
          "&:hover": {
            backgroundColor: hoverBackGround,
          },
        }}
        onClick={handleClick}
      >
        <ListItemIcon
          sx={{
            color: textColor,
            mr: -7,
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText sx={{ color: textColor, textAlign: "center" }}>{text}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
}
