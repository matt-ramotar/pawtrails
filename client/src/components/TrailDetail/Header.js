import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Typography } from '@material-ui/core';
import { useStyles } from './Header.styles.jsx';
import Rating from '@material-ui/lab/Rating';

export default function Header({ trail, avgRating, numOfReviews }) {
  const classes = useStyles();

  const userIsLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const lists = useSelector(state => state.lists);

  if (userIsLoggedIn && !lists) return null;

  return (
    <Box className={classes.root}>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
        <Typography variant='h5' className={classes.title}>
          <span style={{ fontSize: '2rem', fontFamily: 'Roboto', marginLeft: -10 }}>📍</span>
          {trail.name}
        </Typography>
        <Button>
          <Typography variant='h5' className={classes.title}>
            <span style={{ fontSize: '1.5rem', fontFamily: 'Roboto', marginLeft: 10 }}>
              {userIsLoggedIn ? (lists.lookup[lists.lists[0].id][trail.cityId][trail.id] ? `❤️` : `🤍`) : null}
            </span>
          </Typography>
        </Button>
      </Box>
      <Box className={classes.rating__box}>
        <Typography variant='caption'>{avgRating}</Typography>
        <Box className={classes.stars}>
          <Rating value={avgRating} readOnly size='small' />
        </Box>
        <Typography variant='caption'>{`(${numOfReviews})`}</Typography>
      </Box>
      <Typography variant='caption' className={classes.summary}>
        Dog-friendly trail
      </Typography>
    </Box>
  );
}
