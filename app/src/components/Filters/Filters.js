import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
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
import { setFilters } from '../../store/filters';
import InputSlider from './SliderWithInputField';

const useStyles = makeStyles(theme => ({
  root: {},
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

export function Filters({ filtersDispatcher }) {
  const classes = useStyles();
  const theme = useTheme();
  const [difficulty, setDifficulty] = useState('');
  const [length, setLength] = useState();
  const [elevationGain, setElevationGain] = useState();
  const [routeType, setRouteType] = useState('');
  const [tags, setTags] = useState([]);
  const [slider, setSlider] = useState(0);
  const [filters, setFilters] = useState({});

  const updateDifficulty = e => {
    setDifficulty(e.target.value);
    updateFilters({ difficulty: e.target.value });
  };
  const updateLength = (e, val) => {
    setLength(val);
    updateFilters({ length: val });
  };
  const updateElevationGain = (e, val) => {
    setElevationGain(val);
    updateFilters({ elevationGain: val });
  };
  const updateRouteType = e => {
    setRouteType(e.target.value);
    updateFilters({ routeType: e.target.value });
  };
  const updateTags = e => {
    setTags(e.target.value);
    updateFilters({ tags: e.target.value });
  };
  const updateSlider = (e, val) => {
    setSlider(val);
    updateFilters({ slider: val });
  };
  const updateFilters = filter => {
    setFilters({ ...filters, ...filter });
  };

  useEffect(() => {
    filtersDispatcher(filters);
  }, [filters]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {/* <InputLabel id='difficulty-label'>Difficulty</InputLabel> */}
      <Select
        value={difficulty}
        onChange={updateDifficulty}
        labelId='difficulty-label'
        style={{ width: '150px' }}>
        <MenuItem value={'Easy'}>Easy</MenuItem>
        <MenuItem value={'Moderate'}>Moderate</MenuItem>
        <MenuItem value={'Hard'}>Hard</MenuItem>
      </Select>
      <Typography id='discrete-slider-always'>Length</Typography>
      <Slider value={length} onChange={updateLength} style={{ width: '100px' }} />
      <Typography id='discrete-slider-always'>Elevation Gain</Typography>
      <Slider value={elevationGain} onChange={updateElevationGain} style={{ width: '100px' }} />

      {/* <InputLabel>Route Type</InputLabel> */}
      <Select
        value={routeType}
        onChange={updateRouteType}
        labelId='routeType-label'
        style={{ width: '150px' }}>
        <MenuItem value={'Loop'}>Loop</MenuItem>
        <MenuItem value={'Out & Back'}>Out & Back</MenuItem>
        <MenuItem value={'Point to Point'}>Point to Point</MenuItem>
      </Select>

      <Select
        labelId='demo-mutiple-chip-label'
        id='demo-mutiple-chip'
        multiple
        value={tags}
        onChange={updateTags}
        input={<Input id='select-multiple-chip' />}
        style={{ width: '100%' }}
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
  const dispatch = useDispatch();
  const filtersDispatcher = filters => dispatch(setFilters(filters));
  return (
    <AppBar
      position='sticky'
      style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row' }}
      className={classes.stickyBar}>
      <Toolbar>
        <Filters filtersDispatcher={filtersDispatcher} />
      </Toolbar>
    </AppBar>
  );
}
