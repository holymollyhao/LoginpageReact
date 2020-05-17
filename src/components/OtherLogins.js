import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import { IconButton } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root:{
        height : "100%",
        width : "100%",
    },
    gridelem:{
        // marginTop: "20px",
        // marginBottom: "20px",
        alignSelf: "center",
        width: "50%",

    },
    inputelem: {
        width : "70%",
    },
}));

export default function OtherLogins() {
  const classes = useStyles();

  return (
    <div 
        className= {classes.root}
        style={{
            marginTop: "10px",
            display:"flex",
            flexDirection:"column",
            alignContent:"center",
        }}>
        <Grid 
            container
            className = {classes.gridelem}
            direction="row"
            spacing={2}
            alignItems="center"
            >
            <Grid item xs={4} className = {classes.inputelem}>
                <IconButton aria-label="facebook">
                    <FacebookIcon />
                </IconButton>
            </Grid>
            <Grid item xs={4} className = {classes.inputelem}>
                <IconButton aria-label="twitter">
                    <TwitterIcon />
                </IconButton>
            </Grid>
            <Grid item xs={4} className = {classes.inputelem}>
                <IconButton aria-label="email">
                    <EmailIcon />
                </IconButton>
            </Grid>
        </Grid>
    </div>

  );
}