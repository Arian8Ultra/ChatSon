import { Center } from "@chakra-ui/react";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { primary, primaryGradient, primaryLight } from "../../theme/Colors";
import usePageStore from "../stores/PageStore";

export default function DrawerItem({ text, icon, link, activeIcon }) {
  const changePageName = usePageStore((state) => state.changePageName);
  const pageName = usePageStore((state) => state.pageName);

  const navigate = useNavigate();

  const handleClick = () => {
    document.title = text;
    changePageName(text);
    console.log(text);
    navigate(`${link}`);
  };

  const backgroundColor = () => {
    if (pageName == text) {
      return primary;
    }
    return "";
  };
  const background = () => {
    if (pageName == text) {
      return primaryGradient;
    }
    return "";
  };
  const textColor = () => {
    if (pageName == text) {
      return "white";
    }
    return primaryLight;
  };
  const textGradient = () => {
    if (pageName == text) {
      return "white";
    }
    return primaryGradient;
  };

  const hoverBackGround = () => {
    if (pageName == text) {
      return primary;
    }
    return "rgba(255, 255, 255, 0.1)";
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

  const handleActiveIcon = () => {};

  return (
    <ListItem key={text} disablePadding sx={{ my: 2 }}>
      <ListItemButton
        sx={{
          "height": "5vmin",
          "borderTopRightRadius": borderRadius,
          "borderTopLeftRadius": borderRadius,
          "borderBottomLeftRadius": borderRadius,
          "borderBottomRightRadius": borderRadius,
          "backgroundColor": backgroundColor,
          "borderLeft": borderLine,
          "borderBottom": borderLine,
          "borderTop": borderLine,
          "borderColor": primary,
          "background": background,
          "&:hover": {
            backgroundColor: hoverBackGround,
          },
        }}
        onClick={handleClick}
      >
        <ListItemIcon
          sx={{
            color: textColor,
            minWidth: 0,
            mr: 2,
            justifyContent: "center",
          }}
        >
          {pageName == text ? activeIcon : icon}
        </ListItemIcon>
        <ListItemText sx={{ color: textColor, textAlign: "center" }}>
          <Center height={"100%"}>
            <Typography
              fontWeight={800}
              sx={{
                background: textGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {text}
            </Typography>
          </Center>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
}
