import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

export default function Pages() {
  return (
    <>
      <Route path='/login' component={LoginPage}></Route>
      <Route path='/signup' component={SignupPage}></Route>
    </>
  );
}
