import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LoginBlock from '../components/LoginBlock'
import Divider from '@material-ui/core/Divider'
import OtherLogins from '../components/OtherLogins'
import DividerBlock from '../components/DividerBlock'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main : "#ff597d",
  //   },
  // },
  typography: {
    fontFamily: [
      'Nanum',
    ].join(','),
  },
})

const useStyles = makeStyles((theme) => ({
    root:{
        height : "100%",
        width : "100%",
    },
    logo:{
      paddingTop: "45%",
      textAlign : "center",
      fontFamily: "CursiveLogo",
      fontSize: "95px",
      color: "#f8ffc3",
    }
    
}));

export default function LoginPage() {
  const classes = useStyles();

  return (
      <div>
        <div className = {classes.logo}>FoodHistory</div>
        <MuiThemeProvider theme={theme}>
          <LoginBlock/>
          <DividerBlock/>
          <OtherLogins/>
        </MuiThemeProvider>
      </div>
  );
}