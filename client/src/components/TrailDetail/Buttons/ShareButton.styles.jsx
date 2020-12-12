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

  label: {
    color: '#1D72E7',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },

  popover: {
    backgroundColor: 'transparent',
    overflow: 'hidden',
    marginTop: -60,
    marginLeft: -20,
  },

  icons__box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 150,
    backgroundColor: '#414141',
  },
}));
