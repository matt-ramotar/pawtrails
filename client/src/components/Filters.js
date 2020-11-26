import React from 'react';
import { Box, Button, Chip, Typography } from '@material-ui/core';

export default function Filters() {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: '2.5%',
        width: 550,
        flexWrap: 'wrap',
      }}>
      <Button
        style={{
          fontSize: 16,
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          backgroundColor: '#f5f5f5',
          marginLeft: 8,
          marginTop: 8,
        }}>
        <span style={{ fontSize: '1.5rem' }}>📏</span> Distance
      </Button>
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
      <Button
        style={{
          fontSize: 16,
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          backgroundColor: '#f5f5f5',
          marginLeft: 8,
          marginTop: 8,
        }}>
        <span style={{ fontSize: '1.5rem' }}>⛰️</span> Trail Type
      </Button>
      <Button
        style={{
          fontSize: 16,
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          backgroundColor: '#f5f5f5',
          marginLeft: 8,
          marginTop: 8,
        }}>
        <span style={{ fontSize: '1.5rem' }}>😅</span> Difficulty
      </Button>
      <Button
        style={{
          fontSize: 16,
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          backgroundColor: '#f5f5f5',
          marginLeft: 8,
          marginTop: 8,
        }}>
        <span style={{ fontSize: '1.5rem' }}>🏷️</span> Tags
      </Button>
    </Box>
  );
}
