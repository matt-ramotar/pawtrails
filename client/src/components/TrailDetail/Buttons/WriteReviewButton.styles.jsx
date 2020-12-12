import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  writeReviewButton: {
    backgroundColor: '#ffffff',
    borderColor: '#eeeeee',
    boxShadow: 'none',
    borderRadius: 10,
    justifySelf: 'center',
  },
  writeReviewBox: { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  writeReviewText: {
    color: '#212121',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '.7rem',
  },
}));
