import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@material-ui/core';
import TrailCard from './TrailCard';
export default function Trails() {
  const trails = useSelector(state => state.city.trails);
  if (!trails) return null;
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {trails.map(trail => (
        <TrailCard trail={trail} />
      ))}
    </Box>
  );
}
