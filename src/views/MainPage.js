import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavBar from '../components/BottomNavBar'
import TopNavBar from '../components/TopNavBar';
import Navbar from 'react-bootstrap/Navbar'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  TopNavBar:{
      position: "fixed",
      top: "0",
      width: "100%",
  }
}));

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
      <div>
          <TopNavBar />
          <BottomNavBar/>
      </div>
    
  );
}
