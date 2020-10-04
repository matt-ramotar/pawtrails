import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { logout } from '../store/auth';

const useStyles = makeStyles(theme => ({
  buttons: {},
}));

const handleClick = e => {
  e.preventDefault();
  return <Redirect to={`/${e.target.name}`} />;
};

export default function LoginSignupContainer() {
  const classes = useStyles();

  return (
    <div className='buttons' spacing={5}>
      <Button
        name='signup'
        color='primary'
        className={classes.logoutButton}
        variant='raised'
        href='/signup'
        style={{ backgroundColor: '#219AD8', color: 'white' }}>
        Sign Up
      </Button>
      <Button
        name='login'
        color='primary'
        className={classes.logoutButton}
        variant='raised'
        href='/login'
        style={{ backgroundColor: '#219AD8', color: 'white' }}>
        Log In
      </Button>
    </div>
  );
}
