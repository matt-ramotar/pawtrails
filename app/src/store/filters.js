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
      return { ...state.filters, ...action.filters };
    default:
      return state;
  }
}

/*
    const { difficulty, length, elevationGain, routeType, tags } = filters;

{

}

{
difficulty: Null OR easy, moderate, hard
length: Null OR 0 - Inf
elevationGain: Null OR 0 - Inf
routeType: Null OR Loop, Out & Back, Point to Point
tags: []
}

*/
