import * as React from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";
import { Box } from "@mui/system";
import { borderRadiuosTextField } from "../../theme/Themes";


function SearchInput(props,{id, label, type,idNum,autoComplete,disabled,fontSize,textColor,backgroundColor,hoverColor,position,bottom,right,top,left,margin,text,value,helperText,error,size, width, height,getText, ...rest }) {
 

  const changeData = (data) => {
   getText(data);
  };
  return (
    <Autocomplete
      disablePortal
      id='combo-box-demo'
      options={items}
      onChange={(event, value) => changeData(value)}
      sx={{ boxShadow: 0, height: 45, borderRadius: borderRadiuosTextField }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          sx={{ boxShadow: 0, height: 45, borderRadius: borderRadiuosTextField }}
          InputProps={{...params.InputProps, sx:{height:45,borderRadius:borderRadiuosTextField}}}
          InputLabelProps={{
            size: size,
          }}
        />
      )}
    />
  );
}
export default SearchInput
