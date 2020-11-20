import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createReview } from '../store/reviews';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import MultipleSelect from './MultipleSelect';
import { getTrail } from '../store/trails';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  title: {
    padding: '0 24px',
  },
  formField: {
    padding: '0 24px',
    margin: '5px 5px',
    width: '66.6666667%',
  },
  paper: {
    width: '66.6666667%',
    justify: 'center',
    margin: '24px',
    'border-radius': '8px',
    position: 'relative',
  },
  paperContainer: {
    width: '100%',
    display: 'flex',
    flexdirection: 'row',
    justifyContent: 'center',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    position: 'absolute',
    right: '24px',
    bottom: '24px',
  },
}));

const CreateReviewForm = ({ createReviewDispatch, getTrailDispatch, userId, trailId, trail }) => {
  const classes = useStyles();
  const [rating, setRating] = useState(null);
  const [value, setValue] = React.useState(0);
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

  useEffect(() => {
    getTrailDispatch(trailId);
  }, [trailId]);

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

  if (!trail) return null;

  return (
    <Box className={classes.paperContainer}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant='h3' className={classes.title}>
          {trail.name}
        </Typography>

        <form onSubmit={handleSubmit}>
          <Rating
            name='simple-controlled'
            value={value}
            size='large'
            className={classes.formField}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <br />
          <TextField
            placeholder='Give back to the community. Share your thoughts about the trail so others know what to expect.'
            multiline
            value={body}
            onChange={updateBody}
            className={[classes.textArea, classes.formField]}
          />
          <br />
          <TextField
            type='date'
            defaultValue={new Date()}
            className={classes.formField}
            value={date}
            onChange={updateDate}
          />
          <br />
          <div className={classes.formField}>
            <MultipleSelect
              value={trailConditions}
              onChange={updateTrailConditions}></MultipleSelect>
          </div>
          <br />
          <br />
          <br />
          <Button type='submit' className={classes.submitButton}>
            Submit
          </Button>
          <br />
        </form>
      </Paper>
    </Box>
  );
};

const CreateReviewFormContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.data);

  const trailId = useParams().id;
  console.log(trailId);

  const trail = useSelector(state => state.trails.current);

  const createReviewDispatch = data => dispatch(createReview(data));
  const getTrailDispatch = id => dispatch(getTrail(id));
  return (
    <CreateReviewForm
      userId={user.id}
      trailId={trailId}
      createReviewDispatch={createReviewDispatch}
      getTrailDispatch={getTrailDispatch}
      trail={trail}
    />
  );
};

export default CreateReviewFormContainer;
