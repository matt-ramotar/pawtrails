import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createReview } from '../store/reviews';
//const useStyles = makeStyles(theme => ({}))

const CreateReviewForm = ({ createReviewDispatch }) => {
  // const classes = useStyles();
  const [rating, setRating] = useState(null);

  const updateRating = e => setRating(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    const payload = {
      rating,
    };
    createReviewDispatch(payload);
  };
  return (
    <section className='new-form-holder centered middled'>
      <form onSubmit={handleSubmit}>
        <input
          type='number'
          placeholder='Rating'
          min='0'
          max='5'
          required
          value={rating}
          onChange={updateRating}
        />
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

const CreateReviewFormContainer = () => {
  const dispatch = useDispatch();
  const createReviewDispatch = data => dispatch(createReview(data));
  // const hideForm = () => dispatch(PokemonAction.hideForm());

  return <CreateReviewForm createReviewDispatch={createReviewDispatch} />;
};

export default CreateReviewFormContainer;
