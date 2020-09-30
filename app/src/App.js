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
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  // Check to see if there is a user logged in before loading the application
  useEffect(() => {
    const loadUser = async () => {
      const res = await fetch('/api/session');
      if (res.ok) {
        res.data = await res.json(); // current user info
        console.log(res.data);
        // if using Redux, add current user info to the store
        dispatch(setUser(res.data.user));
      }
      setLoading(false);
    };
    loadUser();
  }, [dispatch]);

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
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  // if (loading) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MenuAppBar></MenuAppBar>
        <MultipleSelect></MultipleSelect>
        <BrowserRouter>
          <Pages></Pages>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
