import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useStyles } from './NearbyButton.styles.jsx';
export default function NearbyButton() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Button disabled className={classes['button--disabled']}>
        <i class='fas fa-map-signs fa-lg' style={{ color: '#757575' }}></i>
      </Button>
      <Typography variant='body2' className={classes['label--disabled']}>
        Nearby
      </Typography>
    </Box>
  );
}
