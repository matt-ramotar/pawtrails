import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Search from './Search';
import SignupPage from './SignupPage';
import TrailsContainer from './TrailsPage';

export default function Pages() {
  return (
    <>
      <Route path='/login' component={LoginPage}></Route>
      <Route path='/signup' component={SignupPage}></Route>
      <Route path='/trails' component={TrailsContainer}></Route>
      <Route path='/search' component={Search}></Route>
    </>
  );
}
