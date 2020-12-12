import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import WriteReviewButton from './Buttons/WriteReviewButton';
import RatingsChart from '../../charts/RatingsChart';
import { useStyles } from './ReviewSummary.styles.jsx';
import Rating from '@material-ui/lab/Rating';

export default function ReviewSummary({ trail, avgRating }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant='h6' className={classes.title}>
        Review summary
      </Typography>
      <Box className={classes.ratings__box}>
        <RatingsChart counts={trail.TrailSummary.summary.counts} />
        <Box className={classes.avg__box}>
          <Typography variant='h2' className={classes.avg__text}>
            {avgRating}
          </Typography>
          <Box className={classes.stars__box}>
            <Rating value={avgRating} readOnly />
          </Box>
          <Button>
            <Typography variant='body2' style={{ color: '#1D72E7', fontFamily: 'Roboto', fontWeight: 'bold' }}>
              {`${trail.TrailSummary.summary.counts.reviews._total} reviews`}
            </Typography>
          </Button>
        </Box>
      </Box>
      <WriteReviewButton />
    </Box>
  );
}
