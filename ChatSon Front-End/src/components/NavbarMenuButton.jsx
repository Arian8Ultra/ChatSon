import { Button, MenuItem } from "@mui/material";
import { height, width } from "@mui/system";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { primaryLight } from "../../theme/Colors";
import { borderRadiuosButton } from "../../theme/Themes";
import usePageStore from "../stores/PageStore";

function NavbarMenuButton(props,{...rest}) {
  const name = props.name;
  const link = props.link;
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate(`${link}`, { replace: true }),
    [navigate]
  );
  let changePageName = usePageStore((state) => state.changePageName);
  const pageName = usePageStore((state) => state.pageName);


  const handleClick = () => {
    if (!link == "") {
      if (link == "/") {
        handleOnClick()
        console.warn('signOut');
      }
      else{
        navigate(`${link}`);
        changePageName(name)
      }
    } else {
      props.fun();
    }
  };

  return (
    <MenuItem>
      <Button
        onClick={handleClick}
        onClickCapture={handleClick}
        fullWidth
        {...rest}
        sx={{
          color: primaryLight,
          width:props.width,
          height:props.height,
          borderRadius: borderRadiuosButton,
          fontWeight:'bold',
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.2)",
          },
        }}
      >
        {name}
      </Button>
    </MenuItem>
  );
}
 export default NavbarMenuButton