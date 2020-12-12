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
    <Box>
      <Box>
        <Typography variant='h6' style={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '0.85rem' }}>
          Forecast
        </Typography>
      </Box>
      <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        {weather.daily.map((day, i) => {
          return (
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Typography variant='body2' style={{ fontFamily: 'Roboto', fontSize: '0.85rem' }}>
                {day.dayOfWeek}
              </Typography>
              <img src={day.icon} />
              <Typography variant='caption' style={{ fontFamily: 'Roboto' }}>{`${Math.floor(day.min)}° F ${Math.ceil(
                day.max
              )}° F`}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default function WeatherContainer({ lat, lng }) {
  const dispatch = useDispatch();
  const getWeatherDispatcher = (lat, lng) => dispatch(getWeather(lat, lng));
  const weather = useSelector(state => state.trails.weather);

  return <Weather lat={lat} lng={lng} getWeatherDispatcher={getWeatherDispatcher} weather={weather} />;
}
