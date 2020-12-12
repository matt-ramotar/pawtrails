import React from 'react';
import { useStyles } from './Description.styles';
import { Box, Button, Typography } from '@material-ui/core';

export default function Description({ trail }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.text__box}>
        <Typography variant='body2' className={classes.description__text}>
          {trail.overview}
        </Typography>
      </Box>
      <Box className={classes.button__box}>
        <Button disabled className={classes.button}>
          <i class='fas fa-chevron-right fa-lg'></i>
        </Button>
      </Box>
    </Box>
  );
}
