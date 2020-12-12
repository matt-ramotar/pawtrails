import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Divider, Paper } from '@material-ui/core';

import { useStyles } from './TrailDetailStyle';
import calcAvgRating from '../helpers/calcAvgRating';
import SaveButton from './TrailDetail/Buttons/SaveButton';
import ShareButton from './TrailDetail/Buttons/ShareButton';
import DirectionsButton from './TrailDetail/Buttons/DirectionsButton';
import NearbyButton from './TrailDetail/Buttons/NearbyButton';
import ReviewButton from './TrailDetail/Buttons/ReviewButton';
import Header from './TrailDetail/Header';
import Description from './TrailDetail/Description';
import Photos from './TrailDetail/Photos';
import ReviewSummary from './TrailDetail/ReviewSummary';
import WeatherContainer from './TrailDetail/Weather';
import Reviews from './TrailDetail/Reviews';

export default function TrailDetail() {
  const classes = useStyles();

  const trail = useSelector(state => state.trail);
  const [avgRating, setAvgRating] = useState(null);
  const [numOfReviews, setNumOfReviews] = useState(null);

  useEffect(() => {
    if (trail.TrailSummary) {
      setAvgRating(calcAvgRating(trail.TrailSummary.summary.counts));
      setNumOfReviews(trail.TrailSummary.summary.counts.reviews._total);
    }
  }, [trail]);

  if (Object.keys(trail).length === 0) return null;

  const trailConditionsArray = Object.entries(trail.TrailSummary.summary.counts.trailConditions);
  trailConditionsArray.unshift(['All']);

  if (!avgRating) return null;

  return (
    <Box id='trail-detail'>
      <Paper className={classes.paper}>
        <Header trail={trail} avgRating={avgRating} numOfReviews={numOfReviews} />
        <Divider />
        <Box className={classes.actions__box}>
          <DirectionsButton />
          <SaveButton />
          <NearbyButton />
          <ReviewButton />
          <ShareButton />
        </Box>
        <Divider />
        <Box className={classes.content__box}>
          <Description trail={trail} />
          <Divider />

          <Photos trail={trail} />
          <Divider />

          <ReviewSummary trail={trail} avgRating={avgRating} />
          <Divider />

          <WeatherContainer lat={trail.lat} lng={trail.lng} />
          <Divider />

          <Reviews trail={trail} />
        </Box>
      </Paper>
    </Box>
  );
}
