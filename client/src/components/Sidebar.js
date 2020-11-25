import React from 'react';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import App from '../App';

import SearchInput from './SearchInput';
export const sidebarWidth = 500;

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: sidebarWidth,
    backgroundColor: '#f5f5f5',
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  return (
    <div>
      <Drawer variant='permanent' anchor='left' classes={{ paper: classes.drawerPaper }}>
        <div>
          <SearchInput />
        </div>
        <div>
          <h1>Paw Trails</h1>
        </div>
      </Drawer>
    </div>
  );
}
