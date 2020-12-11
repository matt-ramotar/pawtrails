import initialState from '../initialstates/city';

const SET_CITY = 'city/SET_CITY';
export const getCity = async name => {
  const res = await fetch(`/api/cities/${name.toLowerCase()}`);
  if (res.ok) {
    const { Trails: trails, lat, lng, name } = await res.json();
    return { trails, lat, lng, name };
  }
};

export const setCity = city => {
  return {
    type: SET_CITY,
    city,
  };
};

export const loadCity = name => async dispatch => {
  const res = await fetch(`/api/cities/${name.toLowerCase()}`);
  if (res.ok) {
    const city = await res.json();

    const { Trails: trails, lat, lng, name, id } = city;
    console.log(city);
    console.log(JSON.stringify({ id, name, coords: { lat, lng }, trails }));

    dispatch(setCity({ id, name, coords: { lat, lng }, trails }));
  }
};

export default function cityReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CITY:
      return { ...state, ...action.city };
    default:
      return state;
  }
}
