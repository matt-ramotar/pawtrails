import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Card, Chip, Divider, Menu, MenuItem, Paper, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { loadTrailReviews } from '../store/reviews';
import { useStyles } from './TrailDetailStyle';
import RatingsChart from '../charts/RatingsChart';
import WriteReviewButton from './WriteReviewButton';
import ReviewCard from './ReviewCard';
import calcAvgRating from '../helpers/calcAvgRating';
import Rating from '@material-ui/lab/Rating';
import { setReviewForm } from '../store/views';
import { loadLists, addToList, removeFromList } from '../store/lists';

export default function TrailDetail() {
  const trail = useSelector(state => state.trail);
  const user = useSelector(state => state.auth.user);
  const lists = useSelector(state => state.lists);
  const userIsLoggedIn = Object.keys(user).length > 0;

  const [updates, setUpdates] = useState(0);
  const dispatch = useDispatch();

  const [avgRating, setAvgRating] = useState(null);
  const [numOfReviews, setNumOfReviews] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles();

  const openReviewModal = () => {
    dispatch(setReviewForm(true));
  };

  const openListMenu = e => setAnchorEl(e.currentTarget);

  const closeListMenu = () => setAnchorEl(null);

  const handleSaveToList = (userId, trailId, listId) => e => {
    if (lists.lookup[listId][trail.cityId][trailId]) {
      dispatch(removeFromList(userId, trailId, listId));
    } else {
      dispatch(addToList(userId, trailId, listId));
    }
    setUpdates(updates + 1);
    closeListMenu();
  };

  useEffect(() => {
    if (trail.TrailSummary) {
      setAvgRating(calcAvgRating(trail.TrailSummary.summary.counts));
      setNumOfReviews(trail.TrailSummary.summary.counts.reviews._total);
    }
  }, [trail]);

  useEffect(() => {
    if (user) dispatch(loadLists(user.id));
    console.log('loaded list');
  }, [updates]);

  if (Object.keys(trail).length === 0) return null;

  const trailConditionsArray = Object.entries(trail.TrailSummary.summary.counts.trailConditions);
  trailConditionsArray.unshift(['All']);

  if (!avgRating) return null;

  return (
    <Box id='detail-box'>
      <Paper style={{ width: '80%', maxHeight: '100%', marginLeft: '2.5%', marginTop: 50 }}>
        <Box className={classes.headerBox}>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 5,
              alignItems: 'flex-start',
            }}>
            <Typography variant='h5' className={classes.headerTitle}>
              <span style={{ fontSize: '2rem', fontFamily: 'Roboto' }}>📍</span>
              {trail.name}
            </Typography>
            <Button>
              <Typography variant='h5' className={classes.headerTitle}>
                <span style={{ fontSize: '1.5rem', fontFamily: 'Roboto', marginLeft: 10 }}>
                  {userIsLoggedIn ? (lists.lookup[lists.lists[0].id][trail.cityId][trail.id] ? `❤️` : `🤍`) : null}
                </span>
              </Typography>
            </Button>
          </Box>
          <Box className={classes.headerRatingBox}>
            <Typography variant='caption'>{avgRating}</Typography>
            <Box className={classes.stars}>
              <Rating value={avgRating} readOnly size='small' />
            </Box>
            <Typography variant='caption'>{`(${numOfReviews})`}</Typography>
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
            <Button
              disabled={userIsLoggedIn ? false : true}
              onClick={userIsLoggedIn ? openListMenu : null}
              className={userIsLoggedIn ? classes.actionButton : classes.actionButton__disabled}>
              <i class='far fa-bookmark fa-lg' style={{ color: userIsLoggedIn ? '#ffffff' : '#757575' }}></i>
            </Button>
            <Menu
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={closeListMenu}
              classes={{ paper: classes.custom }}>
              {userIsLoggedIn
                ? lists.lists.map(list => (
                    <MenuItem onClick={handleSaveToList(user.id, trail.id, list.id)} style={{ padding: 5, margin: 0 }}>
                      <Typography
                        variant='body2'
                        style={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '0.8rem' }}>
                        {list.name}
                      </Typography>
                    </MenuItem>
                  ))
                : null}
            </Menu>
            <Typography
              variant='body2'
              className={userIsLoggedIn ? classes.actionLabel : classes.actionLabel__disabled}>
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
            <Button onClick={openReviewModal} className={classes.actionButton}>
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

          <Divider />
          <Box className={classes.reviewSummaryBox}>
            <Typography variant='h6' className={classes.photosTitle}>
              Review summary
            </Typography>
            <Box className={classes.ratingSummaryBox}>
              <RatingsChart counts={trail.TrailSummary.summary.counts} />
              <Box className={classes.avgRatingBox}>
                <Typography variant='h2' className={classes.avgRating}>
                  {calcAvgRating(trail.TrailSummary.summary.counts)}
                </Typography>
                <Box className={classes.stars}>
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
