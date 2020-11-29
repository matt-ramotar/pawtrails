import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setElevationGain } from '../../store/filters';
import { Button } from '@material-ui/core';

export default function DistanceFilter() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(Infinity);

  const handleClick = () => {
    setElevationGain();
  };

  return (
    <Button
      style={{
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        backgroundColor: '#f5f5f5',
        marginLeft: 8,
        marginTop: 8,
      }}>
      <span style={{ fontSize: '1.5rem' }}>↕️</span> Elevation Gain
    </Button>
  );
}
