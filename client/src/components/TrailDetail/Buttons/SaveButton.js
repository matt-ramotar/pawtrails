import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Menu, MenuItem, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addToList, removeFromList } from '../../../store/lists';

import { useStyles } from './SaveButton.styles.jsx';

export default function SaveButton() {
  const trail = useSelector(state => state.trail);
  const user = useSelector(state => state.auth.user);
  const lists = useSelector(state => state.lists);

  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (Object.keys(user).length > 0) setUserIsLoggedIn(true);
  }, [user]);

  const openListMenu = e => setAnchorEl(e.currentTarget);

  const closeListMenu = () => setAnchorEl(null);

  const handleSaveToList = (userId, trailId, listId) => () => {
    if (lists.lookup[listId][trail.cityId][trailId]) {
      dispatch(removeFromList(userId, trailId, listId));
    } else {
      dispatch(addToList(userId, trailId, listId));
    }
    closeListMenu();
  };

  return (
    <Box className={classes.root}>
      {userIsLoggedIn ? (
        <Button onClick={openListMenu} className={classes.button}>
          <i class='far fa-bookmark fa-lg' style={{ color: '#ffffff' }}></i>
        </Button>
      ) : (
        <Button disabled className={classes.button__disabled}>
          <i class='far fa-bookmark fa-lg' style={{ color: '#757575' }}></i>
        </Button>
      )}

      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={closeListMenu}
        classes={{ paper: classes.menu }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        transformOrigin={{ horizontal: 'center' }}>
        {lists.lists.map(list => (
          <MenuItem onClick={handleSaveToList(user.id, trail.id, list.id)} style={{ padding: 5, margin: 0 }}>
            <Typography variant='body2' style={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '0.8rem' }}>
              {list.name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
      <Typography variant='body2' className={userIsLoggedIn ? classes.label : classes.label__disabled}>
        Save
      </Typography>
    </Box>
  );
}
