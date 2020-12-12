import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';

import { useStyles } from './Photos.styles.jsx';

export default function Photos({ trail }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant='h6' className={classes.title}>
        Photos
      </Typography>
      <Box className={classes.photos}>
        {trail.Photos.map(photo => (
          <img src={photo.url} className={classes.photo} />
        ))}
      </Box>
      <Button disabled className={classes['add__button--disabled']} variant='outlined' elevation={0}>
        <Box className={classes.add__box}>
          <Typography variant='caption' className={classes.add__text}>
            <span style={{ margin: 5 }}>
              <i class='fas fa-camera fa-2x' style={{ color: '#757575' }}></i>
            </span>
            Add a Photo
          </Typography>
        </Box>
      </Button>
    </Box>
  );
}
