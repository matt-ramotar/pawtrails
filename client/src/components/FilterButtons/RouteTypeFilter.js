import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRouteType } from '../../store/filters';
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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  custom: {
    backgroundColor: '#ffffff',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#212121',
  },
}));

export default function RouteTypeFilter() {
  const [value, setValue] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value, newValue);
    dispatch(setRouteType(newValue));
  };

  const handleClick = event => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <Box>
      <Button
        onClick={handleClick}
        style={{
          fontSize: 14,
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          backgroundColor: '#ffffff',
          marginLeft: 5,
          marginTop: 5,
          color: '#212121',
        }}>
        <span style={{ fontSize: '1.5rem' }}>⛰️</span> Route Type
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} classes={{ paper: classes.custom }}>
        <FormControl component='fieldset'>
          <RadioGroup
            aria-label='routeType'
            name='routeType'
            value={value}
            onChange={handleChange}
            style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: '#212121' }}>
            <FormControlLabel
              value='Loop'
              control={<Radio style={{ color: '#212121' }} />}
              label={
                <Typography variant='subtitle2' style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: '#212121' }}>
                  Loop
                </Typography>
              }
              style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}
            />
            <FormControlLabel
              value='Out & Back'
              control={<Radio style={{ color: '#212121' }} />}
              label={
                <Typography variant='subtitle2' style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: '#212121' }}>
                  Out & Back
                </Typography>
              }
            />
            <FormControlLabel
              value='Point to Point'
              control={<Radio style={{ color: '#212121' }} />}
              label={
                <Typography variant='subtitle2' style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: '#212121' }}>
                  Point to Point
                </Typography>
              }
            />
          </RadioGroup>
        </FormControl>
      </Menu>
    </Box>
  );
}
