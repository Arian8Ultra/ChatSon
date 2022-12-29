// This component is used to create the drawer items
// importing the necessary components and hooks from react and material-ui
import { Center } from "@chakra-ui/react";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { primary, primaryGradient, primaryLight } from "../../theme/Colors";
import usePageStore from "../stores/PageStore";

export default function DrawerItem({ text, icon, link, activeIcon }) {
  // getting the page name from the store
  // and the function to change the page name
  const changePageName = usePageStore((state) => state.changePageName);
  const pageName = usePageStore((state) => state.pageName);

  //getting the navigate function from react-router-dom
  const navigate = useNavigate();

  // function to handle the click event
  const handleClick = () => {
    document.title = text;
    changePageName(text);
    console.log(text);
    navigate(`${link}`);
  };
  // function to change the color of the background
  const backgroundColor = () => {
    if (pageName == text) {
      return primary;
    }
    return "";
  };
  // function to change the color of the background
  const background = () => {
    if (pageName == text) {
      return primaryGradient;
    }
    return "";
  };
  // function to change the color of the text
  const textColor = () => {
    if (pageName == text) {
      return "white";
    }
    return primaryLight;
  };

  // function to change the gradient of the text
  const textGradient = () => {
    if (pageName == text) {
      return "white";
    }
    return primaryGradient;
  };

  // function to change the color of the background on hover
  const hoverBackGround = () => {
    if (pageName == text) {
      return primary;
    }
    return "rgba(255, 255, 255, 0.1)";
  };

  // function to change the border of the button
  const borderLine = () => {
    if (pageName == text) {
      return 0;
    }
    return 0;
  };

  return (
    // returning the list item component
    <ListItem key={text} disablePadding sx={{ my: 2 }}>
      <ListItemButton
        sx={{
          "height": "5vmin",
          "borderTopRightRadius": 50,
          "borderTopLeftRadius": 50,
          "borderBottomLeftRadius": 50,
          "borderBottomRightRadius": 50,
          "backgroundColor": backgroundColor,
          "border": 0,
          "borderColor": primary,
          "background": background,
          "&:hover": {
            backgroundColor: hoverBackGround,
          },
        }}
        onClick={handleClick}
      >
        {/* returning the list item icon component */}
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
            {/* returning the list item text component */}
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
