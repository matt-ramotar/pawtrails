import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Provider, useDispatch } from 'react-redux';
import { setUser } from './store/auth';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MultipleSelect from './components/MultipleSelect';
import MenuAppBar from './components/AppBar';
import configureStore from './store/configureStore';
import Pages from './pages/Pages';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
}

function App() {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'light' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  // if (loading) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <MenuAppBar></MenuAppBar>
          <Pages></Pages>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
