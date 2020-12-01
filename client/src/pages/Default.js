import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Explore from './Explore';
import BottomSlider from '../components/BottomSlider';
export default function Default() {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <Sidebar />
      <Navbar />
      <BottomSlider />
      <Switch>
        <Route path='/' component={Explore} />
      </Switch>
    </div>
  );
}
