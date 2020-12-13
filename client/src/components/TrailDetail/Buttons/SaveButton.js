import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Menu, MenuItem, Modal, Paper, Popover, TextField, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addToList, removeFromList } from '../../../store/lists';
import { CssBaseline } from '@material-ui/core';
import { useStyles } from './SaveButton.styles.jsx';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { createList } from '../../../store/lists';

import Picker from 'emoji-picker-react';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default function SaveButton() {
  const trail = useSelector(state => state.trail);
  const user = useSelector(state => state.auth.user);
  const lists = useSelector(state => state.lists);

  const [icon, setIcon] = useState(null);
  const [name, setName] = useState(null);

  const userIsLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
  const [updates, setUpdates] = useState(0);

  const [emojiAnchorEl, setEmojiAnchorEl] = useState(null);

  const openEmojiPopover = e => setEmojiAnchorEl(e.currentTarget);
  const closeEmojiPopover = () => setEmojiAnchorEl(null);

  const dispatch = useDispatch();
  const classes = useStyles();

  const openListMenu = e => setAnchorEl(e.currentTarget);

  const closeListMenu = () => setAnchorEl(null);

  const openPopover = e => setPopoverAnchorEl(e.currentTarget);
  const closePopover = () => setPopoverAnchorEl(null);

  const onEmojiClick = (event, emojiObject) => {
    setIcon(emojiObject.emoji);
    handleClose();
  };

  const handleSaveToList = (userId, trailId, listId) => () => {
    if (lists.lookup[listId][trail.cityId][trailId]) {
      dispatch(removeFromList(userId, trailId, listId));
    } else {
      dispatch(addToList(userId, trailId, listId));
    }
    closeListMenu();
  };

  const handleCreateNewList = userId => () => {
    console.log('need to create new list with name', name, 'icon', icon);
    dispatch(createList({ userId, name, icon }));
    setUpdates(updates + 1);
    setName(null);
    setIcon(null);
    closePopover();
  };

  const handleClose = () => {
    setUpdates(updates + 1);
  };

  if (!userIsLoggedIn) {
    return (
      <Box className={classes.root}>
        <Button disabled className={classes['button--disabled']}>
          <i class='far fa-bookmark fa-lg' style={{ color: '#757575' }}></i>
        </Button>
        <Typography variant='body2' className={classes['label--disabled']}>
          Save
        </Typography>
      </Box>
    );
  }

  const listsToDisplay = [...lists.lists, { name: 'Create New List' }];

  return (
    <Box className={classes.root}>
      <Button onClick={openListMenu} className={classes.button}>
        <i class='far fa-bookmark fa-lg' style={{ color: '#ffffff' }}></i>
      </Button>

      <ThemeProvider theme={theme}>
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={closeListMenu}
          classes={{ paper: classes.menu, root: classes.menu }}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          transformOrigin={{ horizontal: 'center' }}>
          {listsToDisplay.map(list => (
            <MenuItem
              onClick={list.name === 'Create New List' ? openPopover : handleSaveToList(user.id, trail.id, list.id)}
              style={{ padding: 5, margin: 0 }}>
              <Typography variant='body2' style={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '0.8rem' }}>
                {list.name === 'Create New List' ? `➕ ${list.name}` : `${list.icon} ${list.name}`}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <Popover
          open={Boolean(popoverAnchorEl)}
          anchorEl={popoverAnchorEl}
          onClose={closePopover}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'Roboto',
              color: '#212121',
              padding: 5,
            }}>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TextField
                InputProps={{ disableUnderline: true }}
                placeholder='💪'
                value={icon}
                onChange={e => setIcon(e.target.value)}
                style={{ width: 25, margin: 5 }}></TextField>

              <TextField
                InputProps={{ disableUnderline: true, fontWeight: 'bold' }}
                placeholder='Completed'
                value={name}
                onChange={e => setName(e.target.value)}
                style={{ width: 80, margin: 5 }}></TextField>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  margin: 5,
                }}>
                <Button
                  onClick={openEmojiPopover}
                  style={{
                    minWidth: 25,
                    minHeight: 25,
                    maxHeight: 25,
                    maxWidth: 25,
                    borderRadius: '50%',
                  }}>
                  <span style={{ fontSize: '1.25rem' }}>😀</span>
                </Button>
              </Box>

              <Button
                disabled={name && icon ? false : true}
                onClick={handleCreateNewList(user.id)}
                style={{
                  backgroundColor: name && icon ? '#1D72E7' : '#eeeeee',
                  color: name ? '#ffffff' : '#bdbdbd',

                  minHeight: 25,
                  maxHeight: 25,
                  margin: 5,
                }}>
                <Box
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <i class='fas fa-plus' style={{ color: name && icon ? '#ffffff' : '#757575' }}></i>
                  <Typography
                    variant='body2'
                    style={{ color: name && icon ? '#ffffff' : '#757575', fontSize: '0.8rem' }}>
                    Create
                  </Typography>
                </Box>
              </Button>
            </Box>

            <Popover
              open={Boolean(emojiAnchorEl)}
              anchorEl={emojiAnchorEl}
              onClose={closeEmojiPopover}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}>
              <Picker onEmojiClick={onEmojiClick} />
            </Popover>
          </Box>
        </Popover>
      </ThemeProvider>

      <Typography variant='body2' className={classes.label}>
        Save
      </Typography>
    </Box>
  );
}
