import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { primary, primaryDark, primaryLight } from "../../theme/Colors";
import usePageStore from "../stores/PageStore";
import useSideBarStore from "../stores/SideBarStore";

export default function DrawerItem(props) {
  const text = props.text;
  const icon = props.icon;
  const link = props.link;
  const pageTitle = props.pageTitle != null ? props.pageTitle : "";
  let open = useSideBarStore((state) => state.open);
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
      return primaryLight;
    }
    return "";
  };
  const textColor = () => {
    if (pageName == text) {
      return primaryDark;
    }
    return primaryLight;
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

  return (
    <ListItem key={text} disablePadding sx={{ my: 2 }}>
      <ListItemButton
        sx={{
          "height": "5vmin",
          "borderTopRightRadius": borderRadius,
          "borderTopLeftRadius": borderRadius,
          "borderBottomLeftRadius": borderRadius,
          "borderBottomRightRadius": borderRadius,
          "backgroundColor": backGround,
          "borderLeft": borderLine,
          "borderBottom": borderLine,
          "borderTop": borderLine,
          "borderColor": primary,
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
export function DrawerItemRight(props) {
  const text = props.text;
  const icon = props.icon;
  const link = props.link;
  const pageTitle = props.pageTitle != null ? props.pageTitle : "";
  let open = useSideBarStore((state) => state.open);
  let pageName = usePageStore((state) => state.pageName);
  let changePageName = usePageStore((state) => state.changePageName);

  const navigate = useNavigate();
  const handleClick = () => {
    sessionStorage.setItem("pageName", text);
    if (props.text != null) {
      document.title = text;
      changePageName(text)
    }

    navigate(`${link}`);
  };

  const backGround = () => {
    if (pageName == text) {
      return primaryLight;
    }
    return "";
  };
  const textColor = () => {
    if (pageName == text) {
      return primaryDark;
    }
    return primaryLight;
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

  return (
    <ListItem key={text} disablePadding sx={{ my: 2 }}>
      <ListItemButton
        sx={{
          "height": "5vmin",
          "borderTopRightRadius": borderRadius,
          "borderTopLeftRadius": borderRadius,
          "borderBottomLeftRadius": borderRadius,
          "borderBottomRightRadius": borderRadius,
          "backgroundColor": backGround,
          "borderLeft": borderLine,
          "borderBottom": borderLine,
          "borderTop": borderLine,
          "borderColor": primary,
          "&:hover": {
            backgroundColor: hoverBackGround,
          },
        }}
        onClick={handleClick}
      >
        <ListItemText sx={{ color: textColor, textAlign: "center" }}>{text}</ListItemText>

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
      </ListItemButton>
    </ListItem>
  );
}
