import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Typography } from '@material-ui/core';
import { logout } from '../store/auth';

export default function LogoutButton() {
  const [loggedIn, setLoggedIn] = useState(true);

  const dispatch = useDispatch();

  const handleClick = async () => {
    const loggedOut = await dispatch(logout());
    if (loggedOut) setLoggedIn(false);
  };

  return (
    <Button onClick={handleClick} style={{ width: 35, padding: 0 }}>
      <i class='fas fa-sign-out-alt fa-2x' style={{ color: '#15212B' }}></i>
    </Button>
  );
}
