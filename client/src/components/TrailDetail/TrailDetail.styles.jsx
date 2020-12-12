import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  paper: {
    width: '80%',
    maxHeight: '100%',
    marginLeft: '2.5%',
    marginTop: 50,
  },
  actions__box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  content__box: {
    maxHeight: 350,
    overflowY: 'auto',
  },
}));
