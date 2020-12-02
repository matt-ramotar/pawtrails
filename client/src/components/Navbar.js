import React from 'react';
import { AppBar, Box, Button, Typography, Menu } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { sidebarWidth } from './Sidebar';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import UserButton from './UserButton';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: 'transparent',
    width: `calc(100% - ${sidebarWidth}px)`,
    height: '81px',
    marginLeft: sidebarWidth,
    boxShadow: 'none',
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  avatarBox: {
    marginTop: 15,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const loggedIn = useSelector(state => state.auth.user.loggedIn) || false;

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Box className={classes.avatarBox}>
        {loggedIn ? (
          <Box>
            <UserButton /> <LogoutButton />{' '}
          </Box>
        ) : (
          <LoginButton />
        )}
      </Box>
    </AppBar>
  );
}
