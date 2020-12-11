import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Typography } from '@material-ui/core';
import { loadLists } from '../store/lists';

export default function UserButton() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    if (user) {
      dispatch(loadLists(user.id));
    }
  });
  return (
    <Button style={{ width: 35, padding: 0 }}>
      <img src={user.photo} style={{ borderRadius: '50%', width: 35 }} />
    </Button>
  );
}
