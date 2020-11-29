const SET_FILTERS = 'filters/SET_FILTERS';

const SET_DISTANCE = 'filters/SET_DISTANCE';

const SET_ELEVATION_GAIN = 'filters/SET_ELEVATION_GAIN';

const SET_ROUTE_TYPE = 'filters/SET_ROUTE_TYPE';

const SET_DIFFICULTY = 'filters/SET_DIFFICULTY';

const SET_TAGS = 'filters/SET_TAGS';

export const setDistance = distance => ({ type: SET_DISTANCE, distance });

export const setElevationGain = elevationGain => ({ type: SET_ELEVATION_GAIN, elevationGain });

export const setTags = tags => ({ type: SET_TAGS, tags });

export const setRouteType = routeType => ({ type: SET_ROUTE_TYPE, routeType });

export const setDifficulty = difficulty => ({ type: SET_DIFFICULTY, difficulty });

export const setFilters = filters => {
  return {
    type: SET_FILTERS,
    filters,
  };
};

export default function filtersReducer(state = {}, action) {
  switch (action.type) {
    case SET_FILTERS:
      return { ...state.filters, ...action.filters };
    default:
      return state;
  }
}
