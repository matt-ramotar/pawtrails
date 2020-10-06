const { useGoogleMaps } = require('react-hook-google-maps');

const SET_CITY = 'location/SET_CITY';
const SET_CITIES = 'location/LOAD_CITIES';
const SET_MAP_CONFIG = 'location/SET_MAP_CONFIG';

export const setCity = city => {
  console.log('setCity', city);
  return {
    type: SET_CITY,
    city,
  };
};

export const setCities = cities => {
  return {
    type: SET_CITIES,
    cities,
  };
};

export const setMapConfig = config => {
  return {
    type: SET_MAP_CONFIG,
    config,
  };
};

export const configMap = (lat, lng) => async dispatch => {
  const res = await fetch(`/api/location/map/lat=${lat}&lng=${lng}`);
  console.log(res);
  if (res.ok) {
    const config = await res.json();
    dispatch(setMapConfig(config));
    return config.key;
  }
};

export const getCity = name => async dispatch => {
  const res = await fetch(`/api/location/${name}`);
  if (res.ok) {
    const city = await res.json();
    dispatch(setCity(city));
  }
};

export const getCities = () => async dispatch => {
  const res = await fetch('/api/location');
  const cities = {};
  if (res.ok) {
    console.log('load cities', res);
    (await res.json()).forEach(city => (cities[city.name] = city));
    dispatch(setCities(cities));
  }
  console.log('load cities', res);
  return cities;
};

export default function locationReducer(state = {}, action) {
  switch (action.type) {
    case SET_CITY:
      return { ...state, city: action.city };
    case SET_CITIES:
      return { ...state, cities: action.cities };
    case SET_MAP_CONFIG:
      return { ...state, map: action.config };
    default:
      return state;
  }
}
