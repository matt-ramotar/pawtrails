import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDifficulty } from '../../store/filters';
import {
  Box,
  Button,
  FormControlLabel,
  FormControl,
  FormLabel,
  Menu,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';

export default function DifficultyFilter() {
  const [value, setValue] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(setDifficulty(newValue));
  };

  const handleClick = event => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <Box>
      <Button
        onClick={handleClick}
        style={{
          fontSize: 16,
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          backgroundColor: '#ffffff',
          marginLeft: 8,
          marginTop: 8,
          color: '#212121',
        }}>
        <span style={{ fontSize: '1.5rem' }}>😅</span> Difficulty
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <FormControl component='fieldset'>
          <RadioGroup
            aria-label='routeType'
            name='routeType'
            value={value}
            onChange={handleChange}
            style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: 'black' }}>
            <FormControlLabel
              value='easy'
              control={<Radio style={{ color: '#212121', fontFamily: 'Roboto', fontWeight: 'bold' }} />}
              label={
                <Typography variant='subtitle2' style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: '#212121' }}>
                  Easy
                </Typography>
              }
              style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}
            />
            <FormControlLabel
              value='moderate'
              control={<Radio style={{ color: '#212121', fontFamily: 'Roboto', fontWeight: 'bold' }} />}
              label={
                <Typography variant='subtitle2' style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: '#212121' }}>
                  Moderate
                </Typography>
              }
            />
            <FormControlLabel
              value='hard'
              control={<Radio style={{ color: '#212121', fontFamily: 'Roboto', fontWeight: 'bold' }} />}
              label={
                <Typography variant='subtitle2' style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: '#212121' }}>
                  Hard
                </Typography>
              }
            />
          </RadioGroup>
        </FormControl>
      </Menu>
    </Box>
  );
}
