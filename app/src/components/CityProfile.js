import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CityMap from './CityMap';
import CityTrails from './CityTrails';
import Filters from './Filters/Filters';

import { getCity } from '../store/cities';

import SearchCard from '../components/SearchCard';
import { set } from 'js-cookie';

const useStyles = makeStyles(theme => ({
  river: {
    display: 'flex',
    'padding-bottom': '8px',
    'overflow-x': 'auto',
  },
  riverPic: {
    width: '272px',
    height: '181px',
    'border-radius': '16px',
    'object-fit': 'cover',
    padding: '0 8px',
  },
  title: {
    fontSize: '32px',
    fontWeight: 700,
    color: '#414141',
    fontFamily: 'Proxima Nova,Arial,sans-serif!important',
  },
}));

export const CityProfile = ({ getCityDispatcher, nameOfCity }) => {
  const classes = useStyles();
  const [city, setCity] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  console.log('nameofcity', nameOfCity);

  const reduxCity = useSelector(state => state.cities.city);

  useEffect(() => {
    console.log('updating redux', reduxCity);
    getCityDispatcher(nameOfCity);
  }, [nameOfCity]);

  useEffect(() => {
    console.log('updating internal', reduxCity);

    if (reduxCity && reduxCity.name.toLowerCase() === nameOfCity) {
      setCity(reduxCity);
      setLat(reduxCity.lat);
      setLng(reduxCity.lng);
    }
  }, [reduxCity]);

  if (!city) return null;

  return (
    <>
      <div className={classes.river}>
        <img src={city.Trails[0].Photos[0].url} className={classes.riverPic}></img>
        <img src={city.Trails[1].Photos[0].url} className={classes.riverPic}></img>
        <img src={city.Trails[2].Photos[0].url} className={classes.riverPic}></img>
        <img src={city.Trails[3].Photos[0].url} className={classes.riverPic}></img>
      </div>
      <Typography variant='h1' align='left' className={classes.title}>
        Best Trails in {city.name}
      </Typography>
      <CityMap lat={lat} lng={lng}></CityMap>
      <Filters />
      <CityTrails trails={city.Trails} />
    </>
  );
};

export default function CityProfileContainer() {
  const dispatch = useDispatch();
  let { nameOfCity } = useParams();

  const getCityDispatcher = name => dispatch(getCity(name));

  return <CityProfile nameOfCity={nameOfCity} getCityDispatcher={getCityDispatcher} />;
}
