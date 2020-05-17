import React from 'react';
import LoginInput from './LoginInput';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './LoginBlock.css';
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root:{
        height : "100%",
        width : "100%",
    },
    gridelem:{
        marginTop: "20px",
        marginBottom: "20px",
    },
    inputelem: {
        width : "70%",
        display : "flex",
        alignContent : "center",
        alignSelf : "center",
        alignItems : "center",
        justifyContent : "center",
    },
}));

export default function LoginBlock() {
  const classes = useStyles();

  return (
    <div 
        className= {classes.root}
        style={{
            marginTop:"10%",
            display:"flex",
            flexDirection:"column",
        }}>
            <Grid 
                container
                className = {classes.gridelem}
                direction="column"
                spacing={2}
                alignItems="center"
                >
                <Grid item className = {classes.inputelem}>
                    <LoginInput idorpass = "ID" ></LoginInput>
                </Grid>
                <Grid item className = {classes.inputelem}>
                    <LoginInput idorpass = "PASS"></LoginInput>
                </Grid>
                <Grid item className = {classes.inputelem}>
                    <Button 
                        className = {classes.button} 
                        variant="contained" 
                        color="secondary"
                        style={{ width: "100%" }}
                        >
                        LOG IN
                    </Button>
                </Grid>
            </Grid>
    </div>

  );
}