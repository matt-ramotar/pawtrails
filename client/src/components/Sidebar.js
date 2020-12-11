import React from 'react';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import SearchInput from './SearchInput';
import TrailDetail from './TrailDetail';
import Filters from './Filters';

export const sidebarWidth = 500;

const useStyles = makeStyles(theme => ({
  custom: {
    width: sidebarWidth,
    backgroundColor: 'transparent',
    border: 'none',
  },
  searchBox: {
    position: 'relative',
    marginTop: 0,
  },
  logo: {
    margin: 0,
    position: 'absolute',
    top: 0,
    right: 135,
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
      <Drawer variant='permanent' anchor='left' classes={{ paper: classes.custom }}>
        <Box className={classes.searchBox}>
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
