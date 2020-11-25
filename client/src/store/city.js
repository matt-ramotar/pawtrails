const SET_CITY = 'city/SET_CITY';

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

    const { Trails: trails, lat, lng, name } = city;

    dispatch(setCity({ name, coords: { lat, lng }, trails }));
  }
};

export default function cityReducer(state = {}, action) {
  switch (action.type) {
    case SET_CITY:
      return { ...state, ...action.city };
    default:
      return state;
  }
}
