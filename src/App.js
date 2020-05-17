import React from 'react';
import LoginInput from './components/LoginInput';
import LoginDivider from './components/LoginDivider'
import { makeStyles } from '@material-ui/core/styles';
import LoginPage from './views/LoginPage'
import { Grid, Box } from '@material-ui/core';
// import logo from './logo.svg';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue"
  },
}));

export default function App() {
  const classes = useStyles();

  return (
      <LoginPage/>
  );
}

