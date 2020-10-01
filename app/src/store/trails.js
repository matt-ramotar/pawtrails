const LOAD_ALL_TRAILS = 'trails/LOAD_ALL_TRAILS';
const LOAD_QUERIED_TRAILS = 'trails/SET_TRAILS';

export const loadAllTrails = trails => ({
  type: LOAD_ALL_TRAILS,
  trails,
});

export const loadQueriedTrails = trails => ({
  type: LOAD_QUERIED_TRAILS,
  trails,
});

export const getAllTrails = () => async dispatch => {
  const res = await fetch('/api/trails');
  if (res.ok) {
    const data = await res.json();
    dispatch(loadAllTrails(data.trails));
  }
};

export const getTrails = name => async dispatch => {
  const res = await fetch('/api/trails', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(loadQueriedTrails(data.trails));
  }
};

export default function trailsReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_ALL_TRAILS:
      return { ...state, list: action.trails };
    default:
      return state;
  }
}
