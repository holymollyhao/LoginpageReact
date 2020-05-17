import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LoginBlock from '../components/LoginBlock'
import Divider from '@material-ui/core/Divider'
import OtherLogins from '../components/OtherLogins'
import DividerBlock from '../components/DividerBlock'

const useStyles = makeStyles((theme) => ({
    root:{
        height : "100%",
        width : "100%",
    },
}));

export default function LoginPage() {
  const classes = useStyles();

  return (
      <div>
        <LoginBlock/>
        <DividerBlock/>
        <OtherLogins/>
      </div>
  );
}