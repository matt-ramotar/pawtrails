import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Explore from './Explore';
export default function Default() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Switch>
        <Route exact path='/explore' component={Explore} />
      </Switch>
    </div>
  );
}
