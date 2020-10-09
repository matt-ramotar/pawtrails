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
  heroBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  headerBox: {
    position: 'absolute',
    top: '20%',
    display: 'flex',
    justifyContent: 'center',
  },
  searchBox: {
    position: 'absolute',
    top: '28%',
    display: 'flex',
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'Museo Sans Rounded, Arial, sans-serif',
    fontWeight: 500,
    color: 'white',
    width: '100%',
    fontSize: '3.5rem',
    'text-shadow': '0px 0px 160px rgba(0, 0, 0, 0.)',
    'line-height': 1.2,
  },
  heroImg: {
    backgroundImage: `url(${HeroImg})`,
    height: '432px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
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
      <section className={classes.heroSection}>
        <Box className={classes.heroImg}></Box>
        <Box className={classes.heroBox}>
          <Box className={classes.headerBox}>
            <Typography className={classes.header} variant='h1'>
              Find your next favorite trail
            </Typography>
          </Box>
          <Box className={classes.searchBox}>
            <SearchInput />
          </Box>
        </Box>
      </section>
    </>
  );
}
