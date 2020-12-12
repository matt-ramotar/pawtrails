import React from 'react';
import { Box, Button, Chip, Divider, Typography } from '@material-ui/core';
import { useStyles } from './Reviews.styles.jsx';
import ReviewCard from '../ReviewCard';

export default function Reviews({ trail }) {
  const trailConditionsArray = Object.entries(trail.TrailSummary.summary.counts.trailConditions);
  trailConditionsArray.unshift(['All']);

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.header__box}>
        <Typography variant='h6' className={classes.title}>
          Reviews
        </Typography>
        <Box className={classes.buttons__box}>
          <Button className={classes.search__button}>
            <i class='fas fa-search' style={{ color: '#1D72E7' }}></i>
          </Button>

          <Button className={classes.sort__button}>
            <i class='fas fa-sort' style={{ color: '#1D72E7' }}></i>
            <Typography variant='caption' style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
              Sort
            </Typography>
          </Button>
        </Box>
      </Box>

      <Box className={classes.tags__box}>
        {trailConditionsArray.map(chip => (
          <Chip
            clickable
            style={{
              border: '1px solid #eeeeee',
              backgroundColor: chip[1] ? '#ffffff' : '#E7F0FE',
              color: chip[1] ? '#212121' : '#1D72E7',
              fontSize: '0.5rem',
              margin: 2,
            }}
            label={
              <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography style={{ marginRight: 2 }}>{chip[1] ? chip[0].toLowerCase() : chip[0]}</Typography>
                <Typography style={{ marginLeft: 2, color: '#bdbdbd' }}>{chip[1] ? chip[1] : ''}</Typography>
              </Box>
            }
          />
        ))}
      </Box>

      <Box>
        {trail.Reviews.map(review => (
          <Box>
            <ReviewCard review={review} />
            <Divider />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
