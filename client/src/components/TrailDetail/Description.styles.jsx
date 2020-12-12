import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text__box: {
    width: '90%',
  },
  description__text: {
    fontFamily: 'Roboto',
    fontSize: '.75rem',
  },
  button__box: {},
  button: {},
}));
