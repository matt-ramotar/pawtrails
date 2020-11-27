const SET_CENTER = 'map/SET_CENTER';

const initialState = { center: { lat: '37.7749', lng: '-122.4194' } };

export const setCenter = center => ({ type: SET_CENTER, center });

export default function mapReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CENTER:
      return { ...state, center: action.center };
    default:
      return state;
  }
}
