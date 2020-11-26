import React from 'react';
import { useSelector } from 'react-redux';
import { Box, BottomNavigation, Button, Typography } from '@material-ui/core';

import TrailCard from './TrailCard';
import { setTrail } from '../store/trail';

export default function BottomSlider() {
  const trails = useSelector(state => state.city.trails);

  return (
    <BottomNavigation
      className='bottom__nav'
      style={{
        width: '100%',
        height: 300,
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 10,
        zIndex: 1,
        overflowX: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {trails ? trails.map(trail => <TrailCard trail={trail} />) : null}
    </BottomNavigation>
  );
}
