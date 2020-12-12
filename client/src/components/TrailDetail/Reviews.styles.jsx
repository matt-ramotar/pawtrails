import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    padding: 10,
  },

  header__box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '.85rem',
    alignSelf: 'flex-start',
  },

  buttons__box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  search__button: {
    maxWidth: 30,
    minWidth: 30,
    maxHeight: 30,
    minHeight: 30,
    borderRadius: '50%',
    border: '1px solid #eeeeee',
    marginRight: 5,
  },

  sort__button: {
    maxHeight: 30,
    minHeight: 30,
    borderRadius: 10,
    border: '1px solid #eeeeee',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  tags__box: {
    marginTop: 10,
    marginBottom: 10,
  },
}));
