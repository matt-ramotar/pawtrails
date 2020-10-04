import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, useParams } from 'react-router-dom';
import { getTrails } from '../store/trails';
import { useGoogleMaps } from 'react-hook-google-maps';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SearchCard from '../components/SearchCard';

const useStyles = makeStyles(theme => ({
  river: {
    display: 'flex',
    'padding-bottom': '8px',
    'overflow-x': 'auto',
  },
  riverPic: {
    width: '272px',
    height: '181px',
    'border-radius': '8px',
    'object-fit': 'cover',
    padding: '0 8px',
  },
  title: {
    fontSize: '32px',
    color: 'black',
  },
}));

export const CityTrailsPage = ({ getTrailsDispatcher, cityTrails, google, city, lat, lng }) => {
  const classes = useStyles();

  const { cityName } = useParams();

  const test = useSelector(state => state.trails.city);

  useEffect(() => {
    getTrailsDispatcher(cityName);
    console.log('useEffect', city);
  }, [cityName]);

  console.log('test', test);
  console.log('after use', city);
  const handleClick = e => {
    e.preventDefault();
    console.log(e.target.trail);
  };

  // const { ref, map, googleAPIObj } = useGoogleMaps(google, {
  //   center: { lat: Number(lat), lng: Number(lng) },
  //   zoom: 10,
  // });

  // function search(rows) {
  //   return rows.filter(row => {
  //     return row.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
  //   });
  // }
  if (city === {}) return null;
  if (!cityTrails) return null;

  return (
    <>
      <div className={classes.river}>
        <img src={city.Trails[0].Photos[0].url} className={classes.riverPic}></img>
        <img src={city.Trails[1].Photos[0].url} className={classes.riverPic}></img>
        <img src={city.Trails[2].Photos[0].url} className={classes.riverPic}></img>
        <img src={city.Trails[3].Photos[0].url} className={classes.riverPic}></img>
      </div>
      <Typography variant='h5' align='left' className={classes.title}>
        Best Trails in {city.name}
      </Typography>
      {/* <div ref={ref} style={{ width: 400, height: 300 }} /> */}

      <div>
        {cityTrails.map(trail => (
          <>
            <SearchCard trail={trail} city={city}></SearchCard>{' '}
          </>
        ))}
      </div>
    </>
  );
};

export default function CityTrailsContainer() {
  const dispatch = useDispatch();

  const getTrailsDispatcher = city => dispatch(getTrails(city));
  const cityTrails = useSelector(state => state.trails.matches);
  const city = useSelector(state => state.trails.city);
  const google = process.env.REACT_APP_GOOGLE_API_KEY;

  return (
    <CityTrailsPage
      google={google}
      getTrailsDispatcher={getTrailsDispatcher}
      cityTrails={cityTrails}
      city={city}
      lat={city ? city.lat : null}
      lng={city ? city.lng : null}
    />
  );
}
