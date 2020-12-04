import React, { useEffect, useState } from 'react';

import { Box, Button, Menu, Modal, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import ReviewForm from '../forms/ReviewForm';
import { useStyles } from './TrailDetailStyle';
import { setReviewForm } from '../store/views';

export default function WriteReviewButton() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const reviewFormIsVisible = useSelector(state => state.views.reviewForm) || false;

  const [updates, setUpdates] = useState(0);

  const handleOpen = () => {
    dispatch(setReviewForm(true));
    setUpdates(updates + 1);
  };

  const handleClose = () => {
    dispatch(setReviewForm(false));
    setUpdates(updates + 1);
  };

  return (
    <Box>
      <Button className={classes.writeReviewButton} variant='outlined' elevation={0} onClick={handleOpen}>
        <Box className={classes.writeReviewBox}>
          <Typography variant='caption' className={classes.writeReviewText}>
            <span style={{ margin: 5 }}>
              <i class='fas fa-pen fa-2x' style={{ color: '#1D72E7' }}></i>
            </span>
            Write a Review
          </Typography>
        </Box>
      </Button>
      <Modal
        open={reviewFormIsVisible}
        onClose={handleClose}
        style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        {<ReviewForm />}
      </Modal>
    </Box>
  );
}
