// Description: This component is used to create a button for the navbar menu
import { Button, MenuItem } from "@mui/material";
import { height, width } from "@mui/system";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { primaryLight } from "../../theme/Colors";
import { borderRadiuosButton } from "../../theme/Themes";
import usePageStore from "../stores/PageStore";

function NavbarMenuButton(props, { ...rest }) {
  // getting props from the parent component
  const name = props.name;
  const link = props.link;
  // getting the navigate function from react-router-dom
  const navigate = useNavigate();
  // handling the click event with useCallback to prevent unnecessary rerenders
  const handleOnClick = useCallback(() => navigate(`${link}`, { replace: true }), [navigate]);
  // getting the page name from the page store
  let changePageName = usePageStore((state) => state.changePageName);
  const pageName = usePageStore((state) => state.pageName);


  // function to handle the click event
  const handleClick = () => {
    if (!link == "") {
      if (link == "/") {
        handleOnClick();
        console.warn("signOut");
      } else {
        navigate(`${link}`);
        changePageName(name);
      }
    } else {
      props.fun();
    }
  };
  // returning the button component
  return (
    <MenuItem>
      <Button
        onClick={handleClick}
        onClickCapture={handleClick}
        fullWidth
        {...rest}
        sx={{
          "color": primaryLight,
          "width": props.width,
          "height": props.height,
          "borderRadius": borderRadiuosButton,
          "fontWeight": "bold",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        {name}
      </Button>
    </MenuItem>
  );
}
export default NavbarMenuButton;
