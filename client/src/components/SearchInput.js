/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import { loadCity } from '../store/city';
import { Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles(() => ({
  inputBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginLeft: '2.5%',
  },

  inputField: {
    backgroundColor: '#ffffff',
    width: '95%',
    height: '60px',
    borderRadius: '8px',
    color: 'black',
  },
  custom: {
    backgroundColor: '#ffffff',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  autoComplete: {
    border: 'none',
    color: '#414141',
    width: '100%',
    opacity: 1,
  },
  resize: {
    fontSize: 36,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    color: '',
  },
}));

export function SearchInput({ cities, loadCityDispatch }) {
  const classes = useStyles();

  const updateCity = (event, val) => {
    loadCityDispatch(val);
  };

  return (
    <Box className={classes.inputBox}>
      <Autocomplete
        autoComplete
        options={cities.map(city => city.name)}
        onChange={updateCity}
        // onHighlightChange={(event, value, reason = 'mouse') => console.log('key', value)}
        autoSelect
        autoHighlight
        className={classes.autoComplete}
        classes={{ paper: classes.custom }}
        closeIcon=''
        renderInput={params => (
          <TextField
            {...params}
            margin='normal'
            variant='standard'
            placeholder='Search Paw Trails'
            className={classes.inputField}
            InputProps={{
              ...params.InputProps,
              classes: { input: classes.resize },
              type: 'search',
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon style={{ width: 50, marginRight: 0 }} />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </Box>
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
  const loadCityDispatch = name => dispatch(loadCity(name));

  return <SearchInput cities={cities} location={location} loadCityDispatch={loadCityDispatch} />;
}
