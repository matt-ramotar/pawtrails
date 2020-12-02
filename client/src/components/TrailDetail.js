import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Divider, Paper, Typography } from '@material-ui/core';
import { useStyles } from './TrailDetailStyle';
import RatingsChart from '../charts/RatingsChart';

export default function TrailDetail() {
  const trail = useSelector(state => state.trail);
  const classes = useStyles();
  if (Object.keys(trail).length === 0) return null;

  return (
    <Box id='detail-box'>
      <Paper style={{ width: '80%', maxHeight: '100%', marginLeft: '2.5%', marginTop: 50 }}>
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
            <Typography variant='body2' className={classes.actionLabel}>
              Directions
            </Typography>
          </Box>

          <Box className={classes.actionBox}>
            <Button className={classes.actionButton}>
              <i class='far fa-bookmark fa-lg' style={{ color: '#ffffff' }}></i>
            </Button>
            <Typography variant='body2' className={classes.actionLabel}>
              Save
            </Typography>
          </Box>

          <Box className={classes.actionBox}>
            <Button className={classes.actionButton}>
              <i class='fas fa-map-signs fa-lg' style={{ color: '#ffffff' }}></i>
            </Button>
            <Typography variant='body2' className={classes.actionLabel}>
              Nearby
            </Typography>
          </Box>

          <Box className={classes.actionBox}>
            <Button className={classes.actionButton}>
              <i class='fas fa-pen fa-lg' style={{ color: '#ffffff' }}></i>
            </Button>
            <Typography variant='body2' className={classes.actionLabel}>
              Review
            </Typography>
          </Box>

          <Box className={classes.actionBox}>
            <Button className={classes.actionButton}>
              <i class='fas fa-share fa-lg' style={{ color: '#ffffff' }}></i>
            </Button>
            <Typography variant='body2' className={classes.actionLabel}>
              Share
            </Typography>
          </Box>
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
          <Box className={classes.photosBox}>
            <Typography variant='h6' className={classes.photosTitle}>
              Photos
            </Typography>
            <Box className={classes.photos}>
              {trail.Photos.map(photo => (
                <img src={photo.url} className={classes.photo} />
              ))}
            </Box>
            <Button className={classes.addPhotoButton} variant='outlined' elevation={0}>
              <Box className={classes.addPhotoBox}>
                <Typography variant='caption' className={classes.addPhotoText}>
                  <span style={{ margin: 5 }}>
                    <i class='fas fa-camera fa-2x' style={{ color: '#1D72E7' }}></i>
                  </span>
                  Add a Photo
                </Typography>
              </Box>
            </Button>
          </Box>
        </Box>
        <Divider />
        <Box className={classes.reviewSummaryBox}>
          <RatingsChart />
        </Box>
      </Paper>
    </Box>
  );
}
