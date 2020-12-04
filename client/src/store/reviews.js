const CREATE_REVIEW = 'reviews/CREATE_REVIEW';

export const createReview = data => async dispatch => {
  const res = await fetch('/api/reviews', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

export default function reviewsReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_REVIEW:
      return { ...state, current: action.current };
    default:
      return state;
  }
}
