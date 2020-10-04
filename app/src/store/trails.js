import setCity from './location';

const LOAD_ALL_TRAILS = 'trails/LOAD_ALL_TRAILS';
const LOAD_QUERIED_TRAILS = 'trails/LOAD_QUERIED_TRAILS';
const LOAD_TRAIL = 'trails/LOAD_TRAIL';

export const loadAllTrails = trails => ({
  type: LOAD_ALL_TRAILS,
  trails,
});

export const loadQueriedTrails = (city, trails) => ({
  type: LOAD_QUERIED_TRAILS,
  city,
  trails,
});

export const loadTrail = trail => ({
  type: LOAD_TRAIL,
  trail,
});

export const getAllTrails = () => async dispatch => {
  const res = await fetch('/api/trails');
  if (res.ok) {
    const data = await res.json();
    dispatch(loadAllTrails());
  }
};

export const getTrails = name => async dispatch => {
  const res = await fetch(`/api/trails/us/${name.toLowerCase()}`);
  console.log(res);
  if (res.ok) {
    const data = await res.json();
    console.log(data);
    dispatch(loadQueriedTrails(data.city, data.trails));
  }
};

export const getTrail = id => async dispatch => {
  const res = await fetch(`/api/trails/${id}`);

  if (res.ok) {
    const data = await res.json();
    console.log('get trail');
    console.log(data);
    dispatch(loadTrail(data));
  }
};

export default function trailsReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_ALL_TRAILS:
      return { ...state, list: action.trails };
    case LOAD_QUERIED_TRAILS:
      return { ...state, city: action.city, matches: action.trails };

    case LOAD_TRAIL:
      return { ...state, current: action.trail };
    default:
      return state;
  }
}
