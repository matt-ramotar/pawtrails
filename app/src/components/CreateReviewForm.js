import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createReview } from '../store/reviews';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import MultipleSelect from './MultipleSelect';

//const useStyles = makeStyles(theme => ({}))

// const classes = useStyles();
const CreateReviewForm = ({ createReviewDispatch, userId, trailId }) => {
  const [rating, setRating] = useState(null);
  const [trailConditions, setTrailConditions] = useState([]);
  const [body, setBody] = useState('');
  const [date, setDate] = useState(null);

  const updateRating = e => setRating(e.target.value);
  const updateTrailConditions = e => {
    e.preventDefault();
    setTrailConditions([...trailConditions, e.target.value]);
  };
  const updateBody = e => setBody(e.target.value);
  const updateDate = e => setDate(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const payload = {
      rating,
      userId,
      trailId,
      trailConditions,
      body,
      date,
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
        <br />
        <TextField
          placeholder='Give back to the community. Share your thoughts about the trail so others know what to expect.'
          multiline
          value={body}
          onChange={updateBody}
        />
        <br />
        <input type='date' value={date} onChange={updateDate}></input>
        <br />
        <MultipleSelect value={trailConditions} onChange={updateTrailConditions} />
        <br />
        <button type='submit'>Submit</button>
        <br />
      </form>
    </section>
  );
};

const CreateReviewFormContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.data);
  const trail = useSelector(state => state.trails.current);

  const createReviewDispatch = data => dispatch(createReview(data));
  return (
    <CreateReviewForm
      userId={user.id}
      createReviewDispatch={createReviewDispatch}
      trailId={trail.id}
    />
  );
};

export default CreateReviewFormContainer;
