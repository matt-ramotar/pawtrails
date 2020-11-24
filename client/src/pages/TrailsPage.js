import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTrails } from '../store/trails';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import DataTable from '../components/DataTable';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <>
      <Paper component='form' className={classes.root}>
        <IconButton type='submit' className={classes.iconButton} aria-label='search'>
          <SearchIcon />
        </IconButton>
        <InputBase className={classes.input} placeholder='Enter a city or trail name' />
      </Paper>
      <Button variant='contained' color='success'>
        Search
      </Button>
    </>
  );
}

const TrailsPage = ({ getAllTrailsDispatch, trails }) => {
  const [] = useState([]);
  const [query, setQuery] = useState('');
  const [] = useState({
    name: '',
    city: '',
    difficulty: ['easy', 'moderate', 'hard'],
    length: [0, Infinity],
    elevationGain: [0, Infinity],
    routeType: ['Loop', 'Out & Back', 'Point to Point'],
    tags: [
      'Dogs on leash',
      'Kid friendly',
      'Hiking',
      'Walking',
      'Running',
      'Forest',
      'River',
      'Views',
      'Wild flowers',
      'Wildlife',
      'Muddy',
      'Fee',
      'Nature trips',
      'Cave',
      'Waterfall',
      'Fishing',
      'Mountain biking',
      'Dog friendly',
      'Bugs',
      'Rocky',
      'Bird watching',
      'Over grown',
      'Wheelchair friendly',
      'Stroller friendly',
      'Road biking',
      'Lake',
      'Partially paved',
      'Paved',
      'Beach',
      'City walk',
      'No dogs',
      'Historic site',
      'Rock climbing',
      'Blowdown',
      'No shade',
      'Scramble',
      'Horseback riding',
      'Rails trails',
      'Snowshoeing',
      'Off trail',
      'Backpacking',
      'Snow',
      'Paddle sports',
      'Bike touring',
      'Ohv / off road driving',
      'Washed out',
      'Bridge out',
      'Camping',
      'Closed',
      'Cross country skiing',
      'Skiing',
    ],
  });
  useEffect(
    () => async () => {
      const res = await fetch('/api/trails');
    },
    []
  );

  useEffect(() => {
    getAllTrailsDispatch();
  }, []);

  const params = useParams();
  console.log(params);

  function search(rows) {
    return rows.filter(row => {
      return row.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
  }

  if (!trails) return null;
  // if (!query) return null;

  return (
    <>
      <CustomizedInputBase
        placeholder='Enter a city or trail'
        type='text'
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <div>
        <input type='text' value={query} onChange={e => setQuery(e.target.value)} />
      </div>
      <div>{query ? <DataTable data={search(trails)}></DataTable> : null}</div>

      {/* <div>
        {query
          ? <div data={search(trails)}>
            {/* SearchResults */}
      {/* trails.map(trail => <> <SearchCard data={trail}></SearchCard> </>) */}

      {/*</div> */}
    </>
  );
};

export default function TrailsContainer() {
  const dispatch = useDispatch();
  const getAllTrailsDispatch = () => dispatch(getAllTrails());
  const trails = useSelector(state => state.trails.list);
  return <TrailsPage getAllTrailsDispatch={getAllTrailsDispatch} trails={trails} />;
}
