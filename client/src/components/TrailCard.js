import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Chip, Link, Paper, Typography } from '@material-ui/core';
import { setTrail } from '../store/trail';
import { setCenter } from '../store/map';
export default function TrailCard({ trail }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setTrail(trail));
    dispatch(setCenter({ lat: trail.lat, lng: trail.lng }));
  };

  return (
    <Paper style={{ width: 500, maxHeight: 300, borderRadius: 10, marginLeft: 10, padding: 0 }}>
      <Button style={{ width: '100%', padding: 0 }} onClick={handleClick}>
        <Box style={{ width: '100%' }}>
          <Box style={{ position: 'relative' }}>
            <img
              src={trail.Photos.length > 0 ? trail.Photos[0].url : ''}
              style={{ width: 500, height: 300, objectFit: 'cover', borderRadius: 10, opacity: 0.8 }}
            />
            <Box
              style={{
                position: 'absolute',
                bottom: 0,
                padding: 0,
                backgroundColor: '#414141',
                opacity: 0.9,
                width: '100%',
                textAlign: 'left',
                'border-bottom-right-radius': 10,
                'border-bottom-left-radius': 10,
              }}>
              <Typography variant='subtitle1' style={{ fontWeight: 'bold', fontFamily: 'Roboto' }}>
                <span style={{ fontSize: '2rem' }}>📍</span>
                {trail.name}
              </Typography>
              <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Box>
                  <span style={{ fontSize: '1.5rem', marginRight: 2, fontFamily: 'Roboto' }}>📏</span>
                  <Chip label={`${trail.length} mi`} style={{ backgroundColor: '#a5d6a7' }} />
                </Box>
                <Box style={{ marginLeft: 5 }}>
                  <span style={{ fontSize: '1.5rem', marginRight: 2, fontFamily: 'Roboto' }}>↕️</span>
                  <Chip label={`${trail.elevationGain} ft`} style={{ backgroundColor: '#bbdefb' }} />
                </Box>
                <Box style={{ marginLeft: 5 }}>
                  <span style={{ fontSize: '1.5rem' }}>⛰️</span>

                  <Chip label={trail.routeType} style={{ backgroundColor: '#f6a5c0' }} />
                </Box>
                <Box style={{ marginLeft: 10 }}>
                  <span style={{ fontSize: '1.5rem', fontFamily: 'Roboto' }}>😅</span>
                  <Chip
                    style={{
                      backgroundColor:
                        trail.difficulty === 'easy'
                          ? '#fff59d'
                          : trail.difficulty === 'moderate'
                          ? '#ffb74d'
                          : '#e57373',
                    }}
                    label={trail.difficulty}
                  />
                </Box>
              </Box>
              <Box></Box>
              <Box>
                <span style={{ fontSize: '1.5rem', fontFamily: 'Roboto' }}>🏷️</span>

                {trail.Tags.map(tag => (
                  <Chip
                    size='small'
                    label={tag.tag}
                    style={{ marginLeft: 2, marginRight: 2, backgroundColor: '#ffffff' }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
          <Box style={{ textAlign: 'left' }}></Box>
        </Box>
      </Button>
    </Paper>
  );
}
