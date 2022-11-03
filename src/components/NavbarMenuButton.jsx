import { Button, MenuItem } from "@mui/material";
import { height, width } from "@mui/system";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { borderRadiuosButton } from "../../theme/Themes";

function NavbarMenuButton(props,{...rest}) {
  const name = props.name;
  const link = props.link;
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate(`${link}`, { replace: true }),
    [navigate]
  );



  const handleClick = () => {
    if (!link == "") {
      if (link == "/") {
      }
      handleOnClick();
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
          color: "#242424",
          display: "block",
          width:props.width,
          height:props.height,
          borderRadius: borderRadiuosButton,
          fontSize: 14,
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