import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import auth from './auth';
import trails from './trails';
import reviews from './reviews';
import cities from './cities';
import city from './city';
import trail from './trail';
import filters from './filters';
import map from './map';
import views from './views';
import lists from './lists';

const rootReducer = combineReducers({
  auth,
  trails,
  reviews,
  cities,
  city,
  filters,
  trail,
  map,
  views,
  lists,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeEnhancer = composeEnhancers(applyMiddleware(thunk));

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, storeEnhancer);
}
