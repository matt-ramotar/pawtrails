import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto',
    color: '#212121',
  },
  mainPaper: {
    width: 400,
    // height: 400,
    overflowY: 'auto',
  },
  headerBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  userBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  userAvatarBox: {
    marginRight: 10,
  },

  userDetailsBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  postingPubliclyBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  formBox: {
    padding: 10,
  },
  ratingBox: {},
  reviewBodyBox: {},
  trailConditionsBox: {},
  addPhotoBox: {
    margin: 5,
  },
  actionButtonsBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cancelButton: {
    backgroundColor: '#FF4441',
    color: '#ffffff',
    margin: 5,
  },
  postButton: {
    backgroundColor: '#1D72E7',
    color: '#ffffff',
    margin: 5,
  },
  closeButton: {
    maxWidth: 30,
    minWidth: 30,
    maxHeight: 30,
    minHeight: 30,
    borderRadius: '50%',
  },
  closeButtonBox: {
    backgroundColor: '#eeeeee',
    borderRadius: '50%',
    minWidth: 30,
    maxWidth: 30,
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  },
  divider: { margin: 10 },
  addToPostBox: {
    borderRadius: 10,
    border: '1px solid #eeeeee',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  menu: {
    minWidth: 400,
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  menuBox: {
    width: '100%',
  },
}));
