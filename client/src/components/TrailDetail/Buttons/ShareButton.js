import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Popover, Typography } from '@material-ui/core';
import fb from './fb.svg';
import twitter from './twitter.svg';

import { useStyles } from './ShareButton.styles.jsx';
import { FacebookShareButton, RedditShareButton, TwitterShareButton, RedditIcon } from 'react-share';

export default function ShareButton() {
  const classes = useStyles();

  const trail = useSelector(state => state.trail);

  const userIsLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenPopover = event => {
    setPopoverIsOpen(true);
    setAnchorEl(event.currentTarget);
  };
  const handleClosePopover = () => setPopoverIsOpen(false);

  return (
    <Box className={classes.root}>
      <Button onClick={handleOpenPopover} className={classes.button}>
        <i class='fas fa-share fa-lg' style={{ color: '#ffffff' }}></i>
      </Button>

      <Popover
        open={popoverIsOpen}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'center', horizontal: 'center' }}
        anchorPosition={{ top: 400, right: 400 }}
        onClose={handleClosePopover}
        PaperProps={{ classes: { root: classes.popover } }}>
        <Box className={classes.icons__box}>
          <Box>
            <FacebookShareButton
              url={`https://matt-ramotar-pawtrails.herokuapp.com`}
              quote={trail.name}
              hashtag={'#pawtrails'}>
              <img src={fb} width='48px' />
            </FacebookShareButton>
          </Box>

          <Box>
            <TwitterShareButton
              url={`https://matt-ramotar-pawtrails.herokuapp.com`}
              title={trail.name}
              via={'PawTrails'}
              hashtags={trail.Tags.map(tag => tag.tag.toLowerCase().replace(' ', '-'))}>
              <img src={twitter} width='48px' />
            </TwitterShareButton>
          </Box>

          <Box>
            <RedditShareButton url={`https://matt-ramotar-pawtrails.herokuapp.com`}>
              <RedditIcon size={44} round={true} bgStyle={{ fill: '#F94503' }} />
            </RedditShareButton>
          </Box>
        </Box>
      </Popover>
      <Typography variant='body2' className={classes.label}>
        Share
      </Typography>
    </Box>
  );
}
