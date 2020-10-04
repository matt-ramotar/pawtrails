import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { logout } from '../store/auth';

const useStyles = makeStyles(theme => ({
  logoutButton: {
    backgroundColor: '#414141',
    color: 'white',
  },
}));

const LogoutButton = ({ loggedOut, logoutDispatcher }) => {
  const classes = useStyles();

  const handleClick = () => {
    console.log('logging out');
    logoutDispatcher();
  };

  // if (loggedOut) {
  //   return <Redirect to='/login' />;
  // }

  return (
    <div id='logout-button-holder'>
      <Button
        color='primary'
        className={classes.logoutButton}
        variant='raised'
        onClick={handleClick}>
        Logout
      </Button>
    </div>
  );
};

const LogoutButtonContainer = () => {
  const dispatch = useDispatch();
  const logoutDispatcher = () => dispatch(logout());
  const loggedOut = useSelector(state => !state.auth.jti);

  return <LogoutButton loggedOut={loggedOut} logoutDispatcher={logoutDispatcher} />;
};

export default LogoutButtonContainer;
