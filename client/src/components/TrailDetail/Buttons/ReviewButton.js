import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useStyles } from './ReviewButton.styles.jsx';
import { useDispatch, useSelector } from 'react-redux';

import { setReviewForm } from '../../../store/views';

export default function ReviewButton() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const userIsLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const openReviewModal = () => dispatch(setReviewForm(true));

  return (
    <Box className={classes.root}>
      {userIsLoggedIn ? (
        <Box>
          <Button onClick={openReviewModal} className={classes.button}>
            <i class='fas fa-pen fa-lg' style={{ color: '#ffffff' }}></i>
          </Button>
          <Typography variant='body2' className={classes.label}>
            Review
          </Typography>
        </Box>
      ) : (
        <Box>
          <Button disabled className={classes['button--disabled']}>
            <i class='fas fa-pen fa-lg' style={{ color: '#757575' }}></i>
          </Button>
          <Typography variant='body2' className={classes['label--disabled']}>
            Review
          </Typography>
        </Box>
      )}
    </Box>
  );
}
