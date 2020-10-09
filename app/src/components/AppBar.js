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
import LogoImg from '../vector60-3765-01.jpg';

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
    fontSize: '16px',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const loggedOut = useSelector(state => !state.auth.jti);
  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.root}>
        <Toolbar>
          <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Box>
              <IconButton
                edge='start'
                className={classes.menuButton}
                color='inherit'
                aria-label='menu'>
                <MenuIcon />
              </IconButton>
            </Box>

            <Box>
              <Link href='/' style={{ textDecoration: 'none' }}>
                <img src={LogoImg} height='36px' width='36px' style={{ 'margin-bottom': '-8px' }} />
                <span className={classes.title}>Paw Trails</span>
              </Link>
            </Box>

            <Box display='flex' flexDirection='row'>
              {!loggedOut ? <LogoutButtonContainer /> : <LoginSignupContainer />}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
