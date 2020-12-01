import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTags, addTag, removeTag } from '../../store/filters';
import { listTags } from '../../store/tags';
import {
  Box,
  Button,
  Chip,
  FormControlLabel,
  FormControl,
  FormLabel,
  Menu,
  Radio,
  RadioGroup,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  custom: {
    width: 700,
    backgroundColor: '#ffffff',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
}));

export default function TagsFilter() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [tags, setTags] = useState([]);
  const [updates, setUpdates] = useState(0);
  const [selected, setSelected] = useState({});

  const classes = useStyles();
  useEffect(() => {
    (async () => {
      const tags = await listTags();
      setTags(tags);
    })();
  }, []);

  const handleChange = tag => (event, value) => {
    const nextSelected = selected;
    setUpdates(updates + 1);

    if (tag in selected) {
      delete nextSelected[tag];
      setSelected(nextSelected);
      dispatch(removeTag(tag, selected));
    } else {
      nextSelected[tag] = true;
      setSelected(nextSelected);
      dispatch(addTag(tag, selected));
    }
  };

  const handleClick = event => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <Box>
      <Button
        onClick={handleClick}
        style={{
          fontSize: 16,
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          backgroundColor: '#ffffff',
          marginLeft: 8,
          marginTop: 8,
        }}>
        <span style={{ fontSize: '1.5rem' }}>🏷️</span> Tags
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} classes={{ paper: classes.custom }}>
        {tags.map(tag => (
          <Chip
            label={tag}
            onClick={handleChange(tag)}
            clickable
            variant='outlined'
            size='small'
            style={
              tag in selected
                ? {
                    borderColor: '#81c784',
                    backgroundColor: '#81c784',
                    fontFamily: 'Roboto',
                    fontWeight: 'bold',
                    margin: 2,
                    color: '#212121',
                  }
                : {
                    borderColor: '#616161',
                    backgroundColor: '#ffffff',
                    fontFamily: 'Roboto',
                    margin: 2,
                    color: '#414141',
                  }
            }
          />
        ))}
      </Menu>
    </Box>
  );
}
