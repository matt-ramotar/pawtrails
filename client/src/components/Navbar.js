import React from 'react';
import { AppBar, Box, Button, Typography, Menu } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { sidebarWidth } from './Sidebar';
import AuthContainer from '../containers/AuthContainer';

const useStyles = makeStyles(theme => ({
  root: {
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
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position='fixed' className={classes.root}>
      <AuthContainer />
    </AppBar>
  );
}
