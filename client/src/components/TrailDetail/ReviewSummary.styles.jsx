import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },

  title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '.85rem',
    alignSelf: 'flex-start',
  },

  ratings__box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  avg__box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  avg__text: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },

  stars__box: {},
}));
