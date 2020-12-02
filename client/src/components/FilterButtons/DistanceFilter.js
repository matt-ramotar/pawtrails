import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDistance } from '../../store/filters';
import { Box, Button, Menu, MenuItem, Typography, Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  box: {
    width: 250,
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#212121',
  },
  slider: {
    color: '#212121',
  },
  labels: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#212121',
  },
  custom: {
    backgroundColor: '#ffffff',
    color: '#212121',
  },
});

function valuetext(value) {
  return `${value} ft`;
}

export default function DistanceFilter() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState([0, 100]);

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    const [min, max] = newValue;
    setValue(newValue);
    setMin(min);
    setMax(max);
    dispatch(setDistance(min, max));
  };

  const handleClick = () => {
    setDistance();
  };

  const openMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        onClick={openMenu}
        style={{
          fontSize: 14,
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          backgroundColor: '#ffffff',
          marginLeft: 5,
          marginTop: 5,
          color: '#212121',
        }}>
        <span style={{ fontSize: '1.5rem' }}>📏</span> Distance
      </Button>

      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{ paper: classes.custom }}>
        <Box className={classes.box}>
          <Box className={classes.labels}>
            <Box>
              <Typography className={classes.label}>{`${min} mi`}</Typography>
            </Box>
            <Box>
              <Typography className={classes.label}>{`${max === 100 ? '100+' : max} mi`}</Typography>
            </Box>
          </Box>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay='auto'
            aria-labelledby='range-slider'
            getAriaValueText={valuetext}
            className={classes.slider}
            max={100}
          />
        </Box>
      </Menu>
    </Box>
  );
}
