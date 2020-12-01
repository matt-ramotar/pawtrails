import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Divider, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  headerBox: {},
  headerTitle: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#212121',
  },
  headerRatingBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  actionsBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },

  actionBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  actionButton: {
    backgroundColor: '#1D72E7',
    minWidth: 40,
    minHeight: 40,
    maxHeight: 40,
    maxWidth: 40,
    borderRadius: '50%',
  },

  actionLabel: {
    color: '#1D72E7',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },

  star: {
    color: '#FBBD04',
  },
}));

export default function TrailDetail() {
  const trail = useSelector(state => state.trail);
  const classes = useStyles();
  if (Object.keys(trail).length === 0) return null;
  return (
    <Paper style={{ width: '95%', maxHeight: 500, marginLeft: '2.5%', marginTop: 50 }}>
      <Box className={classes.headerBox}>
        <Typography variant='h5' className={classes.headerTitle}>
          <span style={{ fontSize: '2rem' }}>📍</span> {trail.name}
        </Typography>
        <Box className={classes.headerRatingBox}>
          <Typography variant='caption'>4.8</Typography>
          <Box className={classes.stars}>
            <i class='fas fa-star' style={{ color: '#FBBD04' }}></i>
            <i class='fas fa-star' style={{ color: '#FBBD04' }}></i>
            <i class='fas fa-star' style={{ color: '#FBBD04' }}></i>
            <i class='fas fa-star' style={{ color: '#FBBD04' }}></i>
            <i class='fas fa-star' style={{ color: '#FBBD04' }}></i>
          </Box>
          <Typography variant='caption'>(5,810)</Typography>
        </Box>
        <Typography variant='caption' className={classes.headerDescription}>
          Dog-friendly trail
        </Typography>
      </Box>
      <Divider />
      <Box className={classes.actionsBox}>
        <Box className={classes.actionBox}>
          <Button className={classes.actionButton}>
            <i class='fas fa-directions fa-lg' style={{ color: '#ffffff' }}></i>
          </Button>
          <Typography variant='body1' className={classes.actionLabel}>
            Directions
          </Typography>
        </Box>

        <Box className={classes.actionBox}>
          <Button className={classes.actionButton}>
            <i class='far fa-bookmark fa-lg' style={{ color: '#ffffff' }}></i>
          </Button>
          <Typography variant='body1' className={classes.actionLabel}>
            Save
          </Typography>
        </Box>

        <Box className={classes.actionBox}>
          <Button className={classes.actionButton}>
            <i class='fas fa-map-signs fa-lg' style={{ color: '#ffffff' }}></i>
          </Button>
          <Typography variant='body1' className={classes.actionLabel}>
            Nearby
          </Typography>
        </Box>

        <Box className={classes.actionBox}>
          <Button className={classes.actionButton}>
            <i class='fas fa-pen fa-lg' style={{ color: '#ffffff' }}></i>
          </Button>
          <Typography variant='body1' className={classes.actionLabel}>
            Review
          </Typography>
        </Box>

        <Box className={classes.actionBox}>
          <Button className={classes.actionButton}>
            <i class='fas fa-share fa-lg' style={{ color: '#ffffff' }}></i>
          </Button>
          <Typography variant='body1' className={classes.actionLabel}>
            Share
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
