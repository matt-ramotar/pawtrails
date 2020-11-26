const SET_TRAIL = 'trail/SET_TRAIL';

export const setTrail = trail => ({ type: SET_TRAIL, trail });

export default function trailReducer(state = {}, action) {
  switch (action.type) {
    case SET_TRAIL:
      return { ...state, ...action.trail };
    default:
      return state;
  }
}
