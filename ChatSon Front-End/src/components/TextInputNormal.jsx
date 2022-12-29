// Description: This is a text input component that is used in the application
import * as React from "react";
import TextField from "@mui/material/TextField";
import { borderRadiuosTextField } from "../../theme/Themes";
import AutoDirectionProvider from "react-with-direction/dist/AutoDirectionProvider";

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
  const [sample,setSample]= React.useState('')
  const changeData = (data) => {
    setSample(... data)
    getText(data);
  };

  return (
    <AutoDirectionProvider text={sample}>
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
        dir='inherit'
        sx={{
          boxShadow: 0,
          borderRadius: borderRadius != null ? borderRadius : borderRadiuosTextField,
          height: height,
        }}
        InputProps={{
          dir: "inherit",
          sx: { borderRadius: borderRadius != null ? borderRadius : borderRadiuosTextField },
          height: height,
        }}
        {...rest}
        InputLabelProps={{
          size: size,
        }}
      />
    </AutoDirectionProvider>
  );
}

export default TextInputNormal;
