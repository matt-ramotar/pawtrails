const CREATE_REVIEW = 'reviews/CREATE_REVIEW';

export const createReview = data => async dispatch => {
  console.log(data);
  const response = await fetch('/api/reviews', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  console.log(response);
  // if (response.ok) {
  //   // dispatch(hideForm());
  //   // dispatch(getPokemon());
  // }
};

export default function reviewsReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_REVIEW:
      return { ...state, current: action.current };
    default:
      return state;
  }
}
