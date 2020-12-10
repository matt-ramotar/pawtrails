const SET_CITIES = 'cities/LOAD_CITIES';

export const setCities = cities => {
  return {
    type: SET_CITIES,
    cities,
  };
};

export const getCities = async () => {
  const res = await fetch('/api/cities');
  if (res.ok) return await res.json();
};

export default function citiesReducer(state = {}, action) {
  switch (action.type) {
    case SET_CITIES:
      return { ...state, cities: action.cities };
    default:
      return state;
  }
}
