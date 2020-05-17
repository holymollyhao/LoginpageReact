import React from 'react';
import { TextField, colors } from "@material-ui/core";


const LoginInputTemplate = ({idorpass}) => {

  return (
    <div style={{ width: "100%" }}>
      <TextField 
        label={idorpass} 
        variant="outlined" 
        fullWidth
        className="login-input"/>
    </div>
  );

}

export default (LoginInputTemplate);