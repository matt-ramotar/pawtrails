const SET_CITY = 'location/SET_CITY';
const SET_CITIES = 'location/LOAD_CITIES';

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

export const loadCity = name => async dispatch => {
  const res = await fetch('/api/cities', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(name),
  });
  console.log('load city', res);

  if (res.ok) {
    const city = await res.json();
    dispatch(setCity(city));
  }
};

export const loadCities = () => async dispatch => {
  const res = await fetch('/api/cities');
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
    default:
      return state;
  }
}
