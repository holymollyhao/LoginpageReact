import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root:{
        height : "100%",
        width : "100%",
    },
    gridelem:{
        alignSelf: "center",
        width: "80%",

    },
    inputelem: {
        alignSelf:"center",
        alignContent:"center",
        alignItems: "center",
        width : "70%",
    },
}));

export default function DividerBlock() {
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
            <Grid item xs={5} className = {classes.inputelem}>
                <Divider/>
            </Grid>
            <Grid item xs={2} className = {classes.inputelem}>
                <Typography 
                    color="textSecondary"
                    style={{ textAlign: "center" }}
                    > or
                </Typography>
            </Grid>
            <Grid item xs={5} className = {classes.inputelem}>
                <Divider/>
            </Grid>
        </Grid>
    </div>

  );
}