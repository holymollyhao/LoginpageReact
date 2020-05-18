import React from 'react';
import { TextField, colors } from "@material-ui/core";

const LoginInputTemplate = ({idorpass}) => {
  return (
    <div style={{ width: "100%" }}>
      <TextField 
        label={idorpass} 
        color= "primary"
        // variant="outlined" 
        fullWidth
        size = "small"/>
    </div>
  );

}

export default (LoginInputTemplate);