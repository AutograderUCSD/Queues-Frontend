import React from 'react';
import api from '../conf';
import { TextField, Typography, Button, Link } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { useState } from 'react';
import OurTheme from '../style/Theme';
import Styles from '../style/LoginStyle';

// Handling a log in occurence
function eventHandleLogin(email:string, password:string) {
  console.log(email);
  console.log(password);
  let apiBaseUrl : string = '/api/users/login';
  let payload : object = {
    "email" : email,
    "password" : password,
  };
  api.post(apiBaseUrl,payload) 
    .then ( function (response) {
      console.log(response);
      console.log("Login successfull");
      // Somehow render the queue page here
    })
    .catch(function (error) {
      if (error.response.data === 400) {
        // Add alert so they know it was wrong combo
        console.log("Username password do not match");
      } else {
        console.log("Some other error occurred");
      }
      console.log(error);
      });
}

export default function Login(props:any) {
  const classes = Styles.useStyles();
  const theme = OurTheme.theme;
  // Look into more - to save values from text fields
  const [password, setPass] = useState('');
  const [email, setEmail] = useState('');

  // What is actually being rendered
  return (
    <div>
      <h1 className={classes.title}>autograder.</h1>
      <ThemeProvider theme={theme}>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField id="outlined-basic" color="primary" label="Email" variant="outlined" 
          onChange = {(event) => setEmail(event.target.value)}/>
        </form>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField id="outlined-basic" color="primary" label="Password" type="password" autoComplete="current-password" variant="outlined" 
          onChange = {(event) => setPass(event.target.value)}/>
        </form>
        <div className={classes.wrapper}>
          <Button variant="outlined" color="primary" className={classes.button} onClick={(event) => eventHandleLogin(email, password)}>
            Login
          </Button>
        </div>
        <Typography align='center'>
          <Link href="instructions"> First Time? </Link>
          <br/>
          <Link href="reset"> Forgot Password? </Link>
        </Typography>
      </ThemeProvider>
    </div>
  );
}