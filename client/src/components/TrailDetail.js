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
  contentBox: {
    maxHeight: 500,
    overflowY: 'auto',
  },
  aboutBox: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  aboutDescriptionBox: {
    width: '80%',
  },
  aboutDescription: {
    fontFamily: 'Roboto',
    fontSize: '.75rem',
  },

  photosBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  photosTitle: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '.85rem',
    alignSelf: 'flex-start',
  },
  photos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '100%',
    overflowX: 'scroll',
  },
  photo: {
    width: 120,
    height: 80,
    borderRadius: 10,
    margin: 5,
  },

  addPhotoButton: {
    backgroundColor: '#ffffff',
    borderColor: '#e0e0e0',
    boxShadow: 'none',
    borderRadius: 10,
    justifySelf: 'center',
  },
  addPhotoBox: { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  addPhotoText: {
    color: '#212121',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '.7rem',
  },
}));

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
      </Paper>
    </Box>
  );
}
