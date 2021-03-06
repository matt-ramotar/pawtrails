import React, { useEffect, useMemo, useState } from 'react';
import { Box, Button, Menu, Link, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import LoginForm from '../forms/LoginForm';

const useStyles = makeStyles(theme => ({
  custom: {
    backgroundColor: '#15212B',
  },

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
    width: 80,
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
export default function LoginButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  const user = useSelector(state => state.auth.user);

  const handleClick = event => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const updateUsername = event => {
    setUsername(event.target.value);
  };
  const updatePassword = event => setPassword(event.target.value);

  const logIn = () => {
    console.log(username, password);
    const loggedIn = dispatch(login(username, password));
    if (loggedIn) {
      setLoggedIn(true);

      handleClose();
    }
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
      <Button onClick={handleClick}>
        <i class='fas fa-sign-in-alt fa-2x' style={{ color: '#15212B' }}></i>
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{ paper: classes.custom }}
        elevation={1}>
        <LoginForm />
      </Menu>
    </Box>
  );
}
