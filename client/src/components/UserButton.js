import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Typography } from '@material-ui/core';

export default function LoginButton() {
  const user = useSelector(state => state.auth.user);
  return (
    <Button style={{ width: 35, padding: 0 }}>
      <img src={user.photo} style={{ borderRadius: '50%', width: 35 }} />
    </Button>
  );
}
