const SET_FILTERS = 'filters/SET_FILTERS';

const SET_DISTANCE = 'filters/SET_DISTANCE';

const SET_ELEVATION_GAIN = 'filters/SET_ELEVATION_GAIN';

const SET_ROUTE_TYPE = 'filters/SET_ROUTE_TYPE';

const SET_DIFFICULTY = 'filters/SET_DIFFICULTY';

const SET_TAGS = 'filters/SET_TAGS';

export const setDistance = (min, max) => ({ type: SET_DISTANCE, distance: { min, max } });

export const setElevationGain = (min, max) => ({ type: SET_ELEVATION_GAIN, elevationGain: { min, max } });

export const setTags = tags => ({ type: SET_TAGS, tags });

export const setRouteType = routeType => ({ type: SET_ROUTE_TYPE, routeType });

export const setDifficulty = difficulty => ({ type: SET_DIFFICULTY, difficulty });

export const setFilters = filters => {
  return {
    type: SET_FILTERS,
    filters,
  };
};

export const addTag = (tag, prevTags) => async dispatch => {
  const nextTags = prevTags;
  nextTags[tag] = true;
  dispatch(setTags(Object.keys(nextTags)));
};

export const removeTag = (tag, prevTags) => async dispatch => {
  const nextTags = prevTags;
  delete nextTags[tag];
  dispatch(setTags(Object.keys(nextTags)));
};

export default function filtersReducer(state = {}, action) {
  switch (action.type) {
    case SET_ELEVATION_GAIN:
      return { ...state, elevationGain: action.elevationGain };

    case SET_DISTANCE:
      return { ...state, distance: action.distance };

    case SET_ROUTE_TYPE:
      return { ...state, routeType: action.routeType };

    case SET_DIFFICULTY:
      return { ...state, difficulty: action.difficulty };

    case SET_TAGS:
      return { ...state, tags: action.tags };

    default:
      return state;
  }
}
