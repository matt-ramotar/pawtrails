import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MenuAppBar from './components/AppBar';
import configureStore from './store/configureStore';
import Pages from './pages/Pages';
import Default from './pages/Default';
const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
}

function App() {
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

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Pages></Pages>
          <Default />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
