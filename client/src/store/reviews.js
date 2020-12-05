const CREATE_REVIEW = 'reviews/CREATE_REVIEW';
const SET_TRAIL_REVIEWS = 'reviews/SET_TRAIL_REVIEWS';

export const createReview = data => async dispatch => {
  const res = await fetch('/api/reviews', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

export const setTrailReviews = reviews => ({ type: SET_TRAIL_REVIEWS, reviews });

export const loadTrailReviews = trailId => async dispatch => {
  const res = await fetch(`/api/trails/${trailId}/reviews`);
  if (res.ok) {
    const reviews = await res.json();
    dispatch(setTrailReviews(reviews));
  }
};

export default function reviewsReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_REVIEW:
      return { ...state, current: action.current };
    case SET_TRAIL_REVIEWS:
      return { ...state, trailReviews: action.reviews };
    default:
      return state;
  }
}
