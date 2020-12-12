import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Menu, MenuItem, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addToList, removeFromList } from '../../../store/lists';
import { CssBaseline } from '@material-ui/core';
import { useStyles } from './SaveButton.styles.jsx';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default function SaveButton() {
  const trail = useSelector(state => state.trail);
  const user = useSelector(state => state.auth.user);
  const lists = useSelector(state => state.lists);

  const userIsLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const classes = useStyles();

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

  const handleCreateNewList = userId => {
    console.log(userId);
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
              onClick={
                list.name === 'Create New List'
                  ? handleCreateNewList(user.id)
                  : handleSaveToList(user.id, trail.id, list.id)
              }
              style={{ padding: 5, margin: 0 }}>
              <Typography variant='body2' style={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '0.8rem' }}>
                {list.name === 'Create New List' ? `➕ ${list.name}` : `${list.icon} ${list.name}`}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </ThemeProvider>

      <Typography variant='body2' className={classes.label}>
        Save
      </Typography>
    </Box>
  );
}
