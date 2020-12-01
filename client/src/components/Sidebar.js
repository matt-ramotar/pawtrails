import React from 'react';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import SearchInput from './SearchInput';
import Trails from './Trails';
import TrailDetail from './TrailDetail';
import Filters from './Filters';
import dogs from '../images/dogs.png';

export const sidebarWidth = 500;

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: sidebarWidth,
    backgroundColor: 'transparent',
    border: 'none',
  },
  searchBox: {
    position: 'relative',
    marginTop: 50,
  },
  logo: {
    width: 100,
    margin: 0,
    position: 'absolute',
    top: -55,
    right: 20,
    zIndex: 1,
  },
  inputBox: {
    position: 'absolute',
    top: 0,
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  return (
    <Box>
      <Drawer variant='permanent' anchor='left' classes={{ paper: classes.drawerPaper }}>
        <Box className={classes.searchBox}>
          <img src={dogs} className={classes.logo} />
          <SearchInput className={classes.inputBox} />
        </Box>

        <Box>
          <Filters />
        </Box>

        <Box>
          <TrailDetail />
        </Box>
      </Drawer>
    </Box>
  );
}
