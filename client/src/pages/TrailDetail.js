import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Chip } from '@material-ui/core';
import { getTrail } from '../store/trails';
import CreateReviewFormContainer from '../components/CreateReviewForm.js';
// import { useGoogleMaps } from 'react-hook-google-maps';
import FavoriteButtonContainer from '../components/FavoriteButton';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import Fab from '@material-ui/core/Fab';
import CreateIcon from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';
import ShareIcon from '@material-ui/icons/Share';
import NavigationIcon from '@material-ui/icons/Navigation';

import { getWeather } from '../store/trails';
import WeatherContainer from '../components/Weather';

const useStyles = makeStyles(() => ({
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
    'max-width': '80px',
  },
  overview: {
    color: '#414141',
    'font-size': '18px',
    'line-height': 1.44,
    'white-space': 'pre-wrap',
    'overflow-wrap': 'break-word',
    margin: '0 24px',
    'border-bottom': '1px solid #414141',
    padding: '24px 0',
  },
  favorites: {
    position: 'absolute',
    right: '24px',
    display: 'flex',
    bottom: '24 px',
  },
  statsContainer: {
    'border-bottom': '1px solid #414141',
    margin: '0 24px',
    padding: '24px 0',
  },
  statItem: {
    width: '32%',
    display: 'inline-block',
    padding: '24px 0',
    margin: '0 24px',
  },
  article: {
    width: '66.6666667%',
    border: '1px solid #414141',
  },

  statLabel: {
    display: 'block',
    color: '#5A5A5A',
    'font-size': '12px',
    width: 'auto',
    'line-height': 1.42,
  },
  stat: {
    display: 'block',
    color: 'black',
    width: 'auto',
    'font-size': '16px',
    'font-weight': 'bold',
    'line-height': 1.38,
  },
  tagCloud: {
    margin: '0 24px',
    padding: '24px 0',
    display: 'block',
  },
  tag: {
    margin: '5px 5px',
    display: 'inline-block',
    'background-color': '#81C683',
  },
  googleMap: {
    margin: '0 24px',
    padding: '24px 0',
    display: 'block',
    width: 'auto',
  },
  floatingActions: {
    position: 'absolute',
    bottom: '24px',
    margin: '0 24px',
    display: 'flex',
    right: '-5px',
  },
  floatingAction: {
    margin: '5px',
  },
}));

const TrailDetail = ({ getTrailDispatch, getWeatherDispatcher, trail, user, lat, lng }) => {
  const { id } = useParams();

  const classes = useStyles();

  const [] = useState([]);

  useEffect(() => {
    getTrailDispatch(id);
  }, [id]);

  useEffect(() => {
    if (trail) {
      getWeatherDispatcher(trail.lat, trail.lng);
    }
  }, [trail]);

  // const { ref } = useGoogleMaps(
  //   google,

  //   {
  //     center: { lat: Number(lat), lng: Number(lng) },
  //     zoom: 10,
  //   }
  // );

  if (!trail) return null;

  return (
    <>
      <div className={classes.hero}>
        <img src={trail.Photos[0].url} className={classes.mainPhoto} />
        <div className={classes.heroDetails}>
          <Typography variant='h5' className={classes.title}>
            {trail.name}
            <FavoriteButtonContainer className={classes.favorites} />
          </Typography>

          <Chip color='primary' size='small' label={trail.difficulty} className={classes.difficulty} />
        </div>
        <div className={classes.floatingActions}>
          <Fab className={classes.floatingAction} style={{ backgroundColor: '#90caf9' }}>
            <AddIcon />
          </Fab>
          <Fab
            aria-label='review'
            href={`/reviews/${trail.id}/new`}
            className={classes.floatingAction}
            style={{ backgroundColor: '#F6A5C0' }}>
            <CreateIcon />
          </Fab>
          <Fab className={classes.floatingAction} style={{ backgroundColor: '#D5D5D5' }}>
            <NavigationIcon />
          </Fab>

          <Fab className={classes.floatingAction} style={{ backgroundColor: '#414141' }}>
            <ShareIcon />
          </Fab>
        </div>
      </div>
      <Box className={classes.article}>
        <div className={classes.overview}>
          <Typography variant='body2' color='textSecondary' component='p'>
            {trail.overview}
          </Typography>
        </div>

        <Box display='flex' flexDirection='row' className={classes.statsContainer}>
          <span className={classes.statItem}>
            <span className={classes.statLabel}>Length</span>
            <span className={classes.stat}>{trail.length}</span>
          </span>
          <span className={classes.statItem}>
            <span className={classes.statLabel}>Elevation Gain</span>
            <span className={classes.stat}>{trail.elevationGain}</span>
          </span>
          <span className={classes.statItem}>
            <span className={classes.statLabel}>Route Type</span>
            <span className={classes.stat}>{trail.routeType}</span>
          </span>
        </Box>

        <Box className={classes.tagCloud}>
          {trail.Tags.map(tag => (
            <Chip size='small' label={tag.tag} className={classes.tag} />
          ))}
        </Box>

        {/* <Box className={classes.googleMap}>
          <div ref={ref} style={{ width: '100%', height: 300 }} />
        </Box> */}

        <Box>
          <WeatherContainer lat={lat} lng={lng}></WeatherContainer>
        </Box>

        {/* <Box className={classes.weather}>{trail.weather.daily[0].weather[0].icon}</Box> */}

        {/* <Carousel showArrows={true}>
        {trail.Photos.map(photo => (
          <div>
            <img src={photo.url} />
          </div>
        ))}
      </Carousel> */}

        <NavLink
          to='/reviews/new'
          trailId={trail.id}
          type='button'
          userId={user.id}
          render={() => <CreateReviewFormContainer></CreateReviewFormContainer>}>
          Write Review
        </NavLink>
      </Box>
    </>
  );
};

export default function TrailDetailContainer() {
  const dispatch = useDispatch();
  const getTrailDispatch = id => dispatch(getTrail(id));
  const getWeatherDispatcher = (lat, lng) => dispatch(getWeather(lat, lng));
  // const google = process.env.REACT_APP_GOOGLE_API_KEY;
  // console.log(google);

  const trail = useSelector(state => state.trails.current);
  const user = useSelector(state => state.auth.data);

  return (
    <TrailDetail
      getTrailDispatch={getTrailDispatch}
      getWeatherDispatcher={getWeatherDispatcher}
      trail={trail}
      user={user}
      // google={google}
      lat={trail ? trail.lat : null}
      lng={trail ? trail.lng : null}
    />
  );
}
