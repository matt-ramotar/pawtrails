const SET_TRAIL = 'trail/SET_TRAIL';

export const setTrail = trail => ({ type: SET_TRAIL, trail });

export const loadTrail = trailId => async dispatch => {
  const res = await fetch(`/api/trails/${trailId}`);
  if (res.ok) {
    const trail = await res.json();
    dispatch(setTrail(trail));
  }
};

export default function trailReducer(state = {}, action) {
  switch (action.type) {
    case SET_TRAIL:
      return { ...state, ...action.trail };
    default:
      return state;
  }
}
