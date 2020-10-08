import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';

import { login } from '../store/auth';
import { Redirect } from 'react-router-dom';
import { Box, Grid, Typography, Paper } from '@material-ui/core';

import SearchInput from '../components/SearchInput';
import MenuAppBar from '../components/AppBar';
import SimpleSelect from '../components/Select';

import HeroImg from '../Home-Hero-1-Large-1550x885-9d224c1181d0d606bfbc8de11b07d6f9.jpg';

const useStyles = makeStyles(theme => ({
  header: {
    fontFamily: 'Museo Sans Rounded, Arial, sans-serif',
    fontWeight: 500,
    color: 'white',
    width: '100%',
    fontSize: '3.5rem',
    'text-shadow': '0px 0px 160px rgba(0, 0, 0, 0.)',
    'line-height': 1.2,
    position: 'absolute',
    top: '20%',
  },

  heroImg: {
    backgroundImage: `url(${HeroImg})`,
    height: '432px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  searchForm: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  searchInput: {
    'border-radius': '10px',
    backgroundColor: 'white',
    'background-position': 'center center',
    position: 'absolute',
  },
  paper: {
    width: '550px',
    backgroundColor: 'white',
    opacity: 0.4,
    'border-radius': '10px',
    margin: 0,
    position: 'absolute',
    top: '28%',
  },
}));

export default function HomePage() {
  const classes = useStyles();
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch(login(username, password));
  // };

  return (
    <>
      <section>
        <Box className={classes.heroImg} align='center'></Box>
        <Box className='searchForm' display='flex' justifyContent='center'>
          <Box display='flex' justifyContent='center'>
            <Typography className={classes.header} variant='h1' align='center'>
              Find your next favorite trail
            </Typography>
          </Box>
          <Box className={classes.paper} display='flex' justifyContent='center'>
            <SearchInput position='absolute' bgcolor='white'></SearchInput>
          </Box>
        </Box>
      </section>
    </>
  );
}
