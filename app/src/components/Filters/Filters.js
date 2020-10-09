import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Select,
  Slider,
  FormControl,
  Typography,
  Menu,
  Box,
  MenuItem,
  InputLabel,
  FormHelperText,
  Input,
  Chip,
  AppBar,
  Toolbar,
} from '@material-ui/core';

import Tags from './Tags';
import MultipleSelect from '../MultipleSelect';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  stickyBar: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

function getStyles(tag, tags, theme) {
  return {
    fontWeight:
      tags.indexOf(tag) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export function Filters() {
  const classes = useStyles();
  const theme = useTheme();
  const [difficulty, setDifficulty] = useState('');
  const [length, setLength] = useState();
  const [elevationGain, setElevationGain] = useState();
  const [routeType, setRouteType] = useState('');
  const [tags, setTags] = useState([]);

  const updateDifficulty = e => setDifficulty(e.target.value);
  const updateLength = e => setLength(e.target.value);
  const updateElevationGain = e => setElevationGain(e.target.value);
  const updateRouteType = e => setRouteType(e.target.value);
  const updateTags = e => setTags(e.target.value);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {/* <InputLabel id='difficulty-label'>Difficulty</InputLabel> */}
      <Select value={difficulty} onChange={updateDifficulty} labelId='difficulty-label'>
        <MenuItem value={'Easy'}>Easy</MenuItem>
        <MenuItem value={'Moderate'}>Moderate</MenuItem>
        <MenuItem value={'Hard'}>Hard</MenuItem>
      </Select>
      <Typography id='discrete-slider-always'>Length</Typography>
      <Slider value={length} onChange={updateLength} />
      <Typography id='discrete-slider-always'>Elevation Gain</Typography>
      <Slider value={elevationGain} onChange={updateElevationGain} />

      {/* <InputLabel>Route Type</InputLabel> */}
      <Select value={routeType} onChange={updateRouteType} labelId='routeType-label'>
        <MenuItem value={'Easy'}>Easy</MenuItem>
        <MenuItem value={'Moderate'}>Moderate</MenuItem>
        <MenuItem value={'Hard'}>Hard</MenuItem>
      </Select>

      <Select
        labelId='demo-mutiple-chip-label'
        id='demo-mutiple-chip'
        multiple
        value={tags}
        onChange={updateTags}
        input={<Input id='select-multiple-chip' />}
        renderValue={selected => (
          <div className={classes.chips}>
            {selected.map(value => (
              <Chip key={value} label={value} className={classes.chip} />
            ))}
          </div>
        )}
        MenuProps={MenuProps}>
        {Tags.map(tag => (
          <MenuItem key={tag} value={tag} style={getStyles(tag, tags, theme)}>
            {tag}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default function FiltersContainer() {
  const classes = useStyles();
  return (
    <AppBar
      position='sticky'
      style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row' }}
      className={classes.stickyBar}>
      <Toolbar>
        <Filters />
      </Toolbar>
    </AppBar>
  );
}
