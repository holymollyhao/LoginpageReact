import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const theme = createMuiTheme({
    palette: {
      primary: { main: '#ff8000' },
      secondary: { main: 'rgba(255,200,55,1)' },
    }
  });

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    scrollBehavior : false,
    // width: '100%',
    position: 'fixed',
    // bottom: 0,
  },
  center: {
    flex: 1.5,
  },
  toolbarelem: {
    flex: 1,
  },
  addphoto: {
    position: 'absolute',
    zIndex: 1,
    top: -25,
    left: 0,
    right: 0,
    margin: '0 auto',
    // color: "rgba(255,200,55,1)",
  },
  toolbar:{
    flex: "1",
    flexDirection : "row",
    justifyContent : "space-around",
    alignItems: "stretch",
    // background: "#e67300",
  }
}));

export default function BottomNavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <MuiThemeProvider theme={theme}>
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar className= {classes.toolbar}>
                <IconButton color = "primary"  className= {classes.toolbarelem} color="inherit">
                    <HomeIcon />
                </IconButton>
                <IconButton color = "primary" className= {classes.toolbarelem} color="inherit">
                    <SearchIcon />
                </IconButton>
            <Fab color = "secondary" aria-label="add" className={classes.addphoto}>
                <AddAPhotoIcon />
            </Fab>
            <div className= {classes.center} />
            <IconButton  color = "primary" className= {classes.toolbarelem} color="inherit">
                <FavoriteIcon />
            </IconButton>
            <IconButton color = "primary" className= {classes.toolbarelem} color="inherit">
                <AccountCircleIcon />
            </IconButton>
            </Toolbar>
        </AppBar>
      </MuiThemeProvider>
  );
}
