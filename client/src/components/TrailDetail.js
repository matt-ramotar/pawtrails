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
import Photos from './TrailDetail/Photos';
import ReviewSummary from './TrailDetail/ReviewSummary';
import WeatherContainer from './TrailDetail/Weather';

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
          <Box className={classes.aboutBox}>
            <Box className={classes.aboutDescriptionBox}>
              <Typography variant='body2' className={classes.aboutDescription}>
                {trail.overview}
              </Typography>
            </Box>
            <Box className={classes.moreInfoBox}>
              <Button className={classes.moreInfoButton}>
                <i class='fas fa-chevron-right fa-lg'></i>
              </Button>
            </Box>
          </Box>
          <Divider />

          <Photos trail={trail} />
          <Divider />

          <ReviewSummary trail={trail} avgRating={avgRating} />
          <Divider />

          <WeatherContainer lat={trail.lat} lng={trail.lng} />
          <Divider />

          <Box className={classes.reviewsBox}>
            <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Typography variant='h6' className={classes.photosTitle}>
                Reviews
              </Typography>
              <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Button
                  style={{
                    maxWidth: 30,
                    minWidth: 30,
                    maxHeight: 30,
                    minHeight: 30,
                    borderRadius: '50%',
                    border: '1px solid #eeeeee',
                    marginRight: 5,
                  }}>
                  <i class='fas fa-search' style={{ color: '#1D72E7' }}></i>
                </Button>

                <Button
                  style={{
                    maxHeight: 30,
                    minHeight: 30,
                    borderRadius: 10,
                    border: '1px solid #eeeeee',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <i class='fas fa-sort' style={{ color: '#1D72E7' }}></i>
                  <Typography variant='caption' style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
                    Sort
                  </Typography>
                </Button>
              </Box>
            </Box>

            <Box>
              {trailConditionsArray.map(chip => (
                <Chip
                  clickable
                  style={{
                    border: '1px solid #eeeeee',
                    backgroundColor: chip[1] ? '#ffffff' : '#E7F0FE',
                    color: chip[1] ? '#212121' : '#1D72E7',
                    fontSize: '0.5rem',
                    margin: 2,
                  }}
                  label={
                    <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Typography style={{ marginRight: 2 }}>{chip[1] ? chip[0].toLowerCase() : chip[0]}</Typography>
                      <Typography style={{ marginLeft: 2, color: '#bdbdbd' }}>{chip[1] ? chip[1] : ''}</Typography>
                    </Box>
                  }
                />
              ))}
            </Box>

            <Box>
              {trail.Reviews.map(review => (
                <Box>
                  <ReviewCard review={review} />
                  <Divider />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
