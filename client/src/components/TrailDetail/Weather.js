import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@material-ui/core';

import { getTrail, getWeather } from '../../store/trails';
import { useStyles } from './Weather.styles.jsx';

export default function Weather({ lat, lng }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const weather = useSelector(state => state.trails.weather);

  useEffect(() => {
    dispatch(getWeather(lat, lng));
  }, [lat, lng]);

  useEffect(() => {
    if (weather) {
      const options = { weekday: 'long' };

      const d = new Intl.DateTimeFormat('en-US', options).format(new Date());
    }
  }, [weather]);

  if (!weather) return null;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography variant='h6' className={classes.title}>
          Forecast
        </Typography>
      </Box>
      <Box className={classes.forecast__box}>
        {weather.daily.map((day, i) => {
          return (
            <Box className={classes.day__box}>
              <Typography className={classes.day__text}>
                {day.dayOfWeek}
                <span>
                  <Typography className={classes.temp__text}>{`${Math.ceil(day.max)} °F`}</Typography>
                </span>
              </Typography>
              <img src={day.icon} className={classes.img} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
