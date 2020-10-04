import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import Typography from '@material-ui/core/Typography';
import { Chip } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useModal } from 'react-modal-hook';
import CreateReviewModal from '../components/CreateReviewModal';
import { getTrail } from '../store/trails';
import CreateReviewFormContainer from '../components/CreateReviewForm.js';
import { useGoogleMaps } from 'react-hook-google-maps';
import FavoriteButtonContainer from '../components/FavoriteButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  hero: { position: 'relative' },
  mainPhoto: {
    height: '312px',
    width: '100%',
    'background-repeat': 'no-repeat',
    'background-position': 'center center',
    'background-size': 'cover',
  },
  heroDetails: {
    position: 'absolute',
    bottom: '24px',
    margin: '0 24px',
    display: 'flex',
    'flex-direction': 'column',
  },
  difficulty: {
    width: '72px',
  },
}));

const TrailDetail = ({ getTrailDispatch, trail, user, google, location, lat, lng }) => {
  const { id } = useParams();

  const classes = useStyles();

  const [data, setData] = useState([]);

  useEffect(() => {
    getTrailDispatch(id);
  }, [id]);

  const [showCreateReviewModal, hideCreateReviewModal] = useModal(({ in: open, onExited }) => (
    <CreateReviewModal id={id} open={open} onExited={onExited} onClose={hideCreateReviewModal} />
  ));

  const { ref, map, googleAPIObj } = useGoogleMaps(
    google,

    {
      center: { lat: Number(lat), lng: Number(lng) },
      zoom: 10,
    }
  );

  if (!trail) return null;

  return (
    <>
      <div className={classes.hero}>
        <img src={trail.Photos[0].url} className={classes.mainPhoto} />
        <div className={classes.heroDetails}>
          <Typography variant='h5' className={classes.title}>
            {trail.name}
          </Typography>
          <Chip
            color='primary'
            size='small'
            label={trail.difficulty}
            className={classes.difficulty}
          />
        </div>
      </div>
      <Carousel showArrows={true}>
        {/* onChange={onChange} */}
        {/* onClickItem={onClickItem} */}
        {/* onClickThumb={onClickThumb}> */}

        {trail.Photos.map(photo => (
          <div>
            <img src={photo.url} />
          </div>
        ))}
      </Carousel>

      <div>
        <div>
          <p>Length</p>
          <p>{trail.length}</p>
        </div>
        <div>
          <p>Elevation Gain</p>
          <p>{trail.elevationGain}</p>
        </div>
        <div>
          <p>Route Type</p>
          <p>{trail.routeType}</p>
        </div>
      </div>
      <div>
        {trail.Tags.map(tag => (
          <Chip color='default' size='small' label={tag.tag} />
        ))}
      </div>

      <Typography variant='body2' color='textSecondary' component='p'>
        {trail.overview}
      </Typography>

      <NavLink
        to='/reviews/new'
        trailId={trail.id}
        type='button'
        userId={user.id}
        render={() => <CreateReviewFormContainer></CreateReviewFormContainer>}>
        Write Review
      </NavLink>

      <div ref={ref} style={{ width: 400, height: 300 }} />

      <FavoriteButtonContainer />
    </>
  );
};

export default function TrailDetailContainer() {
  const dispatch = useDispatch();
  const getTrailDispatch = id => dispatch(getTrail(id));
  const google = process.env.REACT_APP_GOOGLE_API_KEY;
  console.log(google);

  const trail = useSelector(state => state.trails.current);
  const user = useSelector(state => state.auth.data);
  return (
    <TrailDetail
      getTrailDispatch={getTrailDispatch}
      trail={trail}
      user={user}
      google={google}
      lat={trail ? trail.lat : null}
      lng={trail ? trail.lng : null}
    />
  );
}
