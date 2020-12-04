const REVIEW_FORM = 'views/REVIEW_FORM';

export const setReviewForm = boolean => ({ type: REVIEW_FORM, boolean });

export default function viewsReducer(state = {}, action) {
  switch (action.type) {
    case REVIEW_FORM:
      return { ...state, reviewForm: action.boolean };
    default:
      return state;
  }
}
