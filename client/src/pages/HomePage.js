import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Box, Typography } from '@material-ui/core';

import SearchInput from '../components/SearchInput';

import HeroImg from '../Home-Hero-1-Large-1550x885-9d224c1181d0d606bfbc8de11b07d6f9.jpg';

const useStyles = makeStyles(() => ({
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
