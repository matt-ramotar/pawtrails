const SET_FILTERS = 'filters/SET_FILTERS';

export const setFilters = filters => {
  return {
    type: SET_FILTERS,
    filters,
  };
};

export default function filtersReducer(state = {}, action) {
  switch (action.type) {
    case SET_FILTERS:
      return action.filters;
    default:
      return state;
  }
}
