import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Chip, Link, Paper, Typography } from '@material-ui/core';
export default function TrailCard({ trail }) {
  console.log(trail);
  return (
    <Paper style={{ width: '95%', borderRadius: 10, marginTop: 10 }}>
      <Button style={{ width: '100%' }}>
        <Box>
          <img
            src={trail.Photos.length > 0 ? trail.Photos[0].url : ''}
            style={{ width: '100%', maxHeight: 150, objectFit: 'cover' }}
          />
          <Box style={{ textAlign: 'left' }}>
            <Typography variant='subtitle2' style={{ fontWeight: 'bold', fontFamily: 'Roboto' }}>
              <span style={{ fontSize: '1.5rem' }}>📍</span>
              {trail.name}
            </Typography>
            <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Box>
                <span style={{ fontSize: '1.5rem', marginRight: 2 }}>📏</span>
                <Chip label={`${trail.length} mi`} style={{ backgroundColor: '#a5d6a7' }} />
              </Box>
              <Box style={{ marginLeft: 5 }}>
                <span style={{ fontSize: '1.5rem', marginRight: 2 }}>↕️</span>
                <Chip label={`${trail.elevationGain} ft`} style={{ backgroundColor: '#bbdefb' }} />
              </Box>
              <Box style={{ marginLeft: 5 }}>
                <span style={{ fontSize: '1.5rem' }}>⛰️</span>

                <Chip label={trail.routeType} style={{ backgroundColor: '#f6a5c0' }} />
              </Box>
              <Box style={{ marginLeft: 10 }}>
                <span style={{ fontSize: '1.5rem' }}>😅</span>
                <Chip
                  style={{
                    backgroundColor:
                      trail.difficulty === 'easy' ? '#fff59d' : trail.difficulty === 'moderate' ? '#ffb74d' : '#e57373',
                  }}
                  label={trail.difficulty}
                />
              </Box>
            </Box>
            <Box></Box>
            <Box>
              <span style={{ fontSize: '1.5rem' }}>🏷️</span>

              {trail.Tags.map(tag => (
                <Chip size='small' label={tag.tag} style={{ margin: 2, backgroundColor: '#efebe9' }} />
              ))}
            </Box>
          </Box>
        </Box>
      </Button>
    </Paper>
  );
}
