/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
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
import { getCities } from '../store/cities';

const useStyles = makeStyles(() => ({
  inputBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
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

  console.log(cities);

  const updateCity = (event, val) => {
    loadCityDispatch(val);
  };

  return (
    <Box id='search-box' className={classes.inputBox}>
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

  const location = useSelector(state => state.location);
  const [cities, setCities] = useState(null);

  useEffect(() => {
    (async () => {
      const cities = await getCities();
      setCities(cities);
    })();
  }, []);

  const loadCityDispatch = name => dispatch(loadCity(name));

  if (!cities) return null;

  return <SearchInput cities={cities} location={location} loadCityDispatch={loadCityDispatch} />;
}
