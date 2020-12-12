import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    padding: 10,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '0.85rem',
  },
  forecast__box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  day__box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  day__text: {
    fontFamily: 'Roboto',
    color: '#212121',
    marginBottom: 0,
  },
  temp__text: {
    fontFamily: 'Roboto',
    color: '#bdbdbd',
    fontSize: '0.85rem',
    textAlign: 'right',
  },
  img: {
    marginTop: -10,
    paddingTop: 0,
  },
}));
