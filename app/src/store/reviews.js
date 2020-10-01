export const createReview = data => async dispatch => {
  const response = await fetch('/api/reviews', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  // if (response.ok) {
  //   // dispatch(hideForm());
  //   // dispatch(getPokemon());
  // }
};
