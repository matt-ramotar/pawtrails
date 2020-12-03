import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { setAccountBoolean } from '../store/auth';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import UserButton from '../components/UserButton';
import LoginContainer from './LoginContainer';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 10,
  },
}));

export default function AuthContainer() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Box className={classes.root}>
      {isLoggedIn ? (
        <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
          <UserButton /> <LogoutButton />
        </Box>
      ) : (
        <LoginContainer />
      )}
    </Box>
  );
}
