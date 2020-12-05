import React, { useEffect, useState } from 'react';
import { Box, Button, Chip, Divider, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Rating from '@material-ui/lab/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../store/users';

import TimeAgo from 'javascript-time-ago';
import ReactTimeAgo from 'react-time-ago';
import en from 'javascript-time-ago/locale/en';

const useStyles = makeStyles(theme => ({}));
TimeAgo.addDefaultLocale(en);

export default function ReviewCard({ review }) {
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      console.log(review);
      const user = await getUser(review.userId);
      console.log(user);
      setUser(user);
    })();
  }, [review]);

  if (!user) return null;

  return (
    <Box style={{ padding: 10 }}>
      <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
          <img src={user.photo} style={{ width: 30, height: 30, borderRadius: '50%', marginRight: 10 }} />
          <Typography>{`${user.firstName} ${user.lastName}`}</Typography>
        </Box>
        <Box>
          <Button>
            <i class='fas fa-ellipsis-v'></i>
          </Button>
        </Box>
      </Box>
      <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
        <Box style={{ marginRight: 10 }}>
          <Rating value={review.rating} readOnly size='small' />
        </Box>
        <ReactTimeAgo date={review.date} locale='en-US' />
      </Box>
      <Box>
        <Typography variant='body2'>{review.body}</Typography>
      </Box>
      <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 }}>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          {review.Reactions.map((reaction, i) => (
            <Chip
              label={<Typography style={{ fontSize: '1.5rem' }}>{reaction.reaction}</Typography>}
              size='small'
              style={{ backgroundColor: 'transparent' }}
            />
          ))}
        </Box>
        <Box>
          {review.TrailConditions.map(condition => (
            <Chip
              label={condition.condition}
              style={{ backgroundColor: '#E7F0FE', color: '#1D72E7', margin: 5 }}
              size='small'
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
