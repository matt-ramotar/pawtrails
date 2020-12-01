import React from 'react';
import { AppBar } from '@material-ui/core';
import { sidebarWidth } from './Sidebar';

export default function Navbar() {
  return (
    <div>
      <AppBar
        position='fixed'
        style={{
          backgroundColor: 'transparent',
          width: `calc(100% - ${sidebarWidth}px)`,
          height: '81px',
          marginLeft: sidebarWidth,
          boxShadow: 'none',
        }}></AppBar>
    </div>
  );
}
