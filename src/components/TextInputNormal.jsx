import * as React from "react";
import TextField from "@mui/material/TextField";
import { borderRadiuosTextField } from "../../theme/Themes";

function TextInputNormal({
  id,
  label,
  type,
  idNum,
  autoComplete,
  disabled,
  fontSize,
  textColor,
  backgroundColor,
  hoverColor,
  position,
  bottom,
  right,
  top,
  left,
  margin,
  text,
  value,
  helperText,
  error,
  size,
  width,
  height,
  getText,
  multiline,
  rows,
  borderRadius,
  ...rest
}) {
  const changeData = (data) => {
    getText(data);
  };

  return (
    <TextField
      onChange={(newValue) => changeData(newValue.target.value)}
      name={id}
      label={label}
      fullWidth
      defaultValue={value}
      autoComplete={autoComplete}
      variant='outlined'
      type={type}
      disabled={disabled}
      error={error}
      helperText={helperText}
      multiline={multiline}
      rows={rows}
      sx={{
        boxShadow: 0,
        borderRadius: borderRadius != null ? borderRadius : borderRadiuosTextField,
        height:height
      }}
      InputProps={{
        sx: { borderRadius: borderRadius != null ? borderRadius : borderRadiuosTextField },
        height:height
      }}
      {...rest}
      InputLabelProps={{
        size: size,
      }}
    />
  );
}

export default TextInputNormal;
