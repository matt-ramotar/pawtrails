import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import SearchInput from '../components/SearchInput';
import MenuAppBar from '../components/AppBar';
import SimpleSelect from '../components/Select';

export default function HomePage() {
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch(login(username, password));
  // };

  return (
    <>
      <div>
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justify='start'
          style={{ minHeight: '100vh' }}>
          <Grid item xs={6}>
            <Typography
              variant='h3'
              align='center'
              style={{
                align: 'center',
                fontFamily: `"-apple-system", "Roboto", "Helvetica", "Arial", sans-serif`,
                color: '#64B5F6',
              }}>
              Find your next favorite trail
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ align: 'center' }}>
            <SearchInput></SearchInput>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
