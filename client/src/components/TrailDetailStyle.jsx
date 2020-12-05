import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  headerBox: {},
  headerTitle: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#212121',
  },
  headerRatingBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  actionsBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },

  actionBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  actionButton: {
    backgroundColor: '#1D72E7',
    minWidth: 40,
    minHeight: 40,
    maxHeight: 40,
    maxWidth: 40,
    borderRadius: '50%',
  },

  actionLabel: {
    color: '#1D72E7',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },

  star: {
    color: '#FBBD04',
  },
  contentBox: {
    maxHeight: 350,
    overflowY: 'auto',
  },
  aboutBox: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  aboutDescriptionBox: {
    width: '80%',
  },
  aboutDescription: {
    fontFamily: 'Roboto',
    fontSize: '.75rem',
  },

  photosBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  photosTitle: {
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
    width: 120,
    height: 80,
    borderRadius: 10,
    margin: 5,
  },

  addPhotoButton: {
    backgroundColor: '#ffffff',
    borderColor: '#eeeeee',
    boxShadow: 'none',
    borderRadius: 10,
    justifySelf: 'center',
  },
  addPhotoBox: { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  addPhotoText: {
    color: '#212121',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '.7rem',
  },

  reviewSummaryBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  ratingSummaryBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  avgRatingBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avgRating: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },

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
