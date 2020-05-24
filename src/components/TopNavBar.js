import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  location: {
    fontFamily: "nanum",
    fontSize: "18px"
  },
  toolbar:{
    flex: "1",
    flexDirection : "row",
    justifyContent : "center",
    alignItems: "center",
    // background: "#e67300",
  },
  button:{
    flex:"1",
    flexDirection: "row",
  },
}));

export default function TopNavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
            <Button disableRipple="true" className={classes.button}>
                <Typography className ={classes.location}>대전 유성구 어은로52번길 7</Typography>
                <ExpandMoreIcon/>
            </Button>
         
          {/* <div>wowo</div> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}