import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { primary, primaryDark } from "../../theme/Colors";
import useSideBarStore from "../stores/SideBarStore";

export default function DrawerItem(props) {
  const text = props.text;
  const icon = props.icon;
  const link = props.link;
  const pageTitle = props.pageTitle != null ? props.pageTitle : "";
  let open = useSideBarStore((state)=> state.open)

  const navigate = useNavigate();
  const handleClick = () => {
    sessionStorage.setItem("pageName", text);
    if (props.text != null) {
      document.title = text;
    }
    navigate(`${link}`);
  };

  const backGround = () => {
    const pageName = sessionStorage.getItem("pageName");
    if (pageName == text) {
      return primary;
    }
    return "";
  };
  const textColor = () => {
    const pageName = sessionStorage.getItem("pageName");
    if (pageName == text) {
      return primaryDark;
    }
    return primary;
  };

  const hoverBackGround = () => {
    const pageName = sessionStorage.getItem("pageName");
    if (pageName == text) {
      return primary;
    }
    return "rgba(255, 255, 255, 0.1)";
  };

  const borderLine = () => {
    const pageName = sessionStorage.getItem("pageName");
    if (pageName == text) {
      return 0;
    }
    return 0;
  };
  const borderRadius = () => {
    const pageName = sessionStorage.getItem("pageName");
    if (pageName == text) {
      return 50;
    }
    return 50;
  };

  return (
    <ListItem key={text} disablePadding sx={{ my: 1 }}>
      <ListItemButton
        sx={{
          height: "4vmin",
          borderTopRightRadius: borderRadius,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: borderRadius,
          backgroundColor: backGround,
          borderLeft: borderLine,
          borderBottom: borderLine,
          borderTop: borderLine,
          borderColor: primary,
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
