// Description: Upload Button Component that can be used to upload files to the server
import BackupRoundedIcon from '@mui/icons-material/BackupRounded';
import { LoadingButton } from '@mui/lab';
import { Button, CircularProgress, Typography } from "@mui/material";
import * as React from "react";
import { primary, primaryDark, primaryLight } from "../../theme/Colors";
import { borderRadiuosButton } from "../../theme/Themes";


export default function UploadButton({text,disabled,fontSize,height,width,textColor,backgroundColor,hoverColor,position,bottom,right,top,left,margin,fullWidth,icon,borderRadius,color}) {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [AcceptBackgroundColor, setAcceptBackgroundColor] = React.useState(backgroundColor != null ? backgroundColor : primary);
  const [AcceptTextColor, setAcceptTextColor] = React.useState(textColor != null ? textColor : 'black');
  const [Response, setResponse] = React.useState();
  const [fileName, setFileName] = React.useState();
  const [loading, setLoading] = React.useState();

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
    const data = new FormData();
    data.append("file", event.target.files);
    console.log(event.target.files);
    setFileName(event.target.files[0].name)
    setLoading(true)
  };


  return (
    <LoadingButton
      id={"upload-button-" + text != null ? text : ""}
      variant='contained'
      component='label'
      fullWidth={fullWidth != null ? fullWidth : false}
      startIcon={icon != null ? icon : <BackupRoundedIcon />}
      loading={loading}
      sx={{
        width: width != null ? width : {},
        height: height != null ? height : {},
        borderRadius: borderRadius != null ? borderRadius : borderRadiuosButton,
        color: AcceptTextColor,
        backgroundColor: AcceptBackgroundColor,
        fontSize: fontSize != null ? fontSize : 16,
        position: position != null ? position : {},
        bottom: bottom != null ? bottom : {},
        left: left != null ? left : {},
        right: right != null ? right : {},
        top: top != null ? top : {},
        m: margin != null ? margin : {},
        "&:hover": {
          backgroundColor: hoverColor != null ? hoverColor : {},
          color: color != null ? color : {},
        },
      }}
      disabled={disabled != null ? disabled : false}
    >
      {text != null ? text : ""}
      <input type='file' multiple onChange={handleFileSelect} hidden />
      <Typography fontSize={10} margin={1}>
        {fileName}
      </Typography>
    </LoadingButton>
  );
}