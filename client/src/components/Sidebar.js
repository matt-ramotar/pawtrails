import React from 'react';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import SearchInput from './SearchInput';
import Trails from './Trails';
import TrailDetail from './TrailDetail';
import Filters from './Filters';

export const sidebarWidth = 500;

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: sidebarWidth,
    backgroundColor: 'transparent',
    border: 'none',
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  return (
    <Box>
      <Drawer variant='permanent' anchor='left' classes={{ paper: classes.drawerPaper }}>
        <Box>
          <SearchInput />
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
