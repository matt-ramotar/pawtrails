import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@material-ui/core';

import { getTrail, getWeather } from '../../store/trails';
import useStyles from './useStyles';

const Weather = ({ getWeatherDispatcher, lat, lng, weather }) => {
  const classes = useStyles();

  useEffect(() => {
    getWeatherDispatcher(lat, lng);
  }, [lat, lng]);

  useEffect(() => {
    if (weather) {
      console.log('weather', weather);

      const options = { weekday: 'long' };

      //
      const d = new Intl.DateTimeFormat('en-US', options).format(new Date());

      console.log('day', d);
    }
  }, [weather]);

  if (!weather) return null;

  return (
    <Box className={classes.weather}>
      {weather.daily.map((day, i) => {
        return (
          <Box style={{ width: '50px' }}>
            <p>{day.dayOfWeek}</p>
            <img src={day.icon} />
            <Typography>{`${Math.floor(day.min)}° F ${Math.ceil(day.max)}° F`}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default function WeatherContainer({ lat, lng }) {
  const dispatch = useDispatch();
  const getWeatherDispatcher = (lat, lng) => dispatch(getWeather(lat, lng));
  const weather = useSelector(state => state.trails.weather);

  return (
    <Weather lat={lat} lng={lng} getWeatherDispatcher={getWeatherDispatcher} weather={weather} />
  );
}
