import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFavorites } from '../../store/filters';
import {
  Box,
  Button,
  FormControlLabel,
  FormControl,
  FormLabel,
  Menu,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';

export default function FavoritesFilter() {
  const user = useSelector(state => state.auth.user);
  const userIsLoggedIn = Object.keys(user).length > 0;
  const [value, setValue] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setFavorites(value));
    setValue(!value);
  };

  if (!userIsLoggedIn) return null;

  return (
    <Box>
      <Button
        onClick={handleClick}
        style={{
          fontSize: 14,
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          backgroundColor: value ? '#ffffff' : '#ffebee',
          marginLeft: 5,
          marginTop: 5,
          color: '#212121',
        }}>
        <span style={{ fontSize: '1.5rem' }}>❤️</span> Favorites
      </Button>
    </Box>
  );
}
