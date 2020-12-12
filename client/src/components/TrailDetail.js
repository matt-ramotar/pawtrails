import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Chip, Divider, Paper, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useStyles } from './TrailDetailStyle';
import RatingsChart from '../charts/RatingsChart';
import WriteReviewButton from './TrailDetail/Buttons/WriteReviewButton';
import ReviewCard from './ReviewCard';
import calcAvgRating from '../helpers/calcAvgRating';
import Rating from '@material-ui/lab/Rating';
import { setReviewForm } from '../store/views';
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
  const trail = useSelector(state => state.trail);

  const dispatch = useDispatch();

  const [avgRating, setAvgRating] = useState(null);
  const [numOfReviews, setNumOfReviews] = useState(null);

  const classes = useStyles();

  const openReviewModal = () => {
    dispatch(setReviewForm(true));
  };

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
    <Box id='detail-box'>
      <Paper style={{ width: '80%', maxHeight: '100%', marginLeft: '2.5%', marginTop: 50 }}>
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
        <Box className={classes.contentBox}>
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
