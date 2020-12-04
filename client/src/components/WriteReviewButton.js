import React, { useEffect, useState } from 'react';
import { Box, Button, Menu, Modal, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import ReviewForm from '../forms/ReviewForm';
import { useStyles } from './TrailDetailStyle';

export default function WriteReviewButton() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

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
        open={open}
        onClose={handleClose}
        style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        {<ReviewForm />}
      </Modal>
    </Box>
  );
}
