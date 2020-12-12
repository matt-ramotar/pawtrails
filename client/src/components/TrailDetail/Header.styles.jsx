import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    padding: 10,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#212121',
  },
  rating__box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  summary: {},
}));
