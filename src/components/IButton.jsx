import {IconButton} from "@mui/material";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import {borderRadiuosTextField} from "../../theme/Themes";
import {background} from "@chakra-ui/react";

export default function IButton(props) {
    const text = props.text != null ? props.text : "LinkButton";
    const link = props.link != null ? props.link : "";
    const pageTitle = props.pageTitle != null ? props.pageTitle : "";
    const disabled = props.disabled != null ? props.disabled : false;
    const fontSize = props.fontSize != null ? props.fontSize : 16;
    const height = props.height != null ? props.height : {};
    const width = props.width != null ? props.width : {};
    const minWidth = props.minWidth != null ? props.minWidth : {};
    const color = props.textColor != null ? props.textColor : 'default';
    const position = props.position != null ? props.position : {};
    const bottom = props.bottom != null ? props.bottom : {};
    const right = props.right != null ? props.right : {};
    const top = props.top != null ? props.top : {};
    const left = props.left != null ? props.left : {};
    const margin = props.margin != null ? props.margin : {};
    const mt = props.mt != null ? props.mt : {};
    const ml = props.ml != null ? props.ml : {};
    const mr = props.mr != null ? props.mr : {};
    const mb = props.mb != null ? props.mb : {};
    const padding = props.padding != null ? props.padding : {};
    const icon = props.icon != null ? props.icon : "";
    const borderRadius = props.borderRadius != null ? props.borderRadius : borderRadiuosTextField;
    const boxShadow = props.boxShadow != null ? props.boxShadow : {};
    const hoverColor = props.hoverColor != null ? props.hoverColor : {};
    const backgroundColor = props.backgroundColor != null ? props.backgroundColor : {};

    function fn() {
        return props.fun();
    }

    const navigate = useNavigate();

    const handleClick = () => {
        if (props.fun != null) {
            fn();
        }
        if (props.pageTitle != null) {
            console.log(pageTitle);
            document.title = pageTitle;
        }
        if (props.link != null) {
            navigate(`${link}`);
        }
    };

    return (
        <IconButton
            color={color}
            sx={{
                backgroundColor: backgroundColor,
                "width": width,
                "height": height,
                "borderRadius": borderRadius,
                "bottom": bottom,
                "left": left,
                "right": right,
                "top": top,
                "m": margin,
                "mt": mt,
                "mr": mr,
                "ml": ml,
                "mb": mb,
                "minWidth": minWidth,
                "padding": padding,
                "&:hover": {
                    backgroundColor: hoverColor,
                },
            }}
            onClick={handleClick}
            disabled={disabled}
        >
            {icon}
        </IconButton>
    );
}
