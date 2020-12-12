import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useStyles } from './DirectionsButton.styles.jsx';
export default function DirectionsButton() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Button disabled className={classes['button--disabled']}>
        <i class='fas fa-directions fa-lg' style={{ color: '#757575' }}></i>
      </Button>
      <Typography variant='body2' className={classes['label--disabled']}>
        Directions
      </Typography>
    </Box>
  );
}
