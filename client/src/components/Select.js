import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const cities = [
  {
    id: 1,
    name: 'Atlanta',
    state: 'Georgia',
    createdAt: '2020-10-02T17:10:37.479Z',
    updatedAt: '2020-10-02T17:10:37.479Z',
  },
  {
    id: 2,
    name: 'Austin',
    state: 'Texas',
    createdAt: '2020-10-02T17:10:37.479Z',
    updatedAt: '2020-10-02T17:10:37.479Z',
  },
  {
    id: 3,
    name: 'Baltimore',
    state: 'Maryland',
    createdAt: '2020-10-02T17:10:37.479Z',
    updatedAt: '2020-10-02T17:10:37.479Z',
  },
  {
    id: 4,
    name: 'Boise',
    state: 'Idaho',
    createdAt: '2020-10-02T17:10:37.479Z',
    updatedAt: '2020-10-02T17:10:37.479Z',
  },
  {
    id: 5,
    name: 'Boston',
    state: 'Massachusetts',
    createdAt: '2020-10-02T17:10:37.479Z',
    updatedAt: '2020-10-02T17:10:37.479Z',
  },
  {
    id: 6,
    name: 'Boulder',
    state: 'Colorado',
    createdAt: '2020-10-02T17:10:37.479Z',
    updatedAt: '2020-10-02T17:10:37.479Z',
  },
  {
    id: 7,
    name: 'Chicago',
    state: 'Illinois',
    createdAt: '2020-10-02T17:10:37.479Z',
    updatedAt: '2020-10-02T17:10:37.479Z',
  },
  {
    id: 8,
    name: 'Denver',
    state: 'Colorado',
    createdAt: '2020-10-02T17:10:37.479Z',
    updatedAt: '2020-10-02T17:10:37.479Z',
  },
  {
    id: 9,
    name: 'Los Angeles',
    state: 'California',
    createdAt: '2020-10-02T17:10:37.479Z',
    updatedAt: '2020-10-02T17:10:37.479Z',
  },
  {
    id: 10,
    name: 'New York City',
    state: 'New York',
    createdAt: '2020-10-02T17:10:37.479Z',
    updatedAt: '2020-10-02T17:10:37.479Z',
  },
  {
    id: 11,
    name: 'Philadelphia',
    state: 'Pennsylvania',
    createdAt: '2020-10-02T17:10:37.479Z',
    updatedAt: '2020-10-02T17:10:37.479Z',
  },
  {
    id: 12,
    name: 'Portland',
    state: 'Oregon',
    createdAt: '2020-10-02T17:10:37.479Z',
    updatedAt: '2020-10-02T17:10:37.479Z',
  },
  {
    id: 13,
    name: 'Salt Lake City',
    state: 'Utah',
    createdAt: '2020-10-02T17:10:37.479Z',
    updatedAt: '2020-10-02T17:10:37.479Z',
  },
  {
    id: 14,
    name: 'San Francisco',
    state: 'California',
    createdAt: '2020-10-02T17:10:37.479Z',
    updatedAt: '2020-10-02T17:10:37.479Z',
  },
  {
    id: 15,
    name: 'Seattle',
    state: 'Washington',
    createdAt: '2020-10-02T17:10:37.479Z',
    updatedAt: '2020-10-02T17:10:37.479Z',
  },
];

export default function SimpleSelect() {
  const classes = useStyles();
  const [city, setCity] = React.useState('');

  const handleChange = event => {
    setCity(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <FormControl variant='filled' className={classes.formControl}>
          <InputLabel id='demo-simple-select-filled-label'>Age</InputLabel>
          <Select
            labelId='demo-simple-select-filled-label'
            id='demo-simple-select-filled'
            value={city}
            onChange={handleChange}>
            {cities.map(city => (
              <MenuItem value={city.id}>{city.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </form>
  );
}
