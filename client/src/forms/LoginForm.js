import React, { useEffect, useMemo, useState } from 'react';
import { Box, Button, Menu, Link, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { login, setAccountBoolean } from '../store/auth';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },

  greeting: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  emoji: {
    margin: 5,
  },
  textField: {
    width: 80,
    margin: 10,
    color: '#ffffff',
  },
  input: {
    fontFamily: 'Roboto',
    fontSize: '0.75rem',
    color: '#ffffff',
    backgroundColor: '#192834',
    borderRadius: 5,
    padding: 5,
  },
  loginButton: {
    backgroundColor: '#1D72E7',
    width: 100,
    height: 30,
  },
  noAccountBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 5,
  },
  noAccountText: {
    fontFamily: 'Roboto',
    color: '#ffffff',
  },
  signUpSpan: {
    fontWeight: 'bold',
    color: '#1D72E7',
  },
}));
export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();

  const user = useSelector(state => state.auth.user);

  const handleNoAccountClick = () => dispatch(setAccountBoolean(false));

  const updateUsername = event => {
    setUsername(event.target.value);
  };
  const updatePassword = event => setPassword(event.target.value);

  const logIn = () => {
    dispatch(login(username, password));
  };

  const handleKeyDown = event => {
    console.log(event.key);
    if (event.key === 'Tab') {
      event.stopPropagation();
    } else {
    }
  };

  return (
    <Box>
      <Box className={classes.form}>
        <Typography variant='h4' className={classes.greeting}>
          <span className={classes.emoji}>👋</span>
        </Typography>
        <TextField
          placeholder='Username'
          value={username}
          onKeyDown={handleKeyDown}
          onChange={updateUsername}
          className={classes.textField}
          disableUnderline={true}
          InputProps={{ tabIndex: '1', disableUnderline: true, classes: { input: classes.input } }}></TextField>
        <TextField
          placeholder='Password'
          type='password'
          value={password}
          onKeyDown={handleKeyDown}
          onChange={updatePassword}
          className={classes.textField}
          InputProps={{ tabIndex: '2', disableUnderline: true, classes: { input: classes.input } }}></TextField>
        <Button tabIndex='3' onClick={logIn} className={classes.loginButton} variant='small'>
          <Typography variant='caption' style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: '#ffffff' }}>
            Log In
          </Typography>
        </Button>
      </Box>
      <Box className={classes.noAccountBox}>
        <Typography variant='caption' className={classes.noAccountText}>
          No account?{' '}
          <span>
            <Link className={classes.signUpSpan} onClick={handleNoAccountClick}>
              Sign Up
            </Link>
          </span>
        </Typography>
      </Box>
    </Box>
  );
}
