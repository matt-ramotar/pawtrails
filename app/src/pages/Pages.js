import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Search from './Search';
import SignupPage from './SignupPage';
import TrailDetailContainer from './TrailDetail';
import TrailsContainer from './TrailsPage';
import CreateReviewFormContainer from '../components/CreateReviewForm';
import HomePage from './HomePage';
import CityTrailsContainer from './Trails';
import CityProfileContainer from '../components/CityProfile';

export default function Pages() {
  return (
    <>
      <Route path='/login' component={LoginPage}></Route>
      <Route path='/signup' component={SignupPage}></Route>
      <Route path='/search' component={Search}></Route>
      <Route path='/reviews/:id/new' component={CreateReviewFormContainer}></Route>
      <Route exact path='/trails/us/:nameOfCity' component={CityProfileContainer}></Route>
      <Route exact path='/trails/:id' component={TrailDetailContainer}></Route>
      <Route exact path='/trails' component={TrailsContainer}></Route>
      <Route exact path='/' component={HomePage}></Route>
    </>
  );
}
