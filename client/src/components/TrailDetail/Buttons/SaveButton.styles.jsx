import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#1D72E7',
    minWidth: 40,
    minHeight: 40,
    maxHeight: 40,
    maxWidth: 40,
    borderRadius: '50%',
  },

  button__disabled: {
    backgroundColor: '#414141',
    minWidth: 40,
    minHeight: 40,
    maxHeight: 40,
    maxWidth: 40,
    borderRadius: '50%',
  },

  label: {
    color: '#1D72E7',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },

  label__disabled: {
    color: '#414141',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  menu: {
    width: 110,
    marginTop: -80,
    marginLeft: 35,
  },
}));
