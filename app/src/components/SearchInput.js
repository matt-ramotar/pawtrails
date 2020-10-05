/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import { getCities, getCity } from '../store/cities';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { Redirect, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  searchButton: {
    backgroundColor: '#4CAF4F',
  },
}));

export function SearchInput({ cities, location, getCityDispatcher }) {
  const [city, setCity] = useState('');
  const classes = useStyles();

  const history = useHistory();

  useEffect(() => {
    console.log('use effect', city);
    getCityDispatcher();
  }, [city]);

  // useEffect(() => {
  //   loadCitiesDispatcher();
  //   console.log(cities);
  // }, []);

  const updateCity = (event, value) => {
    console.log('updaate query', value);

    setCity(value);

    console.log('query', city);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit', city);
    history.push(`/trails/us/${city.toLowerCase()}`);
  };

  console.log(cities);

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ width: 500 }} className={classes.inputContainer}>
        <Autocomplete
          autoComplete
          options={cities.map(city => city.name)}
          onChange={updateCity}
          // onHighlightChange={(event, value, reason = 'mouse') => console.log('key', value)}
          autoSelect
          autoHighlight
          className={classes.autoComplete}
          renderInput={params => (
            <TextField
              {...params}
              margin='normal'
              variant='outlined'
              placeholder='Enter a city name'
              InputProps={{ ...params.InputProps, type: 'search' }}
            />
          )}
        />
      </div>
    </form>
  );
}

export default function SearchInputContainer() {
  const dispatch = useDispatch();
  const cities = [
    {
      id: 1,
      name: 'Atlanta',
      state: 'Georgia',
      createdAt: '2020-10-02T17:10:37.479Z',
      updatedAt: '2020-10-02T17:10:37.479Z',
    },
    {
      id: 2,
      name: 'Austin',
      state: 'Texas',
      createdAt: '2020-10-02T17:10:37.479Z',
      updatedAt: '2020-10-02T17:10:37.479Z',
    },
    {
      id: 3,
      name: 'Baltimore',
      state: 'Maryland',
      createdAt: '2020-10-02T17:10:37.479Z',
      updatedAt: '2020-10-02T17:10:37.479Z',
    },
    {
      id: 4,
      name: 'Boise',
      state: 'Idaho',
      createdAt: '2020-10-02T17:10:37.479Z',
      updatedAt: '2020-10-02T17:10:37.479Z',
    },
    {
      id: 5,
      name: 'Boston',
      state: 'Massachusetts',
      createdAt: '2020-10-02T17:10:37.479Z',
      updatedAt: '2020-10-02T17:10:37.479Z',
    },
    {
      id: 6,
      name: 'Boulder',
      state: 'Colorado',
      createdAt: '2020-10-02T17:10:37.479Z',
      updatedAt: '2020-10-02T17:10:37.479Z',
    },
    {
      id: 7,
      name: 'Chicago',
      state: 'Illinois',
      createdAt: '2020-10-02T17:10:37.479Z',
      updatedAt: '2020-10-02T17:10:37.479Z',
    },
    {
      id: 8,
      name: 'Denver',
      state: 'Colorado',
      createdAt: '2020-10-02T17:10:37.479Z',
      updatedAt: '2020-10-02T17:10:37.479Z',
    },
    {
      id: 9,
      name: 'Los Angeles',
      state: 'California',
      createdAt: '2020-10-02T17:10:37.479Z',
      updatedAt: '2020-10-02T17:10:37.479Z',
    },
    {
      id: 10,
      name: 'New York City',
      state: 'New York',
      createdAt: '2020-10-02T17:10:37.479Z',
      updatedAt: '2020-10-02T17:10:37.479Z',
    },
    {
      id: 11,
      name: 'Philadelphia',
      state: 'Pennsylvania',
      createdAt: '2020-10-02T17:10:37.479Z',
      updatedAt: '2020-10-02T17:10:37.479Z',
    },
    {
      id: 12,
      name: 'Portland',
      state: 'Oregon',
      createdAt: '2020-10-02T17:10:37.479Z',
      updatedAt: '2020-10-02T17:10:37.479Z',
    },
    {
      id: 13,
      name: 'Salt Lake City',
      state: 'Utah',
      createdAt: '2020-10-02T17:10:37.479Z',
      updatedAt: '2020-10-02T17:10:37.479Z',
    },
    {
      id: 14,
      name: 'San Francisco',
      state: 'California',
      createdAt: '2020-10-02T17:10:37.479Z',
      updatedAt: '2020-10-02T17:10:37.479Z',
    },
    {
      id: 15,
      name: 'Seattle',
      state: 'Washington',
      createdAt: '2020-10-02T17:10:37.479Z',
      updatedAt: '2020-10-02T17:10:37.479Z',
    },
  ];

  const location = useSelector(state => state.location);
  // const loadCitiesDispatcher = () => dispatch(loadCities());
  const getCityDispatcher = () => dispatch(getCity);

  return <SearchInput cities={cities} location={location} getCityDispatcher={getCityDispatcher} />;
}
