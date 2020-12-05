import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  Chip,
  Divider,
  Menu,
  Modal,
  Paper,
  Popover,
  TextField,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useStyles } from './ReviewFormStyle';
import Rating from '@material-ui/lab/Rating';
import { createReview } from '../store/reviews';
import { setReviewForm } from '../store/views';

const trailConditionsArray = [
  'Great!',
  'Blowdown',
  'Bridge out',
  'Bugs',
  'Closed',
  'Fee',
  'Flooded',
  'Icy',
  'Muddy',
  'No shade',
  'Off trail',
  'Over grown',
  'Private property',
  'Rocky',
  'Scramble',
  'Snow',
  'Washed out',
];

const emojiArray = [
  '🐾',
  '💯',
  '🆒',
  '🌄',
  '🌋',
  '🌞',
  '🌇',
  '🏔️',
  '🌊',
  '🌌',
  '🚵',
  '🌼',
  '🎉',
  '😫',
  '🍺',
  '🐕',
  '🔥',
  '⛺',
  '🌡️',
  '🙌',
  '👍',
  '💩',
  '🗑️',
  '🦝',
  '🥴',
  '🐺',
  '🐻',
  '🦌',
  '🌲',
  '❤️',
  '💪',
  '🏃',
];

export default function ReviewForm() {
  const classes = useStyles();
  const trail = useSelector(state => state.trail);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const [rating, setRating] = useState(null);
  const [tags, setTags] = useState({});
  const [userTags, setUserTags] = useState({});
  const [trailConditions, setTrailConditions] = useState({});
  const [photos, setPhotos] = useState({});
  const [counter, setCounter] = useState(0);
  const [reviewBody, setReviewBody] = useState('');
  const [reactions, setReactions] = useState({});

  const [anchorElPhoto, setAnchorElPhoto] = useState(null);
  const [anchorElReactions, setAnchorElReactions] = useState(null);
  const [anchorElTrailConditions, setAnchorElTrailConditions] = useState(null);
  const [anchorElTags, setAnchorElTags] = useState(null);
  const [anchorElTagFriend, setAnchorElTagFriend] = useState(null);

  const updateRating = (event, newVal) => setRating(newVal);

  const handleTrailConditionClick = trailCondition => (event, val) => {
    const newTrailConditions = trailConditions;
    if (trailCondition in trailConditions) delete newTrailConditions[trailCondition];
    else newTrailConditions[trailCondition] = true;

    setTrailConditions(newTrailConditions);
    setCounter(counter + 1);
  };

  const handleReactionClick = reaction => (event, val) => {
    const newReactions = reactions;

    console.log(reaction);

    if (reaction in reactions) delete newReactions[reaction];
    else newReactions[reaction] = true;

    console.log(newReactions);

    setReactions(newReactions);
    setCounter(counter + 1);
  };

  const handleClose = () => dispatch(setReviewForm(false));

  const handleSubmit = () => {
    const review = {
      userId: user.id,
      trailId: trail.id,
      date: new Date(),
      rating,
      body: reviewBody,
      photos,
      userTags,
      reactions,
      trailConditions,
    };
    dispatch(createReview(review));
    handleClose();
  };

  return (
    <Box className={classes.root}>
      <Paper className={classes.mainPaper}>
        <Box className={classes.headerBox}>
          <Typography variant='h5' className={classes.title}>
            {trail.name}
          </Typography>
          <Button className={classes.closeButton} onClick={handleClose}>
            <Box className={classes.closeButtonBox}>
              <i class='fas fa-times fa-2x' style={{ color: '#212121' }}></i>
            </Box>
          </Button>
        </Box>
        <Divider className={classes.divider} />
        <Box className={classes.userBox}>
          <Box className={classes.userAvatarBox}>
            <img src={user.photo} style={{ borderRadius: '50%', width: 40 }} />
          </Box>
          <Box className={classes.userDetailsBox}>
            <Box className={classes.userNameBox}>{`${user.firstName} ${user.lastName}`}</Box>
            <Box className={classes.postingPubliclyBox}>
              <Typography variant='body2'>Posting publicly</Typography>
              <i class='fas fa-info-circle' style={{ color: '#bdbdbd', marginLeft: 2 }}></i>
            </Box>
          </Box>
        </Box>
        <Box className={classes.formBox}>
          <Box className={classes.ratingBox}>
            <Rating value={rating} onChange={updateRating} size='large' />
          </Box>
          <Box className={classes.reviewBodyBox}>
            <Box>
              {/* <Typography>
                <span style={{ fontSize: '1.5rem' }}>✍️</span>
              </Typography> */}
            </Box>
            <TextField
              placeholder='Share details of your own experience on this trail'
              style={{ width: '100%' }}
              multiline
              rows={4}
              disableUnderline={true}
              InputProps={{ disableUnderline: true }}
              onChange={e => setReviewBody(e.target.value)}></TextField>
          </Box>

          <Box className={classes.addToPostBox}>
            <Typography variant='body2' style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
              Add To Your Review
            </Typography>
            <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Box className={classes.addPhotoBox}>
                <Tooltip title='Photos' placement='top'>
                  <Button
                    style={{
                      maxWidth: 40,
                      minWidth: 40,
                      maxHeight: 40,
                      minHeight: 40,
                      borderRadius: '50%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',

                      backgroundColor: Object.keys(photos).length > 0 ? '#D7E5C9' : 'transparent',
                    }}
                    className={classes.addPhotoButton}
                    onClick={e => setAnchorElPhoto(e.currentTarget)}>
                    <i class='fas fa-images fa-lg' style={{ color: '#41B35E' }}></i>
                  </Button>
                </Tooltip>
                <Menu anchorEl={anchorElPhoto} open={Boolean(anchorElPhoto)} onClose={e => setAnchorElPhoto(null)}>
                  Coming Soon
                </Menu>
              </Box>

              <Box className={classes.addPhotoBox}>
                <Tooltip title='Tag Friends' placement='top'>
                  <Button
                    style={{
                      maxWidth: 40,
                      minWidth: 40,
                      maxHeight: 40,
                      minHeight: 40,
                      borderRadius: '50%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',

                      backgroundColor: Object.keys(userTags).length > 0 ? '#e3f4ff' : 'transparent',
                    }}
                    className={classes.addPhotoButton}
                    onClick={e => setAnchorElTagFriend(e.currentTarget)}>
                    <i class='fas fa-user-tag fa-lg' style={{ color: '#1D72E7' }}></i>
                  </Button>
                </Tooltip>
                <Menu
                  anchorEl={anchorElTagFriend}
                  open={Boolean(anchorElTagFriend)}
                  onClose={e => setAnchorElTagFriend(null)}>
                  Coming Soon
                </Menu>
              </Box>

              <Box className={classes.addPhotoBox}>
                <Tooltip title='Reactions' placement='top'>
                  <Button
                    onClick={e => setAnchorElReactions(e.currentTarget)}
                    style={{
                      maxWidth: 40,
                      minWidth: 40,
                      maxHeight: 40,
                      minHeight: 40,
                      borderRadius: '50%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',

                      backgroundColor: Object.keys(reactions).length > 0 ? '#ffecb3' : 'transparent',
                    }}>
                    <i class='far fa-grin-alt fa-lg' style={{ color: '#ECB945' }}></i>
                  </Button>
                </Tooltip>

                <Menu
                  anchorEl={anchorElReactions}
                  open={Boolean(anchorElReactions)}
                  onClose={e => setAnchorElReactions(null)}
                  classes={{ paper: classes.menu }}>
                  <Box className={classes.menuBox}>
                    <Box>
                      {emojiArray.map(emoji => (
                        <Chip
                          style={{
                            width: 50,
                            height: 50,
                            margin: 0,
                            borderRadius: '50%',
                            backgroundColor: emoji in reactions ? '#FFECB3' : 'transparent',
                          }}
                          clickable
                          onClick={handleReactionClick(emoji)}
                          label={<Typography style={{ fontSize: '1.75rem' }}>{emoji}</Typography>}
                        />
                      ))}
                    </Box>
                  </Box>
                </Menu>
              </Box>

              <Box className={classes.addPhotoBox}>
                <Tooltip title='Trail Conditions' placement='top'>
                  <Button
                    style={{
                      maxWidth: 40,
                      minWidth: 40,
                      maxHeight: 40,
                      minHeight: 40,
                      borderRadius: '50%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',

                      backgroundColor: Object.keys(trailConditions).length > 0 ? '#EFC2C6' : 'transparent',
                    }}
                    className={classes.actionButton}
                    onClick={e => setAnchorElTrailConditions(e.currentTarget)}>
                    <i class='fas fa-tags fa-lg' style={{ color: '#E8513B' }}></i>
                  </Button>
                </Tooltip>
                <Menu
                  anchorEl={anchorElTrailConditions}
                  open={Boolean(anchorElTrailConditions)}
                  onClose={e => setAnchorElTrailConditions(null)}
                  classes={{ paper: classes.menu }}>
                  <Box className={classes.menuBox}>
                    {trailConditionsArray.map(trailCondition => (
                      <Chip
                        clickable
                        label={trailCondition}
                        onClick={handleTrailConditionClick(trailCondition)}
                        style={{ margin: 2, backgroundColor: trailConditions[trailCondition] ? '#1D72E7' : '#f5f5f5' }}
                      />
                    ))}
                  </Box>
                </Menu>
              </Box>
            </Box>
          </Box>

          <Box className={classes.actionButtonsBox}>
            <Button
              disabled={reviewBody && rating ? false : true}
              style={{
                backgroundColor: reviewBody && rating ? '#1D72E7' : '#eeeeee',
                color: reviewBody ? '#ffffff' : '#bdbdbd',
                width: '100%',
                marginTop: 10,
                marginBottom: 10,
              }}
              onClick={handleSubmit}>
              <Typography>Post</Typography>
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
