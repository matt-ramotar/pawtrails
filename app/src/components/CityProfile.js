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

export const CityProfile = ({ getCityDispatcher, nameOfCity, filters }) => {
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
    console.log(filters);

    if (reduxCity && reduxCity.name.toLowerCase() === nameOfCity) {
      setCity(reduxCity);
      setLat(reduxCity.lat);
      setLng(reduxCity.lng);
    }
  }, [reduxCity]);

  // {
  //   difficulty: Null OR easy, moderate, hard
  //   length: Null OR 0 - Inf
  //   elevationGain: Null OR 0 - Inf
  //   routeType: Null OR Loop, Out & Back, Point to Point
  //   tags: []
  //   }

  /*
    const { difficulty, length, elevationGain, routeType, tags } = filters;
*/

  const hasTags = (trail, tags) => {
    for (let tag of tags) {
      if (!trail.Tags.includes(tag)) return false;
    }
    return true;
  };

  const isLength = (trail, length) => (trail.length <= length ? true : false);

  const isDifficulty = (trail, difficulty) =>
    trail.difficulty === difficulty.toLowerCase() ? true : false;

  const isElevationGain = (trail, elevationGain) =>
    trail.elevationGain <= elevationGain ? true : false;

  const isRouteType = (trail, routeType) => (trail.RouteType === routeType ? true : false);

  const search = (trails, filters) => {
    console.log('trails', trails);
    console.log('filters', filters);
    let matchingTrails = trails;

    let filtersMap = {
      tags: hasTags,
      length: isLength,
      difficulty: isDifficulty,
      elevationGain: isElevationGain,
      routeType: isRouteType,
    };

    let easy = trails.filter(trail => trail.difficulty === 'easy');
    console.log('easy', easy);

    // let filtersToRun = Object.entries(filters).map((key, value) => [filtersMap[key], value]);
    let filtersToRun = Object.entries(filters).map(filter => [filtersMap[filter[0]], filter[1]]);

    while (filtersToRun.length > 0) {
      let filter = filtersToRun.shift();
      let cb = filter[0];
      let val = filter[1];
      matchingTrails = matchingTrails.filter(trail => cb(trail, val));
      console.log(matchingTrails);
    }

    return matchingTrails;

    const { difficulty, length, elevationGain, routeType, tags } = filters;
    console.log(Object.entries(filters));
    console.log('difficulty', difficulty);
    console.log('length', length);
    console.log('elevationGain', elevationGain);
    console.log('routeType', routeType);
  };

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
      <CityTrails trails={search(city.Trails, filters)} />
    </>
  );
};

export default function CityProfileContainer() {
  const dispatch = useDispatch();
  let { nameOfCity } = useParams();
  const filters = useSelector(state => state.filters);

  const getCityDispatcher = name => dispatch(getCity(name));

  return (
    <CityProfile nameOfCity={nameOfCity} getCityDispatcher={getCityDispatcher} filters={filters} />
  );
}
