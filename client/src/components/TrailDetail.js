import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Paper, Typography } from '@material-ui/core';

export default function TrailDetail() {
  const trail = useSelector(state => state.trail);
  if (Object.keys(trail).length === 0) return null;
  return (
    <Paper style={{ width: '95%', maxHeight: 500, marginLeft: '2.5%', marginTop: 50 }}>
      <Box>
        <Typography variant='h6' style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
          <span style={{ fontSize: '2rem' }}>📍</span> {trail.name}
        </Typography>
      </Box>
    </Paper>
  );
}
