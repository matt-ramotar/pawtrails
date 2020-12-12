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
  photos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '100%',
    overflowX: 'scroll',
  },
  photo: {
    width: 150,
    height: 90,
    borderRadius: 5,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },

  add__button: {
    backgroundColor: '#ffffff',
    borderColor: '#eeeeee',
    boxShadow: 'none',
    borderRadius: 10,
    justifySelf: 'center',
  },

  'add__button--disabled': {
    backgroundColor: '#414141',
    borderColor: '#eeeeee',
    boxShadow: 'none',
    borderRadius: 10,
    justifySelf: 'center',
  },

  add__box: { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  add__text: {
    color: '#757575',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '.7rem',
  },
}));
