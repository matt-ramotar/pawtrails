import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@material-ui/core';

export default function LoginButton() {
  return (
    <Button>
      <i class='fas fa-user-circle fa-2x' style={{ color: '#212121' }}></i>
    </Button>
  );
}
