import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Menu, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { setAccountBoolean } from '../store/auth';
import LoginForm from '../forms/LoginForm';
import SignupForm from '../forms/SignupForm';
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 0,
  },
  custom: {
    backgroundColor: '#15212B',
  },
}));

export default function LoginContainer() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const [anchorEl, setAnchorEl] = useState(null);
  const hasAccount = useSelector(state => state.auth.hasAccount);

  const handleOpenMenuClick = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  useEffect(() => {
    if (isLoggedIn) handleClose();
  }, [isLoggedIn]);

  return (
    <Box className={classes.root}>
      <Button onClick={handleOpenMenuClick}>
        <i class='fas fa-sign-in-alt fa-2x' style={{ color: '#15212B' }}></i>
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{ paper: classes.custom }}
        elevation={1}>
        {hasAccount ? <LoginForm /> : <SignupForm />}
      </Menu>
    </Box>
  );
}
