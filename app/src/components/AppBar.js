import LogoutButtonContainer from './LogoutButton';
import LoginSignupContainer from './LoginSignupContainer';

import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Box } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#414141',
  },
  title: {
    flexGrow: 1,
    color: '#414141',
    fontSize: '14px',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const loggedOut = useSelector(state => !state.auth.jti);
  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.root} display='flex' flexDirection='row'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Link href='/'>
            <Typography variant='h6' className={classes.title}>
              Paw Trails
            </Typography>
          </Link>
          <Box display='flex' flexDirection='row'>
            {!loggedOut ? <LogoutButtonContainer /> : <LoginSignupContainer />}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
