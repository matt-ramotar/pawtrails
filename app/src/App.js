import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MultipleSelect from './components/MultipleSelect';
import MenuAppBar from './components/AppBar';

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
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MenuAppBar></MenuAppBar>
        <MultipleSelect></MultipleSelect>
        <BrowserRouter>
          <Route exact path='/'>
            <h1>Paw Trails</h1>
            <Button
              variant='contained'
              color='primary'
              className={classes.button}>
              Material-Ui
            </Button>
          </Route>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
