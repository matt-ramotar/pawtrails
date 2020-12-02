import React, { useEffect, useMemo, useState } from 'react';
import { Box, Button, Menu, Link, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { signup, setAccountBoolean } from '../store/auth';

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
export default function SignupForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const classes = useStyles();
  const dispatch = useDispatch();

  const user = useSelector(state => state.auth.user);

  const handleHasAccountClick = () => dispatch(setAccountBoolean(true));

  const handleSignup = () => dispatch(signup(firstName, lastName, email, password, confirmPassword));

  const updatePassword = event => setPassword(event.target.value);

  const updateConfirmPassword = event => setConfirmPassword(event.target.value);

  const updateFirstName = event => setFirstName(event.target.value);
  const updateLastName = event => setLastName(event.target.value);
  const updateEmail = event => setEmail(event.target.value);

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
          placeholder='First'
          value={firstName}
          onKeyDown={handleKeyDown}
          onChange={updateFirstName}
          className={classes.textField}
          disableUnderline={true}
          InputProps={{ tabIndex: '1', disableUnderline: true, classes: { input: classes.input } }}></TextField>

        <TextField
          placeholder='Last'
          value={lastName}
          onKeyDown={handleKeyDown}
          onChange={updateLastName}
          className={classes.textField}
          disableUnderline={true}
          InputProps={{ tabIndex: '2', disableUnderline: true, classes: { input: classes.input } }}></TextField>

        <TextField
          placeholder='Email'
          value={email}
          onKeyDown={handleKeyDown}
          onChange={updateEmail}
          className={classes.textField}
          disableUnderline={true}
          InputProps={{ tabIndex: '3', disableUnderline: true, classes: { input: classes.input } }}></TextField>

        <TextField
          placeholder='Password'
          type='password'
          value={password}
          onKeyDown={handleKeyDown}
          onChange={updatePassword}
          className={classes.textField}
          InputProps={{ tabIndex: '4', disableUnderline: true, classes: { input: classes.input } }}></TextField>

        <TextField
          placeholder='Confirm'
          type='password'
          value={confirmPassword}
          onKeyDown={handleKeyDown}
          onChange={updateConfirmPassword}
          className={classes.textField}
          InputProps={{ tabIndex: '5', disableUnderline: true, classes: { input: classes.input } }}></TextField>

        <Button tabIndex='6' onClick={handleSignup} className={classes.loginButton} variant='small'>
          <Typography variant='caption' style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: '#ffffff' }}>
            Sign Up
          </Typography>
        </Button>
      </Box>
      <Box className={classes.noAccountBox}>
        <Typography variant='caption' className={classes.noAccountText}>
          Already have an account?{' '}
          <span>
            <Link className={classes.signUpSpan} onClick={handleHasAccountClick}>
              Log In
            </Link>
          </span>
        </Typography>
      </Box>
    </Box>
  );
}
