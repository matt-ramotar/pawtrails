import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRouteType } from '../../store/filters';
import { Button } from '@material-ui/core';

export default function DistanceFilter() {
  const handleClick = () => {
    setRouteType();
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
      <span style={{ fontSize: '1.5rem' }}>⛰️</span> Route Type
    </Button>
  );
}
